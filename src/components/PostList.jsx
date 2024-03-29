import React from "react";
import { Item } from "./Item";
import { ItemInLk } from "./ItemInLk"

const PostList = ({ posts, local, change1 }) => {

  const change = () => {
    change1()
  }

  return (
    <div className="result">
      {local != "lk" ? (
        <div>
          {posts?.map((q) => (
            <Item post={q} key={q.id} />
          ))}
        </div>
      ) : (
        <div className="postListUser">
          {posts?.map((q) => (
            <ItemInLk change={change} post={q} key={q.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export { PostList };
