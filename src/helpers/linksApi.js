const kUrl = "http://35.212.179.72/goluinks";

async function api(path, options = {}) {
  const res = await fetch(`${kUrl}/${path}`, options);
  return res.json();
}

export default api;
