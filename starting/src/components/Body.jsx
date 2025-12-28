const Body = () => {
  const age = 20;
  const arr = [1, 2, 3, 4, 5];

  return (
    <div>
      <div className="main">
        {arr.map(function (elem) {
          return <h1>{elem} is hello</h1>;
        })}
      </div>
    </div>
  );
};
export default Body;
