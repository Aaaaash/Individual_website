/*
 * app constants
 */

let apiHost = global.window.location.origin;
apiHost = apiHost.indexOf('localhost') !== -1 ? 'http://betag.clip.easub.com' : global.window.location.origin;
export const API_BASE = `${apiHost}/api/v1`;
