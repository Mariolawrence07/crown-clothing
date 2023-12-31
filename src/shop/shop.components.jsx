import { useContext } from "react";
import { ProductsContext } from "../context/product-context";
import ProductCard from "../components/product-card/product-card.components";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <div className="">
          <ProductCard key={product.id} products={product} />
        </div>
      ))}
    </div>
  );
};

export default Shop;
