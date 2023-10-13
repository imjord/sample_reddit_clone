import React, { useEffect } from "react";

const Post = (props) => {
  const { postViewHandler } = props;

  useEffect(() => {
    postViewHandler();
  }, []);
  return <div>Post</div>;
};

export default Post;
