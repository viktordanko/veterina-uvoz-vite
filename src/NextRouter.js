export function useRouter() {
  return {
    pathname: window.location.pathname,
    asPath: window.location.pathname + window.location.search + window.location.hash,
    query: {},
    locales: ['cs'],
    locale: 'cs',
  };
}
