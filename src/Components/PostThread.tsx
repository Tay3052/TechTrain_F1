import { useState } from 'react';
import { useNavigate } from 'react-router';
import { createThread } from '../APIs/api';

const PostThread = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const handleCreateFunction = async (value: string) => {
    try {
      const response = await createThread(value);
      navigate(`/thread/${response.id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='postform'>
        <h1>スレッド作成</h1>
        <form>
          <p>スレッド名</p>
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <br />
          <input
            type='submit'
            value='作成'
            onClick={() => {
              handleCreateFunction(value);
            }}
          />
        </form>
      </div>
    </>
  );
};

export default PostThread;
