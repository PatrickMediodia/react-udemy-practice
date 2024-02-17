import Examples from './components/Examples';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;