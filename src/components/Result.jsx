import React, { useEffect, useState } from "react";
import { PostList } from "./PostList";
import PostService from "../API/PostService";
import { Loader } from "./UI/Loader";
import { getPageCount } from "../utils/pages";
import { Pages } from "./Pages";

const Result = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const [totalPages, settotalPages] = useState(0);

  const changePage = (page) => {
    setPage(page)
  }

  async function restApi() {
    setIsLoading(true);
    const response = await PostService.getAll(limit, page);
    setPost(response.data);
    const totalCount = response.headers["x-total-count"];
    settotalPages(getPageCount(totalCount, limit));
    setIsLoading(false);
  }

  useEffect(() => {
    restApi();
  }, [page]);

  return (
    <div className="rigth_main">
      <div className="rigth_main_header">
        <h1 className="h1main1">Результат:</h1>
      </div>
      {isLoading ? <Loader /> : <PostList posts={post} />}

      <Pages page={page} changePage={changePage} totalPages={totalPages}/>
    </div>
  );
};

export { Result };
