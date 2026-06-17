export const getBasename = (url: string) => {
  const parts = url.split("/");
  const file = parts.at(-1);

  const cleanName = file?.replace(/\.[^/.]+?\.([^.]+$)/, (match) => {
    const partsFile = file.split(".");
    if (partsFile.length > 2) return "." + partsFile.at(-1);
    return match;
  });

  return cleanName;
};
