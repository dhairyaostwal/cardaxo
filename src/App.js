import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HC9 from './components/HC9/HC9';
import HC5 from './components/HC5/HC5';
import HC6 from './components/HC6/HC6';
import HC3 from './components/HC3/HC3';
import HC1 from './components/HC1/HC1';
import PullToRefresh from 'react-simple-pull-to-refresh';

// function which on pull will manipulates DOM for reloading page
function handleRefresh() {
  document.location.reload();
}

export function App() {
  return (
    <>
      <PullToRefresh onRefresh={handleRefresh}>
        <Navbar />
        <HC3 />
        <HC6 />
        <HC5 />
        <HC9 />
        <HC1 />
      </PullToRefresh>
    </>
  );
}
