export const getStaticImage = (urlString) => {
  return new URL(`../${urlString}`, import.meta.url).href;
};
export const capitalize = (phrase) => {
  return phrase.charAt(0).toUpperCase() + phrase.slice(1);
}
export const upperEach = (phrase, skipWords = []) => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map(word => skipWords.includes(word) ? word : word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};