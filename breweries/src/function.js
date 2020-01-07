import React from 'react';


function Function () {
  return <Headline />;
}
function Headline() {
  const greeting = 'Hello Function Component!';
  return <h1>{greeting}</h1>;
}
export default Function;