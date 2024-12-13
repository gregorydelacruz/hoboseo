import React, { useState } from 'react';
import { Check, AlertTriangle } from 'lucide-react';
import { checkGrammar } from '../utils/textAnalysis';
import { checkSpelling } from '../utils/spellCheck';

export function GrammarChecker() {
  const [text, setText] = useState('');
  const [grammarResults, setGrammarResults] = useState<{ suggestion: string; found: number }[]>([]);
  const [spellResults, setSpellResults] = useState<{ word: string; suggestion: string }[]>([]);

  const handleCheck = () => {
    setGrammarResults(checkGrammar(text));
    setSpellResults(checkSpelling(text));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Check className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900">Grammar & Spell Checker</h1>
        <p className="mt-4 text-xl text-gray-600">
          Check your text for grammar and spelling errors
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <textarea
            className="w-full h-96 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Paste your text here to check grammar and spelling..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={handleCheck}
            className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Check Grammar & Spelling
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Grammar Issues</h2>
            {grammarResults.length > 0 ? (
              <div className="space-y-4">
                {grammarResults.map((result, index) => (
                  <div key={index} className="p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
                      <div>
                        <p className="text-sm text-yellow-800">{result.suggestion}</p>
                        <p className="text-sm text-yellow-600">Found {result.found} times</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No grammar issues found.</p>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Spelling Suggestions</h2>
            {spellResults.length > 0 ? (
              <div className="space-y-4">
                {spellResults.map((result, index) => (
                  <div key={index} className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm">
                      <span className="text-blue-800 font-medium">{result.word}</span>
                      <span className="text-blue-600"> → </span>
                      <span className="text-blue-800 font-medium">{result.suggestion}</span>
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No spelling errors found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}