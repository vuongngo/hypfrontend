export default {
  server: {
    host: 'http://localhost',
    port: 3005
  },

  webpack: {
    server: {
      host: 'http://localhost',
      port: 3001
    }
  },
  isBrowser: typeof window !== 'undefined',
  isServer: typeof window === 'undefined',
  basename: 'localhost:3005',
};
