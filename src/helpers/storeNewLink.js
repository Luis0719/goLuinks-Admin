import linksApi from "./linksApi";

async function storeNewLink(data) {
  const path = "create";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return linksApi(path, options);
}

export default storeNewLink;
