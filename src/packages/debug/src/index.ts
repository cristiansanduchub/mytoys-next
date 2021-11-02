import cookies from 'js-cookie';

const debugCookieValue = cookies.get('debug');

export const isDebug = () => !!debugCookieValue;
