import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";

function ThreadsLists() {
  const [res, setRes] = useState([]);
  // スレッドの一覧を取得
  useEffect(() => {
    fetch(
      "https://railway.bulletinboard.techtrain.dev/threads?offset=0&limit=10",
      { method: "GET" },
      { mode: "cors" }
    )
      // レスポンスのJSONを取得
      .then((responce) => responce.json())
      // レスポンスのJSONを返す
      .then((item) => {
        console.log(item);
        setRes(item);
      });
  }, []);
  // console.log(res);
  return (
    <>
      <div>
        <ul className="threads">
          {/* map関数でresの情報を回す(for文的な) */}
          {res.map((item) => (
            <Link key={item.id} to={`/threads/${item.id}/post`}>
              <li className="list">
                <h2>{item.title}</h2>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ThreadsLists;
