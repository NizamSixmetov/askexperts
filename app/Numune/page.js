async function fetchData() {
  const url = await fetch("http://localhost:3000/api/blogNewsData");
  const result = await url.json();
  return result;
}

const Numune = async () => {
  const data = await fetchData();
  return (
    <div style={{ margin: "100px 0 0 0" }}>
      {data.map(({ id }) => {
        return <p key={id}>{id}</p>;
      })}
    </div>
  );
};

export default Numune;
