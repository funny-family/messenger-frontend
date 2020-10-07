import config from '@/config';

async function checkAuth() {
  const url = config.api.url.checkAuth;
  const response = await fetch(url, {
    method: 'GET',
    credentials: 'include', // for cookies
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (await response.ok) {
    return true;
  }

  return false;
}

export default checkAuth;
