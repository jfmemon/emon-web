import { useEffect, useState } from "react";
import { Card } from "./Card/Card";

export const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h3 className="text-center my-4 text-3xl font-bold">Blog List</h3>
      <div className="flex flex-wrap justify-center gap-3 my-2">
        {
          blogs.map(blog => (
            <Card
              key={blog.id}
              blog={blog}
            ></Card>
          ))
        }
      </div>
    </div>
  );
};
