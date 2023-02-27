import React from "react";
import { getPagesArray } from "../utils/pages";

const Pages = ({totalPages, page, changePage}) => {

  let pagesArray = getPagesArray(totalPages);

  return (
    <div className="pages">
      <div className="number_pages">
        {pagesArray.map((p) => (
          <span
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? "number number__active" : "number"}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
};

export { Pages };
