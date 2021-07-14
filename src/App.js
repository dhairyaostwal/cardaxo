import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HC9 from './components/HC9/HC9';
import HC5 from './components/HC5/HC5';
import HC6 from './components/HC6/HC6';
import HC3 from './components/HC3/HC3';
import HC1 from './components/HC1/HC1';

export function App() {
  return (
    <>
      <Navbar />
      <HC3 />
      <HC6 />
      <HC5 />
      <HC9 />
      <HC1 />
    </>
  );
}
