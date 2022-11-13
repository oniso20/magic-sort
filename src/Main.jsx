import React from "react";
import { useState } from "react";

const Main = () => {
  const [message, SetMessage] = useState("");
  const [result, SetResult] = useState([]);

  const inputHandler = (e) => {
    SetMessage(e.target.value);
  };

  const sortHandler = () => {
    bubbleSort();
  };

  function bubbleSort() {
    let arr = message.split(" ").join("").split(",");
    arr = arr.map(Number);
    console.log(arr);
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
    SetResult(`Here are your sorted items: ${arr.join(", ")} `);
  }

  return (
    <main>
      <h1>Magic Sort</h1>
      <div className="content">
        <p>
          Got a list of words you want to sort? <br /> Enter the list of items
          and hit the sort entries button.
        </p>
        <label htmlFor="word"> Enter the list:</label>
        <input
          onChange={inputHandler}
          type="text"
          id="word"
          placeholder="e.g 67, 6, 25"
        />
        <button onClick={sortHandler}>Sort Entries</button>
        <small>
          <p>{result}</p>
        </small>
      </div>
    </main>
  );
};

export default Main;
