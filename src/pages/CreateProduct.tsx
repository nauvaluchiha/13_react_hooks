import { useFetch } from "@/hooks/useFetch";
import { useEffect, useId, useState } from "react";
import ProductForm from "@/components/ProductForm";
import TableProduct from "@/components/ProductTable";
import Footer from "@/components/Footer";
import GenerateNumber from "@/components/GenerateNumber";
import Article from "@/components/Article";
import { randomUUID } from "crypto";

interface ProductData {
  id: string;
  name: string;
  category: string;
  image?: File | HTMLImageElement | string;
  freshness: string;
  desc: string;
  price: number | string;
}

const dataProduct = [
  {
    id: "1",
    name: "Product Name",
    category: "Product Category",
    image: "Product Image",
    freshness: "Product Freshness",
    desc: "Additional Desc",
    price: "$ 700",
  },
  {
    id: "2",
    name: "Product Name",
    category: "Product Category",
    image: "Product Image",
    freshness: "Product Freshness",
    desc: "Additional Desc",
    price: "$ 600",
  },
  {
    id: "3",
    name: "Product Name",
    category: "Product Category",
    image: "Product Image",
    freshness: "Product Freshness",
    desc: "Additional Desc",
    price: "$ 500",
  },
  {
    id: "4",
    name: "Product Name",
    category: "Product Category",
    image: "Product Image",
    freshness: "Product Freshness",
    desc: "Additional Desc",
    price: "$ 400",
  },
  {
    id: "5",
    name: "Product Name",
    category: "Product Category",
    image: "Product Image",
    freshness: "Product Freshness",
    desc: "Additional Desc",
    price: "$ 300",
  },
  {
    id: "6",
    name: "Product Name",
    category: "Product Category",
    image: "Product Image",
    freshness: "Product Freshness",
    desc: "Additional Desc",
    price: "$ 200",
  },
  {
    id: "7",
    name: "Product Name",
    category: "Product Category",
    image: "Product Image",
    freshness: "Product Freshness",
    desc: "Additional Desc",
    price: "$ 100",
  },
];

export const CreateProduct = () => {
  // const data = useFetch("/v1/98c2bfc1-0f1e-4ab7-946d-b9ebd4bd416f");
  const [productData, setProductData] = useState<ProductData[]>([]);
  // useEffect(() => {
  //   let ignore = false;
  //   if (!ignore) {
  //     data.then((data) => setProductData(data));
  //     console.log(
  //       "Munculnya error [Grid.js] [ERROR]: Duplicate plugin ID disebabkan oleh rendering yg terjadi dari useEffect ketika melakukan fetch data. Ini merupakan bug pada library tersebut yg meduplikasi plugin meski sudah dipakai. Bug ini masih belum difix sejak 8 bulan yg lalu."
  //     );
  //   }
  //   return () => {
  //     ignore = true;
  //   };
  // }, []);
  const [id, setId] = useState(0);
  const handleOnSubmit = (data: ProductData) => {
    const {name, category, image, freshness, desc, price} = data;
    const newData: ProductData = {
      id: id.toString(),
      name: name,
      category: category,
      image: image,
      freshness: freshness,
      desc: desc,
      price: Number(price),
    };
    setProductData(productData.concat(newData));
    setId(id + 1);
  };  

  const handleDelete = (id: string) => {
    const newData = productData.filter((item) => item.id !== id);
    setProductData(newData);
  };

  return (
    <main>
      <Article />
      <ProductForm handleOnSubmit={handleOnSubmit} />
      <GenerateNumber />
      <TableProduct productData={productData} handleDelete={handleDelete} />
      <Footer />
    </main>
  );
};