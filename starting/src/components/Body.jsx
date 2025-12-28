const Body = () => {
  const age = 20;
  const arr = [1, 2, 3, 4, 5];

  return (
    <div>
      <div className="main">
        {arr.map(function () {
          return <h1>hello</h1>;
        })}
      </div>
    </div>
  );
};

export default Body;
