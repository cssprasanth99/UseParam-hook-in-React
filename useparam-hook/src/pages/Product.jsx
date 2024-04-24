import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export const Product = () => {
  let [count, setCount] = useState(false);
  let [value, setValue] = useState(false);
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);
  const [search, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`
    )
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?sort=price&order=asc`
    )
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, [count]);

  console.log(category);

  useEffect(() => {
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?category=${category}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, [category]);

  const LowToHigh = () => {
    setSearchParams({ sort: "price" });
    setCount(true);
  };

  const handleCategory = (val) => {
    setSearchParams({ category: val });
    setCategory(val);
    setValue(true);
  };

  return (
    <div>
      Products
      <h2>Price</h2>
      <button onClick={LowToHigh}>Low to High</button>
      <br />
      <br />
      <select
        onChange={(e) => {
          handleCategory(e.target.value);
        }}
        style={{
          padding: "10px",
          backgroundColor: "#f9f9f9",
          borderRadius: "5px",
          fontFamily: "inherit",
          border: "none",
          fontSize: "1em",
          fontWeight: "500",
        }}
      >
        <option value="">Select one category</option>
        <option value={"men"}>Men</option>
        <option value={"women"}>Women</option>
        <option value={"kids"}>Kids</option>
        <option value={"homedecor"}>Homedecor</option>
      </select>
      {data.map((product) => (
        <>
          <Link key={product.id} to={`/productDetails/${product.id}`}>
            <div>
              <h2>{product.id}</h2>
              <h2>{product.title}</h2>
              <h2>{product.category}</h2>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
};
