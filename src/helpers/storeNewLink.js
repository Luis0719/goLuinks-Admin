async function storeNewLink(data) {
  const url = `${process.env.REACT_APP_API_URL}/api/links/create`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

export default storeNewLink;