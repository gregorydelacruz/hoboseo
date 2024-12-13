import React from 'react';
import { Link } from 'react-router-dom';
import {
  TextSelect,
  Wand2,
  Image,
  Search,
  RefreshCw,
  Check,
} from 'lucide-react';
import { ToolCard } from './components/ToolCard';
import { CategorySection } from './components/CategorySection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              All-in-One Web Tools Platform
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
              Enhance your web presence with our comprehensive suite of tools for SEO, content creation, 
              development, and more. Everything you need in one place.
            </p>
          </div>
        </div>
      </div>

      {/* Content Creation Tools */}
      <CategorySection
        title="Content Creation"
        description="Create and optimize your content with our powerful suite of tools"
      >
        <Link to="/text-analysis">
          <ToolCard
            title="Text Analysis"
            description="Analyze readability, keyword density, and get content optimization suggestions"
            icon={<TextSelect className="w-6 h-6" />}
          />
        </Link>
        <Link to="/ai-writing">
          <ToolCard
            title="AI Writing Assistant"
            description="Generate high-quality content with AI-powered writing tools"
            icon={<Wand2 className="w-6 h-6" />}
          />
        </Link>
        <Link to="/image-editor">
          <ToolCard
            title="Image Editor"
            description="Edit, resize, and optimize images for your website"
            icon={<Image className="w-6 h-6" />}
          />
        </Link>
        <Link to="/plagiarism-checker">
          <ToolCard
            title="Plagiarism Checker"
            description="Check your content for potential plagiarism and duplicate content"
            icon={<Search className="w-6 h-6" />}
          />
        </Link>
        <Link to="/article-rewriter">
          <ToolCard
            title="Article Rewriter"
            description="Rewrite your content while maintaining its original meaning"
            icon={<RefreshCw className="w-6 h-6" />}
          />
        </Link>
        <Link to="/grammar-checker">
          <ToolCard
            title="Grammar & Spell Checker"
            description="Check your text for grammar and spelling errors"
            icon={<Check className="w-6 h-6" />}
          />
        </Link>
      </CategorySection>
    </div>
  );
}

export default App;