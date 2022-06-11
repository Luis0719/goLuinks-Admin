import linksApi from "./linksApi";
import mockDeleteLink from "./mockDeleteLink";

async function deleteLink(id) {
  if (process.env.NODE_ENV === "development") {
    return mockDeleteLink(id);
  }

  const path = "delete/" + id;
  const options = {
    method: "DELETE",
  };

  return linksApi(path, options);
}

export default deleteLink;
