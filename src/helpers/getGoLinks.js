import linksApi from "./linksApi";

const getGoLinks = async (owner) => {
  try {
    const path = `list`;
    const data = await linksApi(path);

    return {
      OK: true,
      data,
    };
  } catch (err) {
    return {
      OK: false,
      error: "Error getting links. Try again later.",
    };
  }
};

export default getGoLinks;
