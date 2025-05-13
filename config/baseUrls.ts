export const baseUrls = {
    dev: 'https://www.saucedemo.com/'
  };
  export const getBaseUrl = () => {
    const env = process.env.ENV || 'dev'; // ENV=staging chẳng hạn
    return baseUrls[env as keyof typeof baseUrls];
  };