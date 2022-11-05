import { useState } from 'react';
import Nav from './Components/Nav';
import Main from './Components/Main';

function App() {

  const [result, setResult] = useState([1]);

  return (
    <div className='grid grid-cols-12 grid-flow-col'>
      <Nav result={result} setResult={setResult} />
      <Main result={result} setResult={setResult} />
    </div>
  );
}

export default App;
