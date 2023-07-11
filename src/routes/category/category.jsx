import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../context/categories-context";
import ProductCard from "../../components/product-card/product-card.components";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  //
  // const products = categoriesMap[category]

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => {
            return (
              <div>
                <ProductCard key={product.id} products={product} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Category;
