import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
// import Button from "./Button";
import "@/assets/css/Table.css";
import { useEffect, useState } from "react";

type Product = {
  productData: ProductData[];
  handleDelete: (id: string) => void;
};

interface ProductData {
  id: string;
  name: string;
  category: string;
  image?: File | HTMLImageElement | string;
  freshness: string;
  desc: string;
  price: number | string;
}

const productTitle = [
  "No",
  "Product Name",
  "Product Category",
  "Image of Product",
  "Product Freshness",
  "Additional Desciption",
  "Product Price",
  "Action",
];

const ProductTable: React.FC<Product> = ({ productData, handleDelete }) => {
  const [data, setData] = useState<ProductData[]>([]);

  useEffect(() => {
    const dataa = productData.map((item) => {
      const button = document.createElement("button");
      button.className = "btn btn-danger";
      button.innerHTML = "Delete";
      button.id = `${item.id}`;
      button.type = "button";
      // button.addEventListener("click", (e) => {
      //   handleDelete(e.target.id);
      // });
      return [...Object.values(item), button];
    });
    setData(dataa);
  }, [productData]);

  useEffect(() => {
    setTimeout(() => {
      const button = document.querySelectorAll("button");
      button.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        handleDelete(e.target.id);
      });
    });
    }, 500);
  }, [data]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     // const button5 = document.getElementById("button 5");
  //     // console.log(button5);
  //     const button = document.querySelectorAll("button");
  //     button.forEach((btn) => {
  //     btn.addEventListener("click", (e) => {
  //       handleDelete(e.target.id);
  //       console.log(typeof e.target.id);
  //     });
  //   });
  //   // const button = document.getElementById("button 1")?.innerHTML;
  //   // console.log(button);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, [ productData]);

  return (
    <section>
      <div className="px-0 px-md-5">
        <Grid
          data={data}
          columns={productTitle}
          search={true}
          pagination={{
            enabled: true,
            limit: 20,
          }}
          // className="table"
        />
      </div>
    </section>
  );
};

export default ProductTable;
