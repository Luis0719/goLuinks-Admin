import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";

import getGoLinks from "../helpers/getGoLinks";
import deleteLink from "../helpers/deleteLink";

const LinksIndex = () => {
  const [links, setLinks] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLinks() {
      const getGoLinksResult = await getGoLinks();

      if (getGoLinksResult.OK) {
        setLinks(getGoLinksResult.data.items);
        setError(null);
        return;
      }

      setError(getGoLinksResult.error);
    }

    fetchLinks();
  }, []);

  function handleDeleteClick(e) {
    deleteLink(e.currentTarget.id).then(
      setLinks(links.filter((x) => x._id !== e.currentTarget.id))
    );
  }

  function render() {
    if (error) {
      return <Alert variant="danger">{error}</Alert>;
    }

    if (links === null) {
      return <Loading />;
    }

    if (links.length === 0) {
      return <Alert variant="secondary">No links found</Alert>;
    }

    return (
      <Table>
        <tbody>
          {links.map((link, index) => (
            <tr key={index}>
              <td>{link.name}</td>
              <td>
                {link.routine ? (
                  `Routine: ${link.routine}`
                ) : (
                  <a href={link.url}>{link.url}</a>
                )}
              </td>
              <td>
                <button id={link._id} onClick={handleDeleteClick}>
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  return (
    <div>
      <h3 className="mb-4">Search links</h3>
      {render()}
    </div>
  );
};

export default LinksIndex;
