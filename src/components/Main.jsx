// src/pages/Main.jsx
import React from 'react';
import Header from './Header.jsx';
import SectionMain from './SectionMain.jsx';
import SectionCharter from './SectionCharter.jsx';
import ListPoint from './ListPoint.jsx';
import RevenuePoints from './RevenuePoints.jsx';
import SectionBenefit from './SectionBenefit.jsx';

const Main = () => {
  return (
    <>
      <Header />
      <SectionMain />
      <SectionCharter />
      <ListPoint />
      <RevenuePoints />
      <SectionBenefit />
    </>
  );
};

export default Main;
