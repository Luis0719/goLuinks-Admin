const getGoLinks = async (owner) => {
  try {
    const url = `${process.env.REACT_APP_API_URL}/links`;
    const res = await fetch(url);
    const data = await res.json();

    return {
      OK: true,
      data,
    };
  }catch(err) {
    return {
      OK: false,
      error: "Error getting links. Try again later.",
    }
  }
}

export default getGoLinks;