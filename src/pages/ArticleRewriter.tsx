import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

export function ArticleRewriter() {
  const [text, setText] = useState('');
  const [tone, setTone] = useState('professional');
  const [rewrittenText, setRewrittenText] = useState('');

  const handleRewrite = () => {
    // In a real application, this would connect to an AI service
    setRewrittenText(`[Rewritten version of "${text}" in ${tone} tone would appear here]`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <RefreshCw className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900">Article Rewriter</h1>
        <p className="mt-4 text-xl text-gray-600">
          Rewrite your content while maintaining its original meaning
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Original Text</label>
            <textarea
              className="w-full h-96 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Paste your text here to rewrite..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Tone</label>
            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            >
              <option value="professional">Professional</option>
              <option value="casual">Casual</option>
              <option value="academic">Academic</option>
              <option value="creative">Creative</option>
            </select>
          </div>
          <button
            onClick={handleRewrite}
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Rewrite Article
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Rewritten Text</label>
          <div className="w-full h-96 p-4 bg-gray-50 border border-gray-300 rounded-lg overflow-auto">
            {rewrittenText || (
              <p className="text-gray-500">
                Your rewritten text will appear here...
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}