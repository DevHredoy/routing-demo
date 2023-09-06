import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Hello from home</div>
      <button onClick={() => navigate("order-summary",{replace:true})}>Place order </button>
    </>
  );
};
