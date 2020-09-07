const domain = 'http://localhost:3000';
const v1 = '/api/v1';

export default {
  api: {
    url: {
      signup: `${domain + v1}/auth/signup`,
      signin: `${domain + v1}/auth/signin`,
      signout: `${domain + v1}/auth/signout`
    }
  }
};
