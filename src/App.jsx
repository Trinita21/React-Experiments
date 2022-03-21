import "./styles.css";
import { useState } from "react";

export default function App() {
  // logic

  const [counter, setCounter] = useState(10);

  function remaining_letters_count(e) {
    const len = e.target.value.length;
    setCounter(10 - len);
  }

  // return
  return (
    <div className="text-center text-xl">
      <h1>Twitter Input Box</h1>
      <input
        onChange={remaining_letters_count}
        className="border border-black"
        type="text"
      />
      {counter < 0 ? (
        <>
          <p className="text-red-400">Remaining letters:{counter}</p>
          <button className="border border-black bg-gray-200 p-1 cursor-not-allowed">
            Tweet
          </button>
        </>
      ) : (
        <>
          <p>Remaining letters:{counter}</p>
          <button className="border border-black bg-blue-200 p-1">Tweet</button>
        </>
      )}
    </div>
  );
}
