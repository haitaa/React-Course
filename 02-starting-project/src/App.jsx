import Header from "./components/Header/Header.jsx";
import InputTable from "./components/InputTable/InputTable.jsx";
import Results from "./components/Results.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <InputTable onChange={handleChange} userInput={userInput} />
      <Results input={{ userInput }} />
    </>
  );
}

export default App;