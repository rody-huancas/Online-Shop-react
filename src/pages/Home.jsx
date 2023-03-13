import { useContext } from "react";
// context
import { ProductContext } from "../contexts/ProductContext";
// componentes
import { Hero, Product } from "../components";

export const Home = () => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );

  return (
    <>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <h1 className="uppercase mb-6 font-bold text-2xl text-primary">
            Nuestro Productos más vendidos
          </h1>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
