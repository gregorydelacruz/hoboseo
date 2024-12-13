import React, { useState } from 'react';
import { Wand2, Sparkles, MessageSquare } from 'lucide-react';

export function AIWriting() {
  const [prompt, setPrompt] = useState('');
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('professional');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Wand2 className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900">AI Writing Assistant</h1>
        <p className="mt-4 text-xl text-gray-600">
          Generate high-quality content with AI-powered writing tools
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Writing Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Topic</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter your topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Tone</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                >
                  <option value="professional">Professional</option>
                  <option value="casual">Casual</option>
                  <option value="friendly">Friendly</option>
                  <option value="formal">Formal</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Writing Templates</h2>
            <div className="space-y-2">
              <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 flex items-center">
                <Sparkles className="w-5 h-5 text-indigo-600 mr-2" />
                Blog Post Outline
              </button>
              <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 flex items-center">
                <MessageSquare className="w-5 h-5 text-indigo-600 mr-2" />
                Social Media Post
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-900">Content Generator</h2>
            </div>
            <div className="p-6">
              <textarea
                className="w-full h-64 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mb-4"
                placeholder="Enter your writing prompt..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Generate Content
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}