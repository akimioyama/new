import React from "react";
import { ReqItem } from "./ReqItem";

const ReqList = ({ post, info, change }) => {
  const changePost = () => {
    change()
  };

  return (
    <div className="reqlist">
      {info == "start" ? (
        <div className="reqlist">
          {post?.map((q) => {
            return <ReqItem post={q} key={q.id_request} change={changePost} />;
          })}
        </div>
      ) : info == "processing" ? (
        <div className="reqlist">
          {post?.map((q) => {
            return <ReqItem post={q} key={q.id_request} change={changePost} />;
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export { ReqList };
