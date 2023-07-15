export const getEmbeddedYouTubeLink = (url: string) => {
  const urlParts = url.split('/');
  const videoId = urlParts[urlParts.length - 1];
  return `https://www.youtube.com/embed/${videoId}`;
};
