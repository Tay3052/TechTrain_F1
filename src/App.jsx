import { useEffect, useState } from "react";
import "./App.css";
// import Posts from "./components/Posts";

function App() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    fetch(
      "https://railway.bulletinboard.techtrain.dev/threads?offset=1",
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
              <p className="title">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
