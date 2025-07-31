"use client";
import React, { useState } from "react";
import { ContainerScroll } from "./lib/calculator";
import { Minimize2, Maximize2, X, Home, Calculator, BarChart3, Settings, Plus } from 'lucide-react';
import Hero from "./Hero";
import { Input } from "./lib/input";
import { Label } from "./lib/label";
import { Button } from "./lib/button";

export function HeroScrollDemo() {
  const [formData, setFormData] = useState({
    monthlyHours: 0,
    hourlyCost: 0,
    errorRate: 0
  });

  const [results, setResults] = useState({
    timeSavings: 0,
    costReduction: 0,
    annualROI: 0,
    paybackPeriod: 0
  });

  const [activeTab, setActiveTab] = useState('Calculator');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateSavings = () => {
    const { monthlyHours, hourlyCost, errorRate } = formData;
    
    // Calculate time savings (assuming 80% automation efficiency)
    const automationEfficiency = 0.8;
    const timeSavings = Math.round(monthlyHours * automationEfficiency);
    
    // Calculate cost reduction
    const costReduction = Math.round(timeSavings * hourlyCost);
    
    // Calculate annual ROI (assuming $50k implementation cost)
    const implementationCost = 50000;
    const annualSavings = costReduction * 12;
    const annualROI = Math.round(((annualSavings - implementationCost) / implementationCost) * 100);
    
    // Calculate payback period
    const paybackPeriod = Math.round(implementationCost / costReduction);

    setResults({
      timeSavings,
      costReduction,
      annualROI,
      paybackPeriod
    });
  };

  const tabs = ['Dashboard', 'Calculator', 'Analytics', 'Reports'];
  const sidebarItems = [
    { icon: Home, label: 'Dashboard', active: false },
    { icon: Calculator, label: 'ROI Calculator', active: true },
    { icon: BarChart3, label: 'Analytics', active: false },
    { icon: Settings, label: 'Settings', active: false }
  ];

  return (
    <div className="flex flex-col w-[100vw] overflow-hidden">
      <ContainerScroll
        titleComponent={
          <Hero/>
        }
      >
        {/* Frost Glass Container with Compact Design */}
        <div className="w-full max-w-6xl mx-auto bg-white/10 backdrop-blur-md border border-gray-300/30 rounded-2xl shadow-2xl overflow-hidden p-2 mt-20">
          {/* macOS Window - More Compact */}
          <div className="w-full h-[600px] bg-black backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-700/50">
            {/* Title Bar - Reduced Height */}
            <div className="h-10 bg-black backdrop-blur-sm flex items-center justify-between px-4 border-b border-gray-700/50">
              {/* Traffic Light Buttons */}
              <div className="flex items-center space-x-2 ">
                <button className="w-2.5 h-2.5 bg-red-500 rounded-full hover:bg-red-600 flex items-center justify-center group">
                  <X className="w-1.5 h-1.5 text-red-800 opacity-0 group-hover:opacity-100" />
                </button>
                <button className="w-2.5 h-2.5 bg-yellow-500 rounded-full hover:bg-yellow-600 flex items-center justify-center group">
                  <Minimize2 className="w-1.5 h-1.5 text-yellow-800 opacity-0 group-hover:opacity-100" />
                </button>
                <button className="w-2.5 h-2.5 bg-green-500 rounded-full hover:bg-green-600 flex items-center justify-center group">
                  <Maximize2 className="w-1.5 h-1.5 text-green-800 opacity-0 group-hover:opacity-100" />
                </button>
              </div>
              
              {/* Window Title */}
              <div className="text-xs font-medium text-gray-100">ROI Calculator - Business Analytics</div>
              
              <div className="w-16"></div>
            </div>

            {/* Tab Bar - Reduced Height */}
            <div className="h-8 bg-black backdrop-blur-sm flex items-center px-4 border-b border-gray-700/50">
              <div className="flex space-x-1">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-2 py-1 text-xs rounded-md transition-colors ${
                      activeTab === tab
                        ? 'bg-black text-white shadow-sm border border-gray-600/50'
                        : 'text-gray-400 hover:text-white hover:bg-black'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
                <button className="ml-2 w-5 h-5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-black rounded">
                  <Plus className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>

            {/* Main Content Area - Adjusted Height */}
            <div className="flex h-[calc(100%-4.5rem)]">
              {/* Sidebar - Reduced Width */}
              <div className="w-48 bg-black backdrop-blur-sm border-r border-gray-700/50 p-3">
                <div className="space-y-1">
                  {sidebarItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.label}
                        className={`w-full flex items-center space-x-2 px-2 py-1.5 text-xs rounded-md transition-colors ${
                          item.active
                            ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                            : 'text-gray-400 hover:bg-gray-800/60 hover:text-white'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Main Content - Compact ROI Calculator */}
              <div className="flex-1 p-4 bg-black backdrop-blur-sm">
                <div className="h-full w-full bg-black backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 flex flex-col">
                  <div className="text-center mb-4">
                    <button className="mb-2 border border-gray-600/50 rounded-lg py-0.5 px-2 bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent hover:bg-gray-700/50 text-xs font-medium">
                      ROI Potential
                    </button>
                    <h2 className="text-xl font-semibold mb-2 text-white tracking-tight">Calculate Your ROI Potential</h2>
                    <p className="text-xs text-gray-400 mb-4 max-w-lg mx-auto">
                      Discover the financial impact of AI automation on your business
                    </p>
                  </div>

                  {/* Calculator Form - More Compact */}
                  <div className="flex-1 flex flex-col lg:flex-row gap-4">
                    {/* Left Side - Input Fields */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xs font-semibold text-white mb-2 border-b border-gray-700/50 pb-1">Current Metrics</h3>
                      
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <label htmlFor="monthlyHours" className="text-gray-300 font-medium text-xs block">Monthly Manual Labor Hours</label>
                          <input
                            type="number"
                            id="monthlyHours"
                            value={formData.monthlyHours}
                            onChange={(e) => handleInputChange('monthlyHours', parseInt(e.target.value) || 0)}
                            placeholder="e.g., 500"
                            className="w-full h-7 rounded-md border border-gray-600/50 bg-black backdrop-blur-sm px-2 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all"
                          />
                          <p className="text-xs text-gray-500">Total hours spent on manual tasks monthly</p>
                        </div>

                        <div className="space-y-1">
                          <label htmlFor="hourlyCost" className="text-gray-300 font-medium text-xs block">Average Hourly Cost ($)</label>
                          <input
                            type="number"
                            id="hourlyCost"
                            value={formData.hourlyCost}
                            onChange={(e) => handleInputChange('hourlyCost', parseInt(e.target.value) || 0)}
                            placeholder="e.g., 50"
                            className="w-full h-7 rounded-md border border-gray-600/50 bg-black backdrop-blur-sm px-2 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all"
                          />
                          <p className="text-xs text-gray-500">Including salary, benefits, and overhead costs</p>
                        </div>

                        <div className="space-y-1">
                          <label htmlFor="errorRate" className="text-gray-300 font-medium text-xs block">Current Error Rate (%)</label>
                          <input
                            type="number"
                            id="errorRate"
                            value={formData.errorRate}
                            onChange={(e) => handleInputChange('errorRate', parseInt(e.target.value) || 0)}
                            placeholder="e.g., 5"
                            className="w-full h-7 rounded-md border border-gray-600/50 bg-black backdrop-blur-sm px-2 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all"
                          />
                          <p className="text-xs text-gray-500">Percentage of tasks requiring rework or correction</p>
                        </div>
                      </div>

                      <button 
                        onClick={calculateSavings}
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-xs h-8 px-3 rounded-md transition-all duration-200 shadow-md hover:shadow-lg backdrop-blur-sm"
                      >
                        Calculate ROI Savings
                      </button>
                    </div>

                    {/* Right Side - Results */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xs font-semibold text-white mb-2 border-b border-gray-700/50 pb-1">Projected Results</h3>
                      
                      <div className="space-y-2">
                        <div className="bg-black backdrop-blur-sm rounded-lg p-2.5 border border-gray-700/50">
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="text-gray-300 font-medium text-xs block">Monthly Time Savings</span>
                              <span className="text-xs text-gray-500">Hours automated per month</span>
                            </div>
                            <span className="text-orange-400 font-bold text-sm">{results.timeSavings}h</span>
                          </div>
                        </div>

                        <div className="bg-black backdrop-blur-sm rounded-lg p-2.5 border border-gray-700/50">
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="text-gray-300 font-medium text-xs block">Monthly Cost Reduction</span>
                              <span className="text-xs text-gray-500">Direct labor cost savings</span>
                            </div>
                            <span className="text-orange-400 font-bold text-sm">${results.costReduction.toLocaleString()}</span>
                          </div>
                        </div>

                        <div className="bg-black backdrop-blur-sm rounded-lg p-2.5 border border-gray-700/50">
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="text-gray-300 font-medium text-xs block">Annual ROI</span>
                              <span className="text-xs text-gray-500">Return on investment percentage</span>
                            </div>
                            <span className="text-green-400 font-bold text-sm">{results.annualROI}%</span>
                          </div>
                        </div>

                        <div className="bg-black backdrop-blur-sm rounded-lg p-2.5 border border-gray-700/50">
                          <div className="flex justify-between items-center">
                            <div>
                              <span className="text-gray-300 font-medium text-xs block">Payback Period</span>
                              <span className="text-xs text-gray-500">Time to recover investment</span>
                            </div>
                            <span className="text-blue-400 font-bold text-sm">{results.paybackPeriod} months</span>
                          </div>
                        </div>
                      </div>

                      {/* <div className="mt-4 p-2.5 bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm rounded-lg border border-orange-500/20">
                        <p className="text-xs text-orange-300 font-medium">💡 Pro Tip</p>
                        <p className="text-xs text-gray-300 mt-1">AI automation typically achieves 80-95% efficiency in repetitive tasks with near-zero error rates.</p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}