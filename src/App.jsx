import { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./css/App.css";
import { OptionSelection, Translation } from "./pages";
import { PreLoader, optionsArr } from "./components";

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  // console.log(import.meta.env.VITE_Open_AI_Key);

  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };

    const response = await openai.createCompletion(object);

    console.log(response.data.choices[0].text);

    setResult(response.data.choices[0].text);
  };

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="chatgpt-app">
      {isLoading ? (
        <PreLoader load={isLoading} />
      ) : (
        <div className="App">
          {Object.values(option).length === 0 ? (
            <OptionSelection
              optionsArr={optionsArr}
              selectOption={selectOption}
            />
          ) : (
            <Translation
              doStuff={doStuff}
              setInput={setInput}
              result={result}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;