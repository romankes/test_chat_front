export const baseEnv = () => ({
  BASE_URL: 'http://192.168.1.4:3002',
});

export type Environment = ReturnType<typeof baseEnv>;
