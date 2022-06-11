function mockGetGoLinks(path, options = {}) {
  console.log("Using mock list");
  return {
    items: [
      {
        _id: "ID_LINK1",
        name: "Link1",
        url: "https://link1.com",
      },
      {
        _id: "ID_LINK2",
        name: "Link2",
        url: "https://link2.com",
      },
      { _id: "ID_LINK3", name: "routine1", routine: "myroutine" },
    ],
  };
}

export default mockGetGoLinks;
