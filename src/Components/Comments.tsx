import { useEffect, useState } from 'react';
import { getThreadInterface } from '../Interfaces/API_Interfaces';
import { threadById } from '../APIs/api';
import { useParams } from 'react-router';

interface PostInterface {
  id: string;
  post: string;
}

const CommentsList = () => {
  const [data, setData] = useState<getThreadInterface>;
  const { id } = useParams<{ id: string }>();
  console.log(id);

  useEffect(() => {
    threadById(id!)
      .then((jsonData) => setData(jsonData))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className='comments'>
        <ul>
          {data &&
            data.posts.map((post: PostInterface) => (
              <li key={post.id}>
                <p>{post.post}</p>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default CommentsList;
