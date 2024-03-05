import  { useEffect, useState } from "react";
import Fetch from "../containers/Fech";
import Loading from "../components/Loading";


const Shoes = () => {
  const [ setProducts] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
 useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
  {isLoading ? (
    <Loading />
  ) : (
    <div className="container mx-auto mt-20 md:mt-32">
      <h1 className="pb-10 text-3xl font-extrabold">Clothes</h1>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="flex flex-col gap-6">
          <h3 className="pb-4 mb-4 text-lg font-semibold border-b-2 border-slate-400">Category</h3>
          <ul className="flex flex-col gap-3">
            {["All", "Dresses", "Denim", "Jackets and coats", "Loungerie & underwear", "Sweaters & knits"].map((category, index) => (
              <li key={index} className="text-base font-normal text-gray-600 cursor-pointer hover:text-red-500">{category}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="pb-4 mb-4 text-lg font-semibold border-b-2 border-slate-400">SIZE</h3>
          <ul className="grid grid-cols-4 gap-3">
            {["XXS", "XS", "S", "M", "L", "XL", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32"].map((size, index) => (
              <li key={index} className="px-3 py-2 text-sm font-semibold text-center border rounded-sm border-slate-900">{size}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-20 md:mt-10">
        <Fetch />
      </div>
    </div>
  )}
</div>

  );
};

export default Shoes;
