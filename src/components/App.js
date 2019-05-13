import React from 'react';
import Dog from './Dog';
import Header from './Header';

export default function App() {
  console.log('working?');
  return (
    <>
      <Header />
      <Dog name="Rover" age={12} weight="22 lbs" />
    </>
  );
}
