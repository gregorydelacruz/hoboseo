// Text analysis utilities
export const analyzeText = (text: string) => {
  const words = text.trim().split(/\s+/);
  const sentences = text.split(/[.!?]+/).filter(Boolean);
  const paragraphs = text.split(/\n\s*\n/).filter(Boolean);

  return {
    characters: text.length,
    words: words.length,
    sentences: sentences.length,
    paragraphs: paragraphs.length,
    readingTime: Math.ceil(words.length / 200),
  };
};

export const checkGrammar = (text: string) => {
  // Basic grammar checks (can be expanded)
  const commonErrors = [
    { pattern: /\s+,/g, suggestion: "Remove space before comma" },
    { pattern: /\s+\./g, suggestion: "Remove space before period" },
    { pattern: /\bi\b/g, suggestion: "Capitalize 'I'" },
    { pattern: /\s{2,}/g, suggestion: "Remove extra spaces" },
  ];

  return commonErrors
    .map(({ pattern, suggestion }) => ({
      found: (text.match(pattern) || []).length,
      suggestion,
    }))
    .filter(({ found }) => found > 0);
};