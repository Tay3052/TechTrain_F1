import ThreadLists from "./components/ThreadsLists";
import Header from "./components/ThreadsHeader";
import { ThreadUpload } from "./components//CreateThread";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* React-router-domでルーティングさせる */}
      <BrowserRouter>
        <Routes>
          {/* Headerは共通のコンポーネントとする */}
          <Route path="/" element={<Header />}>
            <Route path="/" element={<ThreadLists />} />
            {/* スレッドの投稿 */}
            <Route path="/threads/new/" element={<ThreadUpload />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
