import React, { useState } from 'react';
import { Search, AlertCircle } from 'lucide-react';
import { findSimilarPhrases } from '../utils/plagiarismCheck';

export function PlagiarismChecker() {
  const [text, setText] = useState('');
  const [results, setResults] = useState<[string, number][]>([]);

  const handleCheck = () => {
    const similarPhrases = findSimilarPhrases(text);
    setResults(similarPhrases);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Search className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900">Plagiarism Checker</h1>
        <p className="mt-4 text-xl text-gray-600">
          Check your content for potential plagiarism and duplicate phrases
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <textarea
            className="w-full h-96 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Paste your text here to check for plagiarism..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={handleCheck}
            className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Check for Plagiarism
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Similar Phrases Found</h2>
            {results.length > 0 ? (
              <div className="space-y-4">
                {results.map(([phrase, count], index) => (
                  <div key={index} className="p-3 bg-red-50 rounded-lg">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-red-800">{phrase}</p>
                        <p className="text-sm text-red-600">Found {count} times</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No duplicate phrases found yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}