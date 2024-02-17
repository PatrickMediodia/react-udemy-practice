import { CORE_CONCEPTS } from '../data';
import CoreConcept from "../components/CoreConcept/CoreConcept"

export default function CoreConcepts() {
    return (
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
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
    );
}