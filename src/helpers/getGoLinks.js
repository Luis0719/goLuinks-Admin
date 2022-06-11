import mockGetGoLinks from "./mockGetGoLinks";
import linksApi from "./linksApi";

const getGoLinks = async (owner) => {
  let data;
  if (process.env.NODE_ENV === "development") {
    data = mockGetGoLinks();
  } else {
    try {
      const path = `list`;
      data = await linksApi(path);
    } catch (err) {
      return {
        OK: false,
        error: "Error getting links. Try again later.",
      };
    }
  }

  return {
    OK: true,
    data,
  };
};

export default getGoLinks;
