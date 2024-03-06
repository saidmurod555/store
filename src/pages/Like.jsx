import  { useEffect, useState } from 'react';

const Like = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("Likes")) || [];
    if (storeData.length === 0) {
      alert(`malumot yuq`);
    }
    setProducts(storeData);
  }, []);

  const handleDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    localStorage.setItem("Likes", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  return (
    <div>
  <div className='flex justify-center w-full pt-20 md:pt-40'>
    <div className='flex-wrap w-full gap-10 mx-auto '>
      {products.map((item, index) => (
        <div key={index} className="w-full container mx-auto md:w-[40%] lg:w-[50%] xl:w-[60%] flex justify-between h-[250px] items-center gap-10 mb-10 border-2 rounded-md ">
          <img src={item.image} alt="" className='w-[200px] h-[200px] '/>
          <p className='h-full pt-20 pr-5 border-r'> {item.category}</p>
          <p className='h-full pt-20 pr-5 border-r'>{item.price}</p>
          <button className="px-4 py-2 mr-24 text-white bg-red-500 rounded-md" onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Like;
