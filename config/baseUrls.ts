export const baseUrls = {
    dev: 'https://live.techpanda.org/index.php/'
  };
  export const getBaseUrl = () => {
    const env = process.env.ENV || 'dev'; // ENV=staging chẳng hạn
    return baseUrls[env as keyof typeof baseUrls];
  };