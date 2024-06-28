import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCompute = () => {
    try {
      const evaluatedResult = new Function('return ' + input)();
      setResult(evaluatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs bg-blue-300 p-5 rounded-lg shadow-md">
        <h1 className="text-2xl mb-5 text-center">React Calculator</h1>
        <div className="mb-5">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-2 mb-2 text-right bg-white border border-gray-300 rounded"
          />
          <div className="text-right text-gray-700">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '%', '/', '.'].map(
            (value) => (
              <button
                key={value}
                onClick={() => handleClick(value)}
                className="bg-blue-600 text-white p-2 rounded"
              >
                {value}
              </button>
            )
          )}
          <button onClick={handleCompute} className="col-span-2 bg-green-600 text-white p-2 rounded">
            Compute
          </button>
          <button onClick={handleClear} className="col-span-2 bg-red-600 text-white p-2 rounded">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
