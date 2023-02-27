import React from "react";
import { Item } from "./Item";

const PostList = ({posts}) => {
  return (
    <div className="result">
      {posts?.map((q) => (
        <Item post={q} key={q.id} />
      ))}
    </div>
  );
};

export { PostList };
