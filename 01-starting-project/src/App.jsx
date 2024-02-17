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

  const tabContent = ({ title, description, code}) => { 
    return (
      <div id="tab-content">
        <h3>{ title }</h3>
        <p>{ description }</p>
        <pre>
          <code>
            { code }
          </code>
        </pre>           
      </div>
    )};

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <ul>
            {
              /* another option */
              /* CORE_CONCEPTS.map(concptItem => <CoreConcep {...conceptItem} />) */

              CORE_CONCEPTS.map(({ title, description, image }) => {
                return <CoreConcept 
                  title={title} 
                  description={description}
                  image={image}
                  key={title}
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
          { !displayString ? <p>Please select a topic.</p> : tabContent(EXAMPLES[displayString]) }
        </section>
      </main>
    </div>
  );
}

export default App;