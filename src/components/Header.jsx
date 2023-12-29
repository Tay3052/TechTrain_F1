import { BrowserRouter, Link } from "react-router-dom";
import "../App.css";
import Posts from "./Posts";

export const header = () => {
  return (
    <>
      <header className="header">
        <div className="wrap">
          <p className="char" style={{ fontSize: "30px" }}>
            掲示板
          </p>
          <BrowserRouter>
            <Link to="/thread/new/" component={Posts} className="char">
              新規スレッド作成
            </Link>
          </BrowserRouter>
        </div>
      </header>
    </>
  );
};

export default header;
