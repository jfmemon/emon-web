import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const BlogDetails = () => {
  const [comments, setComments] = useState([]);
  const location = useLocation();
  const id = location.state.id;
  const details = location.state.body;

  useEffect(() => {
    const post = localStorage.getItem(`postsId${id}`);
    // console.log( `post`);

    // console.log(`postsId${id}`,post );
    if (post) {
      setComments(JSON.parse(post));
    } else {
      fetch(`https://jsonplaceholder.typicode.com/comments?postsid=${id}`)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem(`postsId${id}`, JSON.stringify(data));
          setComments(data);
        });
    }
  }, []);

  const filteredComments = comments.filter(newComment => id === newComment.postId);

  return (
    <div>
      <h3 className="px-5 mt-5 text-2xl font-semibold">Blog details for POST_Id-{id} : <span className="text-red-500">{location.state.title}</span></h3>
      <p className="p-5"><span className="text-red-500 font-bold">Details: </span>{details}</p>
      {
        filteredComments.map((comment) => (
          <div className="border-2 m-5 p-2">
            <p key={comment.id}><span className="text-red-500 font-bold">Comments: </span>{comment.body}</p>
          </div>
        ))
      }
    </div>
  );
};
