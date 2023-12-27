import { useState } from 'react'

import Header from './component/header';

function App() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
      setLikes(likes + 1);
  }
  return (
      <>
       <Header author="Abraar as Abear"/>
       <button onClick={handleClick}>Like ({likes})</button>
      </>
  );
}

export default App
