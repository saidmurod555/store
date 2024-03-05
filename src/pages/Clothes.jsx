import  { useEffect, useState } from "react";
import Fetch from "../containers/Fech";
import Loading from "../components/Loading";


const Clothes = () => {
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
    <div >
  {isLoading ? (
    <Loading />
  ) : (
    <div className="container flex flex-col mx-auto md:flex-row">
      <div className="mr-10 md:w-72">
        <h1 className="pb-8 text-3xl font-extrabold md:pb-20">Clothes</h1>
        <div className="flex flex-col gap-9">
          <div>
            <h3 className="pb-4 mb-4 text-lg font-semibold border-b-2 border-slate-400">
              Category
            </h3>
            <ul className="flex flex-col gap-5">
              {[
                "All",
                "Dresses",
                "Denim",
                "Jackets and coats",
                "Loungerie & underwear",
                "Sweaters & knits",
              ].map((category, index) => (
                <li
                  key={index}
                  className="font-normal text-base text-[#686868] hover:text-[#ED165F]"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="pb-4 mb-4 text-lg font-semibold border-b-2 border-slate-400">
              SIZE
            </h3>
            <ul className="grid max-w-xs grid-cols-1 gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:max-w-none md:mx-0">
              {[
                "XXS",
                "XS",
                "S",
                "M",
                "L",
                "XL",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
              ].map((size, index) => (
                <li
                  key={index}
                  className="border border-slate-900 rounded-sm px-[7px] py-3 text-sm font-semibold text-center"
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-[-100px] md:mt-0">
        <Fetch />
      </div>
    </div>
  )}
</div>

  );
};

export default Clothes;
