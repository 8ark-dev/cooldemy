import { Fragment } from "react";

//node
import path from "path";
import fs from "fs/promises";

function ProductDetailPage(props) {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid; // instead of useRouter().query.pid

  const data = await getData();

  const product = data.products.find((p) => p.id === productId);

  if (!product) {
    return { notFound: true };
  }
  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((product) => product.id);

  const paramWithParams = ids.map(id => ({
    params: { pid: id }
  }))
  return {
    paths: paramWithParams,
    fallback: true, //방문율이 높은 페이지만 pre-rendering
  };
}

export default ProductDetailPage;
