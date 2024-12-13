export const findSimilarPhrases = (text: string, minPhraseLength: number = 4) => {
  const words = text.toLowerCase().split(/\s+/);
  const phrases: { [key: string]: number } = {};
  
  for (let i = 0; i <= words.length - minPhraseLength; i++) {
    const phrase = words.slice(i, i + minPhraseLength).join(' ');
    phrases[phrase] = (phrases[phrase] || 0) + 1;
  }
  
  return Object.entries(phrases)
    .filter(([_, count]) => count > 1)
    .sort(([_, a], [__, b]) => b - a);
};