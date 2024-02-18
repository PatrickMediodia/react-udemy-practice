import { useState } from "react";

const initialState = {
    initialInvestment : 10000,
    annualInvestment : 1000,
    expectedReturn : 3,
    duration : 10,
}

export default function UserInput() {
    const [ userInput , setUserInput ] = useState(initialState);

    function handleChange(identifier, newValue) {
        setUserInput((prevState) => {
            return {
                ...prevState,
                [identifier]: newValue,
            }
        });
    }
    
    return (
        <section id='user-input'>
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input 
                        type="number" 
                        required
                        value={userInput['initialInvestment']}
                        onChange={(e)=> handleChange('initialInvestment', e.target.value)}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input 
                        type="number" 
                        required
                        value={userInput['annualInvestment']}
                        onChange={(e)=> handleChange('annualInvestment', e.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput['expectedReturn']}
                        onChange={(e)=> handleChange('expectedReturn', e.target.value)}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input 
                        type="number" 
                        required 
                        value={userInput['duration']}
                        onChange={(e)=> handleChange('duration', e.target.value)}
                    />
                </p>
            </div>
        </section>  
    );
}