import './App.css';
import { ChangeEvent, useState } from "react";


function calculateDogAge(dogAge) {
  
  if (dogAge === 1) {
    return 15;
  } else if (dogAge === 2) {
    
    return 15 + 9;
  } else {
    
    return 15 + 9 + ((dogAge - 2) * 5);
  }
}

function App() {
  const [dogAge, setDogAge] = useState("");
  const [humanAge, setHumanAge] = useState("");

  const handleInputChange = (event) => {
    setDogAge(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (!isNaN(dogAge) && Number(dogAge) > 0) {
      const humanAge = calculateDogAge(Number(dogAge));
      setHumanAge(humanAge);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='header-text'>Calculate Your Dog's Age In Human Years</h1>
        <div className='main-container'>
        <form>
          <label>
            <p>Enter your dog age</p>
            <input type="number" value={dogAge} onChange={handleInputChange} />

          </label>
          <button onClick={handleClick}>Calculate</button>
        </form>

        {humanAge !== "" &&(
          <div>
          <p>Your dog's age in human years is {humanAge}</p>
        </div>
        )}
        </div>
      </header>
    </div>
  );
}



export default App;
