import React, { useState } from 'react';
import { TextSelect, Type, Hash, BookOpen } from 'lucide-react';

export function TextAnalysis() {
  const [text, setText] = useState('');
  
  const stats = {
    characters: text.length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    sentences: text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0,
    paragraphs: text.trim() ? text.split(/\n\s*\n/).filter(Boolean).length : 0,
    readingTime: Math.ceil(text.trim().split(/\s+/).length / 200), // Assuming 200 words per minute
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <TextSelect className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900">Text Analysis Tool</h1>
        <p className="mt-4 text-xl text-gray-600">
          Analyze your text for readability, word count, and more
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <textarea
            className="w-full h-96 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Paste or type your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Text Statistics</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Type className="w-5 h-5 text-indigo-600 mr-2" />
                  <span className="text-gray-600">Characters</span>
                </div>
                <span className="font-semibold">{stats.characters}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Hash className="w-5 h-5 text-indigo-600 mr-2" />
                  <span className="text-gray-600">Words</span>
                </div>
                <span className="font-semibold">{stats.words}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 text-indigo-600 mr-2" />
                  <span className="text-gray-600">Reading Time</span>
                </div>
                <span className="font-semibold">{stats.readingTime} min</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Structure</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Sentences</span>
                <span className="font-semibold">{stats.sentences}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Paragraphs</span>
                <span className="font-semibold">{stats.paragraphs}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}