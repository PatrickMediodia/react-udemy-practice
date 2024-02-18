import { render, screen } from '@testing-library/react';
import App from './App';

// test('description of the test, the the actual code that will ran)
test('renders learn react link', () => {
  // render a component
  render(<App />);
  
  // get a hold of an element
  const linkElement = screen.getByText(/learn react/i);

  // check if it exsists in the document
  expect(linkElement).toBeInTheDocument();
});
