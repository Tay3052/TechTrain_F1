interface getThreadsInterface {
  id: string;
  title: string;
}

interface postThreadInterface {
  threadId: string;
  title: string;
}

interface getThreadInterface {
  threadId: string;
  posts: {
    id: string;
    post: string;
  };
}

interface postPostInterface {
  postId: string;
  threadId: string;
  post: string;
}

export type {
  getThreadsInterface,
  postThreadInterface,
  getThreadInterface,
  postPostInterface,
};
