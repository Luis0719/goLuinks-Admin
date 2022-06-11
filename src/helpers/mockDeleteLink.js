async function mockDeleteLink(_id) {
  console.log("Using mock delete");
  const path = "delete/" + _id;
  const options = {
    method: "DELETE",
  };
  console.log(path, options);

  return true;
}

export default mockDeleteLink;
