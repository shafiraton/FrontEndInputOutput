import React from 'react';
import { Loader2 } from 'lucide-react';

interface OutputSectionProps {
  output: string;
  isLoading: boolean;
}

export function OutputSection({ output, isLoading }: OutputSectionProps) {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Output</h2>
      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 min-h-32">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <Loader2 className="animate-spin text-gray-400" size={24} />
          </div>
        ) : output ? (
          <p className="text-gray-700 whitespace-pre-wrap">{output}</p>
        ) : (
          <p className="text-gray-400 italic">Output will appear here...</p>
        )}
      </div>
    </div>
  );
}