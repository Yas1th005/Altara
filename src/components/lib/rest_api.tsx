"use client";

import React from "react";
import { motion } from "framer-motion";
import { Folder, HeartHandshakeIcon, SparklesIcon, ShoppingCart, Home, Briefcase, Hospital, PiggyBank } from "lucide-react";
import { cn } from "@/lib/utils";

interface DatabaseWithRestApiProps {
  className?: string;
  circleText?: string;
  badgeTexts?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  buttonTexts?: {
    first: string;
    second: string;
  };
  title?: string;
  lightColor?: string;
}

const DatabaseWithRestApi = ({
  className,
  circleText,
  badgeTexts,
  buttonTexts,
  title,
  lightColor,
}: DatabaseWithRestApiProps) => {
  return (
    <div
      className={cn(
        "relative flex h-[350px] w-full flex-col items-center",
        className
      )}
    >
      {/* SVG Paths  */}
      <svg
        className="h-full sm:w-full text-muted"
        width="100%"
        height="100%"
        viewBox="0 0 200 100"
      >
        <g
          stroke="#774c2e"
          fill="none"
          strokeWidth="0.2"
          strokeDasharray="100 100"
          pathLength="100"
          opacity="0.7"
        >
          <path d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" />
          <path d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" />
          <path d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" />
          <path d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" />
          {/* Animation For Path Starting */}
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        </g>
        {/* Brown Lights */}
        <g mask="url(#db-mask-1)">
          <circle
            className="database db-light-1"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-brown-grad)"
          />
        </g>
        <g mask="url(#db-mask-2)">
          <circle
            className="database db-light-2"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-brown-grad)"
          />
        </g>
        <g mask="url(#db-mask-3)">
          <circle
            className="database db-light-3"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-brown-grad)"
          />
        </g>
        <g mask="url(#db-mask-4)">
          <circle
            className="database db-light-4"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-brown-grad)"
          />
        </g>
        {/* Buttons */}
        <g stroke="currentColor" fill="none" strokeWidth="0.4">
          {/* First Button - E-commerce */}
          <g>
            <rect
              fill="#0f0f0f"
              x="14"
              y="0"
              width="24"
              height="24"
              rx="5"
              stroke="#774c2e"
              strokeWidth="0.5"
            ></rect>
            <svg
              x="21"
              y="4"
              width="8"
              height="8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <text
              x="26"
              y="18"
              fill="url(#orange-gradient)"
              stroke="none"
              fontSize="3"
              fontWeight="500"
              textAnchor="middle"
            >
              {badgeTexts?.first || "E-commerce"}
            </text>
          </g>
          {/* Second Button - Real Estate */}
          <g>
            <rect
              fill="#0f0f0f"
              x="60"
              y="0"
              width="24"
              height="24"
              rx="5"
              stroke="#774c2e"
              strokeWidth="0.5"
            ></rect>
            <svg
              x="68"
              y="4"
              width="8"
              height="8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
            <text
              x="72"
              y="18"
              fill="url(#orange-gradient)"
              stroke="none"
              fontSize="3"
              fontWeight="500"
              textAnchor="middle"
            >
              {badgeTexts?.second || "Real Estate"}
            </text>
          </g>
          {/* Third Button - Legal */}
          <g>
            <rect
              fill="#0f0f0f"
              x="115"
              y="0"
              width="24"
              height="24"
              rx="5"
              stroke="#774c2e"
              strokeWidth="0.5"
            ></rect>
            <svg
              x="123"
              y="4"
              width="8"
              height="8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            <text
              x="127"
              y="18"
              fill="url(#orange-gradient)"
              stroke="none"
              fontSize="3"
              fontWeight="500"
              textAnchor="middle"
            >
              {badgeTexts?.third || "Legal"}
            </text>
          </g>
          {/* Fourth Button - Finance */}
          <g>
            <rect
              fill="#0f0f0f"
              x="163"
              y="0"
              width="24"
              height="24"
              rx="5"
              stroke="#774c2e"
              strokeWidth="0.5"
            ></rect>
            <svg
              x="170"
              y="4"
              width="9"
              height="9"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.5-1 2-2h2v-3H22c-1 0-2-.5-2-1s0-1 1-1h1V9h-1c-1 0-2.5-.3-2.5-2.5 0-.8.5-1.5 1.5-1.5H22V5h-3z" />
            </svg>
            <text
              x="175"
              y="18"
              fill="url(#orange-gradient)"
              stroke="none"
              fontSize="3"
              fontWeight="500"
              textAnchor="middle"
            >
              {badgeTexts?.fourth || "Finance"}
            </text>
          </g>
        </g>
        <defs>
          {/* 1 -  user list */}
          <mask id="db-mask-1">
            <path
              d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 2 - task list */}
          <mask id="db-mask-2">
            <path
              d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 3 - backlogs */}
          <mask id="db-mask-3">
            <path
              d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 4 - misc */}
          <mask id="db-mask-4">
            <path
              d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* Brown Grad */}
          <radialGradient id="db-brown-grad" fx="1">
            <stop offset="0%" stopColor={lightColor || "#774c2e"} />
            <stop offset="50%" stopColor="#8a5a3a" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id="brown-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#774c2e" />
            <stop offset="50%" stopColor="#8a5a3a" />
            <stop offset="100%" stopColor="#6b4430" />
          </linearGradient>
          <linearGradient id="orange-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="50%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
      </svg>
      {/* Main Box */}
      <div className="absolute bottom-10 flex w-full flex-col items-center">
        {/* bottom shadow */}
        <div className="absolute -bottom-4 h-[100px] w-[62%] rounded-lg bg-gradient-to-t from-[#774c2e]/40 to-transparent" />
        {/* box title */}
        <div className="absolute -top-3 z-20 flex items-center justify-center rounded-lg border border-[#774c2e] bg-gradient-to-r from-[#101112] to-[#774c2e]/10 px-2 py-1 sm:-top-4 sm:py-1.5">
          <SparklesIcon className="size-3 text-[#774c2e]" />
          <span className="ml-2 text-[10px] text-[#774c2e]">
            {title ? title : "Data exchange using a customized REST API"}
          </span>
        </div>
        {/* box outter circle */}
        <div className="absolute -bottom-8 z-30 grid h-[60px] w-[60px] place-items-center rounded-full border-t border-[#774c2e] bg-gradient-to-t from-[#774c2e]/20 to-[#141516] font-semibold text-xs">
          {circleText ? circleText : "SVG"}
        </div>
        {/* box content */}
        <div className="relative z-10 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-[#0f0f0f] shadow-md">
          {/* Badges */}
          <div className="absolute bottom-8 left-12 z-10 h-7 rounded-full bg-gradient-to-r from-[#101112] to-[#774c2e]/20 px-3 text-xs border border-[#774c2e] flex items-center gap-2 ">
            <HeartHandshakeIcon className="size-4 text-[#774c2e]" />
            <span className="text-[#774c2e]">{buttonTexts?.first || "LegionDev"}</span>
          </div>
          <div className="absolute right-16 z-10 hidden h-7 rounded-full bg-gradient-to-r from-[#101112] to-[#774c2e]/20 px-3 text-xs sm:flex border border-[#774c2e] items-center gap-2">
            <Folder className="size-4 text-[#774c2e]" />
            <span className="text-[#774c2e]">{buttonTexts?.second || "v2_updates"}</span>
          </div>
          {/* Circles */}
          <motion.div
            className="absolute -bottom-14 h-[100px] w-[100px] rounded-full border-t border-[#774c2e] bg-gradient-to-t from-[#774c2e]/10 to-transparent"
            animate={{
              scale: [0.98, 1.02, 0.98, 1, 1, 1, 1, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-20 h-[145px] w-[145px] rounded-full border-t border-[#774c2e] bg-gradient-to-t from-[#774c2e]/8 to-transparent"
            animate={{
              scale: [1, 1, 1, 0.98, 1.02, 0.98, 1, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-[100px] h-[190px] w-[190px] rounded-full border-t border-[#774c2e] bg-gradient-to-t from-[#774c2e]/6 to-transparent"
            animate={{
              scale: [1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-[120px] h-[235px] w-[235px] rounded-full border-t border-[#774c2e] bg-gradient-to-t from-[#774c2e]/4 to-transparent"
            animate={{
              scale: [1, 1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
};

export default DatabaseWithRestApi;

const DatabaseIcon = ({ x = "0", y = "0" }: { x: string; y: string }) => {
  return (
    <svg
      x={x}
      y={y}
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
};
