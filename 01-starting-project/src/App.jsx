import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data'; // named export and not default

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(reactDescriptions.length-1)];
  
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

// react sends the data as the object "props"
// in this case we destructured it
function CoreConcept({ title, description, image }) {
  return(
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

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