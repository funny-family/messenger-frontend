const domain = 'http://localhost:3000/';

export default {
  api: {
    url: {
      signup: `${domain}auth/signup`,
      signin: `${domain}auth/signin`,
      signout: `${domain}auth/signout`
    }
  }
};
