async function getData() {
  const res = await fetch(`/api/blogNewsData`);

  if (!res.ok) {
    throw new Error("Failed to Fetch data");
  }

  return res.json();
}

export default async function Numune() {
  const data = await getData();
  return (
    <div style={{ margin: "100px 0 0 0" }}>
      {data.map(({ id }) => {
        return <p key={id}>{id}</p>;
      })}
    </div>
  );
}
