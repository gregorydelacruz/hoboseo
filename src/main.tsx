import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { Layout } from './components/Layout';
import { TextAnalysis } from './pages/TextAnalysis';
import { AIWriting } from './pages/AIWriting';
import { ImageEditor } from './pages/ImageEditor';
import { PlagiarismChecker } from './pages/PlagiarismChecker';
import { ArticleRewriter } from './pages/ArticleRewriter';
import { GrammarChecker } from './pages/GrammarChecker';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: 'text-analysis', element: <TextAnalysis /> },
      { path: 'ai-writing', element: <AIWriting /> },
      { path: 'image-editor', element: <ImageEditor /> },
      { path: 'plagiarism-checker', element: <PlagiarismChecker /> },
      { path: 'article-rewriter', element: <ArticleRewriter /> },
      { path: 'grammar-checker', element: <GrammarChecker /> },
    ],
  },
]);