import { useState, useEffect } from 'react';
import { getThreads } from '../APIs/api';
import { getThreadsInterface } from '../Interfaces/API_Interfaces';
import { Link } from 'react-router-dom';

const Home = () => {
  const [post, setPost] = useState<getThreadsInterface[] | null>(null);
  useEffect(() => {
    getThreads()
      .then((jsonData) => setPost(jsonData))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className='center'>
        <ul className='threadlist'>
          {post &&
            post?.map((thread: getThreadsInterface) => (
              <Link to={`/thread/${thread.id}`}>
                <li key={thread.id} className='lipad'>
                  <p>{thread.title}</p>
                </li>
              </Link>
            ))}
        </ul>
      </div>
    </>
  );
};

export { Home };
