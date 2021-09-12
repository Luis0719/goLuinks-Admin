import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Table from 'react-bootstrap/Table';

import getGoLinks from '../helpers/getGoLinks';

const LinksIndex = () => {
  const [links, setLinks] = useState(null);

  useEffect(() => {
    async function fetchLinks() {
      const getGoLinksResult = await getGoLinks();
      setLinks(getGoLinksResult);
    }

    fetchLinks();
  }, []);

  function render() {
    if (links === null) {
      return <Loading />
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