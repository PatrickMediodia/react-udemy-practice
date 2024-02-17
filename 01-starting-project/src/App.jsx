// default exports
import CoreConcept  from './components/CoreConcept';
import Header from './components/Header';

// named export and not default
import { CORE_CONCEPTS } from './data'; 

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <ul>
            {
              CORE_CONCEPTS.map(({title, description, image}) => {
                return <CoreConcept 
                title={title} 
                description={description}
                image={image}
                />
              })
            }
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;