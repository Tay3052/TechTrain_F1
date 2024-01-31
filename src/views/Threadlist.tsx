import { useEffect, useState } from 'react';
import { getThreadsInterface } from '../Interfaces/API_Interfaces';
import { getThreads } from '../APIs/api';
import { useParams } from 'react-router-dom';
import CommentsList from '../Components/Comments';
import PostComment from '../Components/PostComments';

const ThreadList = () => {
  const [data, setData] = useState<getThreadsInterface[] | null>(null);
  const { id } = useParams<{ id: string }>();
  console.log(id);
  useEffect(() => {
    getThreads()
      .then((jsonData) => setData(jsonData))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <CommentsList data={data} />
        <PostComment />
      </div>
    </>
  );
};

export default ThreadList;
