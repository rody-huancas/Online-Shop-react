import { useContext } from "react";
// context
import { ProductContext } from "../contexts/ProductContext";
// componentes
import { Product } from "../components";

export const Products = () => {
  const { products } = useContext(ProductContext);

  return (
    <section className="mt-[120px] sm:mt-10 max-w-[1100px] mx-auto py-16">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Todos Nuestros <span className="text-indigo-600">Productos</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4  max-w-sm mx-auto md:max-w-none md:mx-0">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
