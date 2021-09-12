import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

import getGoLinks from '../helpers/getGoLinks';

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

  function render() {
    if (error) {
      return <Alert variant="danger">{error}</Alert>
    }

    if (links === null) {
      return <Loading />
    }

    if (links.length === 0) {
      return <Alert variant="secondary">No links found</Alert>
    }

    return <Table>
      <tbody>
        {
          links.map((link, index) =>
            <tr key={index}>
              <td>{link.name}</td>
              <td><a href={link.url}>{link.url}</a></td>
            </tr>
          )
        }
      </tbody>
    </Table>;
  }

  return (
    <div>
      <h3 className="mb-4">Search links</h3>
      {render()}
    </div>
  )
}

export default LinksIndex;