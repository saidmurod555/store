import { useEffect, useState } from "react";

const getStoredData = (key) => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : [];
};

const Fetch = () => {
  const [products, setProducts] = useState([]);
  const [Cards, setCards] = useState([]);
  const [Likes, setLikes] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const initialLikes = getStoredData("Likes");
        setProducts(data);
        setLikes(initialLikes);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const storedCards = getStoredData("Cards");
    setCards(storedCards);
  }, []);

  useEffect(() => {
    const storedProducts = getStoredData("Products");
    setProducts(storedProducts);
  }, []);

  const handleCheckboxChange = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        const updatedProduct = { ...product, checked: !product.checked };
        const storedProducts = getStoredData("Products");
        const updatedStoredProducts = storedProducts.map((storedProduct) => {
          if (storedProduct.id === productId) {
            return { ...storedProduct, checked: updatedProduct.checked };
          }
          return storedProduct;
        });
        localStorage.setItem("Products", JSON.stringify(updatedStoredProducts));
        return updatedProduct;
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleAddToCart = (product) => {
    const updatedCards = [...Cards, product];
    setCards(updatedCards);
    localStorage.setItem("Cards", JSON.stringify(updatedCards));
  };

  const handleLike = (product) => {
    const updatedLikes = [...Likes, product];
    setLikes(updatedLikes);
    localStorage.setItem("Likes", JSON.stringify(updatedLikes));
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCards = Cards.filter((item) => item.id !== productId);
    setCards(updatedCards);
    localStorage.setItem("Cards", JSON.stringify(updatedCards));
  };

  const handleDislike = (productId) => {
    const updatedLikes = Likes.filter((item) => item.id !== productId);
    setLikes(updatedLikes);
    localStorage.setItem("Likes", JSON.stringify(updatedLikes));
  };

  return (
    <div className="container px-4 mx-auto mt-12 mb-12">
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-10">
    {products.map((product) => (
      <div key={product.id}>
        <div className="relative p-6 transition-all border rounded-lg hover:shadow-xl">
          {Likes.find((item) => item.id === product.id) ? (
            <button
              onClick={() => handleDislike(product.id)}
              className="px-4 py-2 mt-2 text-white bg-red-500 rounded"
            >
              Dislike
            </button>
          ) : (
            <button
              onClick={() => handleLike(product)}
              className="px-4 py-2 mt-2 text-white bg-green-500 rounded "
            >
              Like
            </button>
          )}
          <img src={product.image} alt="Product" className="w-full h-full mb-10" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white">
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="mb-2 text-gray-600">Price: ${product.price}</p>
            {Cards.find((item) => item.id === product.id) ? (
              <button
                onClick={() => handleRemoveFromCart(product.id)}
                className="px-4 py-2 mt-2 text-white bg-red-500 rounded"
              >
                Remove from Cart
              </button>
            ) : (
              <button
                onClick={() => handleAddToCart(product)}
                className="px-4 py-2 mt-2 text-white bg-green-500 rounded"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Fetch;
