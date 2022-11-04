import Nav from './Components/Nav';
import Main from './Components/Main';

function App() {
  return (
    <div className='grid grid-cols-12 grid-flow-col gap-4'>
      <Nav />
      <Main />
    </div>
  );
}

export default App;
