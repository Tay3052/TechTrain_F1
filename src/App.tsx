import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import PostThread from './Components/PostThread';
import CommentPost from './views/CommentPost';
import ThreadsList from './views/Threadslist';
import './App.css';

export function App() {
  return (
    <>
      {/* React-router-domでルーティングさせる */}
      <BrowserRouter>
        <Routes>
          {/* Headerは共通のコンポーネントとする */}
          <Route path='/' element={<Header />}>
            <Route path='/' element={<ThreadsList />} />
            {/* スレッドの投稿 */}
            <Route path='/thread/new/' element={<PostThread />} />
            {/* スレッドに対するコメント */}
            <Route path='/thread/:id/' element={<CommentPost />} />
            {/* <Route path='thread/:id/' element={} */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
