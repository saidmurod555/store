import { CircleLoader } from "react-spinners";

const Loading = () => (
  <div className="flex items-center justify-center w-full h-screen bg-slate-700">
    <CircleLoader color="#36d7b7" size={200} />
  </div>
);

export default Loading ;