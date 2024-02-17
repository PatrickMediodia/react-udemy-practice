// named export and not default
import { CORE_CONCEPTS } from './data';

// default exports
import CoreConcept  from './components/CoreConcept/CoreConcept';
import Header from './components/Header/Header';
import TabButton from './components/TabButton/TabButton';

// react hooks
import { useState } from 'react';

function App() {
  const [ displayString, setDisplayString ] = useState('');

  const handleClick = (dynamicContent) => {
    console.log(dynamicContent);
    setDisplayString(dynamicContent);
  };

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            { /* will not be executed immediately since it is inside an arrow function */ }
            { /* therefore we can pass parameters to the function */ }
            <TabButton onClickHandler={() => handleClick('Components') }>Components</TabButton>
            <TabButton onClickHandler={() => handleClick('JSX')}>JSX</TabButton>
            <TabButton onClickHandler={() => handleClick('Props')}>Props</TabButton>
            <TabButton onClickHandler={() => handleClick('State')}>State</TabButton>
          </menu>
          { displayString }
        </section>
      </main>
    </div>
  );
}

export default App;