
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    lastName: "",
    login: "",
    createAccount: "",
    confirmAccount: "",
  });

  console.log("email", formData.email);
  console.log("password", formData.password);
  console.log("firstname", formData.first_name);
  console.log("lastname", formData.lastName);
  console.log("createaccot", formData.createAccount);
  console.log("confirm", formData.confirmAccount);

  const myFuncBtn = () => {
    navigate("/");
  };

  return (
   <div className="flex items-center justify-center w-full h-screen">
  <div className="flex flex-col items-center justify-around w-full h-full md:flex-row">
    <div className="flex flex-col gap-5 mb-10">
      <h1 className="text-3xl font-bold md:text-5xl">Hello There</h1>
      <p className="mb-4 text-lg font-normal md:text-xl">Please sign in to continue</p>
      <h3 className="text-3xl font-bold md:text-5xl">Sign In</h3>
      <div className="input">
        <p className="mb-3 capitalize">email</p>
        <input type="text" name="email" className="w-full md:w-[400px] h-[50px] border-2 border-[#777] outline-none rounded-md pl-2 capitalize" placeholder="Enter your email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
      </div>
      <div className="password">
        <p className="mb-3 capitalize">password</p>
        <input type="password" className="w-full md:w-[400px] h-[50px] border-2 border-[#777] outline-none rounded-md pl-2 capitalize" placeholder="Enter your password" name="password" required value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
      </div>
      <span className="flex gap-2 capitalize"><input type="checkbox" className="cursor-pointer w-[30px]" />Remember my details</span> <br />
      <button className="w-full md:w-[400px] h-[40px] bg-[#ED165F] border-none rounded-md capitalize text-white text-[22px] cursor-pointer">Sign In</button>
      <p>Forgot password</p>
    </div>
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-extrabold md:text-5xl">Create Account</h1>
      <div>
        <p className="mb-2 capitalize">First Name</p>
        <input type="text" className="w-full md:w-[400px] h-[50px] border-2 border-[#777] outline-none rounded-md pl-2 capitalize" placeholder="First name" name="firstname" value={formData.first_name} onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} required />
      </div>
      <div>
        <p className="mb-2 capitalize">Last Name</p>
        <input type="text" className="w-full md:w-[400px] h-[50px] border-2 border-[#777] outline-none rounded-md pl-2 capitalize" placeholder="Last name" name="lastName" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required />
      </div>
      <div className="password">
        <p className="mb-2 capitalize">Email</p>
        <input type="text" className="w-full md:w-[400px] h-[50px] border-2 border-[#777] outline-none rounded-md pl-2 capitalize" placeholder="Enter your email" name="login" value={formData.login} onChange={(e) => setFormData({ ...formData, login: e.target.value })} required />
      </div>
      <div className="password">
        <p className="mb-2 capitalize">Create Password</p>
        <input type="password" className="w-full md:w-[400px] h-[50px] border-2 border-[#777] outline-none rounded-md pl-2 capitalize" placeholder="Create password" name="createAccount" value={formData.createAccount} onChange={(e) => setFormData({ ...formData, createAccount: e.target.value })} required />
      </div>
      <div>
        <p className="mb-2 capitalize">Confirm Password</p>
        <input type="password" className="w-full md:w-[400px] h-[50px] border-2 border-[#777] outline-none rounded-md pl-2 capitalize" placeholder="Confirm password" value={formData.confirmAccount} onChange={(e) => setFormData({ ...formData, confirmAccount: e.target.value })} required />
      </div>
      <span className="flex gap-3"><input type="checkbox" className="w-[30px] cursor-pointer" />I want to receive Safari newsletters with the best deals and offers</span> <br />
      <button className="w-full md:w-[400px] h-[40px] bg-[#ED165F] border-none rounded-md capitalize text-white text-[22px] cursor-pointer" onClick={myFuncBtn}>Create Account</button>
    </div>
  </div>
</div>

  );
}

export default Login;