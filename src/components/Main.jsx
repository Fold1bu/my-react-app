// src/pages/Main.jsx
import React from 'react';
import Header from './Header.jsx';
import SectionMain from './SectionMain.jsx';
import SectionCharter from './SectionCharter.jsx';
import ListPoint from './ListPoint.jsx';

const Main = () => {
  return (
    <>
      <Header />
      <SectionMain />
      <SectionCharter />
      <ListPoint />
    </>
  );
};

export default Main;
