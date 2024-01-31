import { CreateThreadById } from '../APIs/api';
import { useState } from 'react';
import { useParams } from 'react-router';

const PostComment = () => {
  const [value, setValue] = useState('');
  const { id } = useParams<{ id: string }>();

  const handleCreateFunction = async (value: string) => {
    try {
      if (id === undefined) {
        return;
      }
      const response = await CreateThreadById(id, value);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <form className='commentform'>
          <p>コメントを書いてください</p>
          <textarea value={value} onChange={(e) => setValue(e.target.value)} />
          <br />
          <button
            onClick={() => {
              handleCreateFunction(value);
            }}>
            送信
          </button>
        </form>
      </div>
    </>
  );
};

export default PostComment;
