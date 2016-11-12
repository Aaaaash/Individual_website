/*
 * app constants
 */

let apiHost = global.window.location.origin;
apiHost = apiHost.indexOf('localhost') !== -1 ? 'https://api.douban.com' : global.window.location.origin;
export const API_BASE = `${apiHost}/v2`;
