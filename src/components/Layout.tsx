import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Home } from 'lucide-react';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center text-gray-900">
                <Home className="w-6 h-6 mr-2" />
                <span className="font-semibold">Web Tools Platform</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main>
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Web Tools Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}