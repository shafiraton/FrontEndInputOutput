import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

interface InputSectionProps {
  onSubmit: (input: string) => void;
  isLoading: boolean;
}

export function InputSection({ onSubmit, isLoading }: InputSectionProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSubmit(input);
      setInput('');
    }
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Input</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-32"
          placeholder="Enter your text here..."
          disabled={isLoading}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading || !input.trim()}
        >
          {isLoading ? (
            <Loader2 size={20} className="animate-spin" />
          ) : (
            <Send size={20} />
          )}
          {isLoading ? 'Processing...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}