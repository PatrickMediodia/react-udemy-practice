// react hooks
import { useState } from 'react';

// named export and not default
import { CORE_CONCEPTS, EXAMPLES } from './data';

// default exports
import CoreConcept  from './components/CoreConcept/CoreConcept';
import Header from './components/Header/Header';
import TabButton from './components/TabButton/TabButton';

function App() {
  // 1. hooks can only be called inside of component funcitons
  // 2. hooks can only be called on the top level
  // allows the management of component specific state
  // always returns an array with exactly two items
  //    [0] --> current state
  //    [1] --> function to update the state
  // note if state changes, it will re rendert the whole component
  const [ displayString, setDisplayString ] = useState();
  const tabs = ['components', 'jsx', 'props', 'state']

  const handleClick = (dynamicContent) => {
    setDisplayString(dynamicContent);

    // react schedules the update of the state afte it has been re-rendered
    // therefore if you log the dynamic content now, it will still show the old state
    console.log(dynamicContent);
  };

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <ul>
            {
              CORE_CONCEPTS.map(({ title, description, image }) => {
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
            {
              /* will not be executed immediately since it is inside an arrow function */
              /* therefore we can pass parameters to the function */
              tabs.map((tab) => {
                return <TabButton 
                  onClickHandler={() => handleClick(tab)} 
                  isSelected={ displayString === tab }
                >
                  {tab}
                </TabButton>
              })
            }
          </menu>
          { !displayString ? 
            <p>Please select a topic.</p> : 
            (
              <div id="tab-content">
                <h3>{ EXAMPLES[displayString].title }</h3>
                <p>{ EXAMPLES[displayString].description }</p>
                <pre>
                  <code>
                    { EXAMPLES[displayString].code }
                  </code>
                </pre>           
              </div>
            ) 
          }
        </section>
      </main>
    </div>
  );
}

export default App;