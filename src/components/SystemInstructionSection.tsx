import React from 'react';
import { Settings } from 'lucide-react';

interface SystemInstructionSectionProps {
  systemInstruction: string;
  onSystemInstructionChange: (instruction: string) => void;
}

export function SystemInstructionSection({
  systemInstruction,
  onSystemInstructionChange,
}: SystemInstructionSectionProps) {
  return (
    <div className="w-full max-w-md mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Settings className="text-gray-600" size={24} />
        <h2 className="text-xl font-semibold text-gray-800">System Configuration</h2>
      </div>
      <div>
        <label htmlFor="systemInstruction" className="block text-sm font-medium text-gray-700 mb-1">
          System Instruction
        </label>
        <textarea
          id="systemInstruction"
          value={systemInstruction}
          onChange={(e) => onSystemInstructionChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-24"
          placeholder="Enter system instruction for the AI..."
        />
      </div>
    </div>
  );
}