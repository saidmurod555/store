import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Savat = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("Cards")) || [];
    if (storeData.length === 0) {
      alert('malumot yuq');
    }
    setProducts(storeData);
    calculateTotalPrice(storeData);
  }, []);

  const calculateTotalPrice = (products) => {
    let total = 0;
    products.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  };

  const deleteItem = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
    localStorage.setItem("Cards", JSON.stringify(updatedProducts));
    calculateTotalPrice(updatedProducts);
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity = newQuantity;
    setProducts(updatedProducts);
    localStorage.setItem("Cards", JSON.stringify(updatedProducts));
    calculateTotalPrice(updatedProducts);
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("Cards");
    setProducts([]);
    setTotalPrice();
  };

  return (
    <div className="px-4 py-10">
  <div className='flex justify-center'>
    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {products.map((item, index) => (
        <div key={index} className="flex flex-col justify-between p-4 mb-5 bg-white rounded-lg shadow-md">
          <img src={item.image} alt="" className='object-cover w-full h-48 mb-4'/>
          <p className="font-semibold text-center text-gray-800">{item.category}</p>
          <p className="text-center text-gray-600">${item.price}</p>
          <div className="flex items-center justify-between mt-4">
            <button onClick={() => updateQuantity(index, item.quantity - 1)}>-</button>
            <input type="number" className="w-20 px-2 py-1 border border-gray-300 rounded-md" value={item.quantity} onChange={(e) => updateQuantity(index, parseInt(e.target.value))} />
            <button onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
          </div>
          <button onClick={() => deleteItem(index)} className="px-4 py-2 m-3 text-white bg-red-500 rounded-md">Delete</button>
          <div>
            Total: ${item.price * item.quantity}
          </div>
        </div>
      ))}
    </div>
  </div>
  <div className='block mt-4 font-semibold text-center text-gray-800'>
    Total Price: ${totalPrice}
  </div>
  <NavLink to="/" onClick={clearLocalStorage} className="block w-full max-w-[200px] mx-auto px-4 py-2 mt-6 text-center text-white bg-amber-300 rounded-md shadow hover:bg-amber-400 transition duration-300">
    Shop
  </NavLink>
</div>

  );
};

export default Savat;
