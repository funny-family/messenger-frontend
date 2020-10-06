import config from '@/config';

async function checkAuth() {
  const url = config.api.url.checkAuth;
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'include', // for cookies
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log('checkAuth action:', response);
  if (await response.ok) {
    return response.ok;
  }

  return false;
}

async function refreshAuth() {
  const url = config.api.url.refreshAuth;
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'include', // for cookies
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response;
}

async function fetchSecureData(url, options) {
  const isAuthenticated = await checkAuth();

  if (isAuthenticated === false) {
    refreshAuth();
  }

  return fetch(url, options);
}

export default fetchSecureData;
