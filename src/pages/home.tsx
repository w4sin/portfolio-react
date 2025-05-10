import { NavLink } from "react-router";

function Home() {
  return (
    <>
      <div className="screen flex-center flex-col">
        <h1 className="text-3xl font-bold">
          {`${import.meta.env.VITE_HELLO || "Hi"} world!`}
        </h1>
        <NavLink to="/billing-app" className="btn btn-primary mt-4">
          Go to Billing App
        </NavLink>
      </div>
    </>
  );
}

export default Home;
