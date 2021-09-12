import React from 'react';
import LinksIndex from '../components/LinksIndex';
import CreateLinkFormComponent from '../components/CreateLinkFormComponent';

const Main = () => {
  return (
    <div>
      <CreateLinkFormComponent />
      <LinksIndex />
    </div>
  )
}

export default Main;