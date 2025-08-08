"use client";
import React from "react";

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-center gap-4 my-4">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div key={index} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold
                ${isCompleted ? "bg-green-500 text-white" : isActive ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"}`}
            >
              {index + 1}
            </div>
            <span className={`${isActive ? "font-bold text-blue-600" : "text-gray-600"}`}>
              {step}
            </span>
            {index < steps.length - 1 && (
              <div className={`w-8 h-1 ${isCompleted ? "bg-green-500" : "bg-gray-300"}`}></div>
            )}
          </div>
        );
      })}
    </div>
  );
};
