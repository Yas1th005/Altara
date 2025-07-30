"use client";
import React, { useState } from "react";
import { ContainerScroll } from "./lib/calculator";
import Hero from "./Hero";
import { Input } from "./lib/input";
import { Label } from "./lib/label";
import { Button } from "./lib/button";

export function HeroScrollDemo() {
  const [formData, setFormData] = useState({
    monthlyHours: 500,
    hourlyCost: 50,
    errorRate: 5
  });

  const [results, setResults] = useState({
    timeSavings: 435,
    costReduction: 21750,
    annualROI: 420,
    paybackPeriod: 3.2
  });

  const calculateSavings = () => {
    const { monthlyHours, hourlyCost, errorRate } = formData;
    
    // Calculate time savings (assuming 87% efficiency improvement)
    const timeSavings = Math.round(monthlyHours * 0.87);
    
    // Calculate cost reduction
    const costReduction = timeSavings * hourlyCost;
    
    // Calculate annual ROI (simplified calculation)
    const annualROI = Math.round((costReduction * 12) / (costReduction * 0.3) * 100);
    
    // Calculate payback period (simplified)
    const paybackPeriod = Math.round((costReduction * 0.3) / costReduction * 12 * 10) / 10;
    
    setResults({
      timeSavings,
      costReduction,
      annualROI,
      paybackPeriod
    });
  };

  const handleInputChange = (field: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="flex flex-col w-[100vw] overflow-hidden">
      <ContainerScroll
        titleComponent={
          <Hero/>
        }
      >
        <div className="h-full w-full bg-black border border-white/20 rounded-2xl p-10 flex flex-col">
          {/* Main Title */}
          {/* <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-white">Calculate Your </span>
              <span className="text-orange-500">ROI Potential</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg">
              Discover the financial impact of AI automation on your business
            </p>
          </div> */}
            <div className="text-center mb-2">
                <button 
                // variant="outline" 
                className="mb-4 border border-gray-100/10 rounded-[10px] py-1 px-2 bg-gradient-to-r from-orange-300 from-20% to-white bg-clip-text text-transparent hover:bg-white/10 text-sm"
                >
                ROI Potential
                </button>
                <h2 className="text-4xl md:text-5xl font-medium mb-6 text-white tracking-tight">Calculate Your ROI Potential</h2>
                <p className="text-xl md:text-sm text-white/60 mb-12 max-w-2xl mx-auto font-light ">
                Discover the financial impact of AI automation on your business
                </p>
            </div>

          {/* Calculator Form */}
          <div className="flex-1 flex flex-col lg:flex-row gap-8">
            {/* Left Side - Input Fields */}
            <div className="flex-1 space-y-6">
              <h2 className="text-lg font-medium text-white mb-6">Your Current Metrics</h2>
              
              <div className="space-y-6">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="monthlyHours" className="text-white/80 font-medium text-xs">Monthly Manual Labor Hours</Label>
                  <Input
                    type="number"
                    id="monthlyHours"
                    value={formData.monthlyHours}
                    onChange={(e) => handleInputChange('monthlyHours', parseInt(e.target.value) || 0)}
                    placeholder="500"
                  />
                </div>

                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="hourlyCost" className="text-white/80 font-medium text-xs">Average Hourly Cost ($)</Label>
                  <Input
                    type="number"
                    id="hourlyCost"
                    value={formData.hourlyCost}
                    onChange={(e) => handleInputChange('hourlyCost', parseInt(e.target.value) || 0)}
                    placeholder="50"
                  />
                </div>

                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="errorRate" className="text-white/80 font-medium text-xs">Current Error Rate (%)</Label>
                  <Input
                    type="number"
                    id="errorRate"
                    value={formData.errorRate}
                    onChange={(e) => handleInputChange('errorRate', parseInt(e.target.value) || 0)}
                    placeholder="5"
                  />
                </div>
              </div>

              <Button 
                onClick={calculateSavings}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm"
              >
                Calculate Savings
              </Button>
            </div>

            {/* Right Side - Results */}
            <div className="flex-1 space-y-6">
              <h2 className="text-lg font-medium text-white mb-6">Projected Results</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/80 font-medium text-xs">Monthly Time Savings</span>
                  <span className="text-orange-500 font-medium text-xs">{results.timeSavings} hours</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/80 font-medium text-xs">Monthly Cost Reduction</span>
                  <span className="text-orange-500 font-medium text-xs">${results.costReduction.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/80 font-medium text-xs">Annual ROI</span>
                  <span className="text-orange-500 font-medium text-xs">{results.annualROI}%</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/80 font-medium text-xs">Payback Period</span>
                  <span className="text-orange-500 font-medium text-xs">{results.paybackPeriod} months</span>
                </div>
              </div>

              {/* <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20">
                Get Detailed Analysis
              </Button> */}
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}