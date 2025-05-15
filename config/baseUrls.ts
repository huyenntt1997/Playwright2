export const baseUrls = {
    dev: 'https://www.saucedemo.com/'
  };
  export const urlAbout = {
    dev: 'https://saucelabs.com/'
  };
  export const getBaseUrl = () => {
    const env = process.env.ENV || 'dev'; // ENV=staging chẳng hạn
    return baseUrls[env as keyof typeof baseUrls];
  };
  export const getUrlAbout = () => {
    const env = process.env.ENV || 'dev'; 
    return urlAbout[env as keyof typeof urlAbout];
  };