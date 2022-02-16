/**
 * Gets domain of the url
 * @param url Incoming url address
 */
export const getDomain = (url: string) => new URL(url).host;
