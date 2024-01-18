import { useState } from "react";

function createThread(title) {
  const url =
    "https://railway.bulletinboard.techtrain.dev/threads/posts?offset=1";
  // プロパティとパラメータを指定
  const body = { title: title };
  // 情報の送信方法を指定
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // JSON形式に変換
    body: JSON.stringify(body),
  };
  // fetchを使ってリクエストを送信
  const responce = fetch(url, options);
  // レスポンスのJSONを取得
  const resData = responce.then((res) => res.json());
  console.log(resData);
  // レスポンスのJSONを返す
  return resData;
}

// スレッドの投稿
const ThreadPosts = () => {
  const [post, setPosts] = useState(""); // スレッドのタイトル
  async function handleCreateThread(post) {
    try {
      const response = await createThread(post);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="threads">
        <h2 style={{ textAlign: "center" }}>新規スレッド作成</h2>
        <form style={{ textAlign: "center" }}>
          {/* 書きたい文章を書く */}
          <label>スレッドタイトル</label>
          <input
            type="text"
            value={post}
            // setPostsに入力された値を渡して格納
            onChange={(event) => {
              setPosts(event.target.value);
            }}
          />
          <br />
          {/* ボタンをクリックすると送信される */}

          <input
            type="button"
            value="作成"
            onClick={() => {
              handleCreateThread(post);
            }}
          />
        </form>
      </div>
    </>
  );
};

export default ThreadPosts;
