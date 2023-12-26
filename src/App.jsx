import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    fetch(
      "https://railway.bulletinboard.techtrain.dev/threads?offset=20",
      { method: "GET" },
      { mode: "cors" }
    )
      // .then((text) => {
      //   console.log(text);
      // })
      .then((responce) => responce.json())
      .then((item) => {
        console.log(item);
        setRes(item);
      });
  }, []);
  // console.log(res);
  return (
    <>
      <div>
        <ul>
          {res.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
