import React, { useState } from 'react';
import { InputSection } from './components/InputSection';
import { OutputSection } from './components/OutputSection';
import { SystemInstructionSection } from './components/SystemInstructionSection';
import { callOpenAI } from './utils/openai';
import { env } from './config/env';

function App() {
  const [output, setOutput] = useState('');
  const [systemInstruction, setSystemInstruction] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (input: string) => {
    if (!env.OPENAI_API_KEY) {
      setError('OpenAI API key not found in environment variables');
      return;
    }

    if (!systemInstruction) {
      setError('Please enter a system instruction');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await callOpenAI(systemInstruction, input);
      setOutput(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setOutput('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            AI Assistant
          </h1>
          <p className="text-gray-600">
            Configure your AI assistant and start chatting
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <SystemInstructionSection
            systemInstruction={systemInstruction}
            onSystemInstructionChange={setSystemInstruction}
          />

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
              {error}
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
            <InputSection onSubmit={handleSubmit} isLoading={isLoading} />
            <OutputSection output={output} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;