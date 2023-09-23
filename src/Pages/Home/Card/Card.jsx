import { useNavigate } from "react-router-dom";

export const Card = ({ blog }) => {
  const { title, body, id } = blog;
  const navigate = useNavigate();

  const handleBlogDetails = (id) => {
    navigate('/details', { state: { body: body, title: title, id: id } })
  }

  const handleMarkAsFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyFavorite = favorites.some(favorite => favorite.id === blog.id);

    if (!isAlreadyFavorite) {
      favorites.push(blog);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert('This blog is selected as favorite blog.')
    } else {
      alert('This blog is already in favorites.');
    }
    
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl border-2">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <button className="btn btn-md btn-primary" onClick={() => handleBlogDetails(id)}>Details</button>
        <button className="btn btn-outline btn-warning" onClick={handleMarkAsFavorite}>Mark As Favorite</button>
      </div>
    </div>
  );
};
