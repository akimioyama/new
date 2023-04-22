import React from "react";
import { AdminItem } from "./AdminItem";

const AdminList = ({post, onchange}) => {

    const change = () =>{
        onchange()
    }
    return(
        <div>
            {post?.map((q) => (
            <AdminItem post={q} key={q.id} change={change}/>
          ))}
        </div>
    )
}

export { AdminList }