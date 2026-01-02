import { useSelector } from "react-redux";
import Cards from "../Cards/Cards";

const Favorites = () => {

  const favorites = useSelector(state => state.favorites.items);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">❤️ Favorite Products</h2>

      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {favorites.map(item => (
            <Cards
              key={item.id}
              product={item}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
