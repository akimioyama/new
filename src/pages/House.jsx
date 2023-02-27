import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";

function House() {
  const { id } = useParams();
  const [house, setHouse] = useState({});
  const [isLoading, setIsLoading] = useState(false);


  async function Api() {
    setIsLoading(true);
    const response = await PostService.getOne(id);
    setHouse(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    Api()
  }, )

  return (
  
  <div className="main">
    <h1>{house.title}</h1>
  </div>);
}

export { House };
