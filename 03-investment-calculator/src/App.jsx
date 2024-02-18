import { useState } from "react";
import Header from "./components/Header.jsx"
import Results from "./components/Results"
import UserInput from "./components/UserInput"

const initialState = {
  initialInvestment : 10000,
  annualInvestment : 1000,
  expectedReturn : 3,
  duration : 10,
}

function App() {
  const [ userInput , setUserInput ] = useState(initialState);
  
  const inputIsValid = userInput.duration >= 1;

  function handleChange(identifier, newValue) {
    setUserInput((prevState) => {
        return {
            ...prevState,
            [identifier]: +newValue, //forces conversion to a number value
        }
    });
  }

  return (
    <>
      <Header />
      <UserInput 
        userInput={userInput}
        handleChange={handleChange}
      />
      { inputIsValid && <Results userInput={userInput} />}
      { !inputIsValid && <p className="center">Pelase enter a duration greater than zero.</p> }
    </>
  )
}

export default App
