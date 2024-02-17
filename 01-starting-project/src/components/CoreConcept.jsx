// react sends the data as the object "props"
// in this case we destructured it
export default function CoreConcept({ title, description, image }) {
  return(
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}