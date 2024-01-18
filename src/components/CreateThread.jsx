import { useState } from "react";

function createThread(title) {
  const url = `https://railway.bulletinboard.techtrain.dev/threads/`;
  // プロパティとパラメータを指定
  const body = { title: title };
  // 情報の送信方法を指定
  const options = {
    method: "GET",
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
export const ThreadUpload = () => {
  const [post, setPosts] = useState("");
  async function CreateThread(title) {
    try {
      const response = await createThread(title);
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
          <br />
          <input
            type="text"
            value={post}
            // setPostsに入力された値を渡して格納
            onChange={(title) => {
              setPosts(title.target.value);
            }}
          />
          <br />

          {/* ボタンをクリックすると送信される */}
          <input
            type="button"
            value="作成"
            onClick={() => {
              CreateThread(post);
            }}
          />
        </form>
      </div>
    </>
  );
};

export default ThreadUpload;
