import React, { useState } from 'react';
import { Image, Upload, Download, Sliders } from 'lucide-react';

export function ImageEditor() {
  const [imageUrl, setImageUrl] = useState('');
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Image className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900">Image Editor</h1>
        <p className="mt-4 text-xl text-gray-600">
          Edit, resize, and optimize images for your website
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Preview"
                className="max-w-full h-auto rounded-lg"
              />
            ) : (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Drop your image here or click to upload</p>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
            >
              Upload Image
            </label>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Image Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Brightness</label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  defaultValue="100"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contrast</label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  defaultValue="100"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Saturation</label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  defaultValue="100"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Export Options</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Format</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                  <option value="jpeg">JPEG</option>
                  <option value="png">PNG</option>
                  <option value="webp">WebP</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Quality</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="80"
                  className="w-full"
                />
              </div>
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Export Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}