const commonMisspellings: { [key: string]: string } = {
  "recieve": "receive",
  "seperate": "separate",
  "occured": "occurred",
  "truely": "truly",
  // Add more common misspellings
};

export const checkSpelling = (text: string) => {
  const words = text.toLowerCase().split(/\s+/);
  const suggestions: { word: string; suggestion: string }[] = [];

  words.forEach(word => {
    if (commonMisspellings[word]) {
      suggestions.push({
        word,
        suggestion: commonMisspellings[word]
      });
    }
  });

  return suggestions;
};