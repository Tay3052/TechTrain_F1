const BaseUrl = 'https://railway.bulletinboard.techtrain.dev';
function getThreads() {
  const response = fetch(
    `${BaseUrl}/threads?offset=0
  `,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const resData = response.then((res) => res.json());
  return resData;
}

function createThread(title: string) {
  const body = {
    title,
  };
  const response = fetch(`${BaseUrl}/threads`, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = response.then((res) => res.json());
  return resData;
}

function threadById(threadId: string) {
  const response = fetch(`${BaseUrl}/threads/${threadId}/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = response.then((res) => res.json());
  return resData;
}

function CreateThreadById(id: string, post: string) {
  const body = {
    post,
  };
  return fetch(`${BaseUrl}/threads/${id}/posts`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.text();
    })
    .then((data) => {
      if (data === '') {
        return {};
      }
      return JSON.parse(data);
    });
}

export { getThreads, createThread, threadById, CreateThreadById };
