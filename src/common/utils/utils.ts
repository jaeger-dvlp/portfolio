const getCleanProjectTitle = (title: string): string => {
  return title
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\b\w{1,2}\b/g, (char) => char.toUpperCase());
};

export { getCleanProjectTitle };
