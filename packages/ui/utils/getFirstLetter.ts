export const getFirstLetter = (name: string): string => {
  // When user image is set to NULL we use first letter as placeholder for image (Like in Google)
  let index = 0;
  while (index < name.length) {
    const letter = name.charAt(index);
    if (letter.match(/[a-zA-Z0-9]/)) {
      return letter.toUpperCase();
    }
    index++;
  }
  return 'G';
};
