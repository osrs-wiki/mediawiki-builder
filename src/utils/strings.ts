/**
 * Capitalize a word.
 * @param word The word to capitalize
 * @returns
 */
export const capitalize = (word: string) => {
  const firstLetter = word.charAt(0).toUpperCase();
  const remainingLetters = word.slice(1);
  return firstLetter + remainingLetters;
};
