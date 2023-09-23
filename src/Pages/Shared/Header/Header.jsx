import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <div className="flex justify-center gap-2 p-3 border-2 bg-slate-400 container mx-auto">
        <Link to='/' className="btn">Home</Link>
        <Link to='/favorite' className="btn">Favorite</Link>
        {/* <div>Home</div> */}
      </div>
    </div>
  );
};
