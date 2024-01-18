import { Link, Outlet } from "react-router-dom";
import "../App.css";

// ヘッダーの設定画面
export const ThreadsNav = () => {
  return (
    <>
      <div className="wrap">
        <h2 className="char" style={{ fontSize: "30px" }}>
          掲示板
        </h2>
        {/* トップページに戻る */}
        <Link to="/" className="char">
          ホーム
        </Link>
        {/* 新しいスレッドを作成する */}
        <Link to="threads/new/" className="char">
          新規スレッド
        </Link>
      </div>

      <Outlet />
    </>
  );
};

export default ThreadsNav;
