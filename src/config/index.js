const domain = 'http://localhost:3000';
const apiVerion1 = '/api/v1';

export default {
  api: {
    url: {
      signup: `${domain + apiVerion1}/auth/signup`,
      signin: `${domain + apiVerion1}/auth/signin`,
      signout: `${domain + apiVerion1}/auth/signout`
    }
  }
};
