// react hooks
import { useState } from 'react';
import { EXAMPLES } from '../data';
import Section from './Section';
import TabButton from './TabButton/TabButton';

export default function Examples() {
    // 1. hooks can only be called inside of component funcitons
    // 2. hooks can only be called on the top level
    // allows the management of component specific state
    // always returns an array with exactly two items
    //    [0] --> current state
    //    [1] --> function to update the state
    // note if state changes, it will re rendert the whole component
    const [ selectedTopic, setSelectedTopic ] = useState();
    const tabs = ['components', 'jsx', 'props', 'state']

    const handleClick = (dynamicContent) => {
        setSelectedTopic(dynamicContent);
    
        // react schedules the update of the state afte it has been re-rendered
        // therefore if you log the dynamic content now, it will still show the old state
        // console.log(dynamicContent);
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
        )
    };
    
    return (
        <Section id="examples" title="examples">
            <menu>
                {
                    /* will not be executed immediately since it is inside an arrow function */
                    /* therefore we can pass parameters to the function */
                    tabs.map((tab) => {
                        return (
                            <TabButton 
                                onClick={() => handleClick(tab)} 
                                isSelected={ selectedTopic === tab }
                            >
                                {tab}
                            </TabButton>
                    )})
                }
            </menu>
            {
                !selectedTopic ? 
                    <p>Please select a topic.</p> 
                    : tabContent(EXAMPLES[selectedTopic]) 
            }
        </Section>
    );
}