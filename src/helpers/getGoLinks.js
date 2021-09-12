const getGoLinks = async (owner) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: 'fb',
          url: 'http://facebook.com',
        },
        {
          name: 'tw',
          url: 'http://twitter.com',
        }
      ]);
    }, 1000);
  })
}

export default getGoLinks;