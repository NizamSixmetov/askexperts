import PageCap from "@/app/Components/PageCap";
import Image from "next/image";

async function fetchData(id) {
  const url = await fetch("http://localhost:3000/api/data/" + id);
  const result = await url.json();
  return result;
}

const ServiceSingle = async ({ params: { id } }) => {
  const data = await fetchData(id);
  return (
    <div style={{ margin: "5rem 0" }}>
      <h1>{id}</h1>
      <h2>{data.cap}</h2>
      <h2>{data.description}</h2>
      <h2>{data.url}</h2>
      <Image src={data.url} width={100} height={100} alt="asdasd" />
    </div>
  );
};

export default ServiceSingle;
