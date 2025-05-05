function Home() {
  return (
    <>
      <div className="screen flex-center flex-col">
        <h1 className="text-3xl font-bold">
          {`${import.meta.env.VITE_HELLO || "Hi"} world!`}
        </h1>
      </div>
    </>
  );
}

export default Home;
