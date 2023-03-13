// imagenes
import Nosotros from "../img/about.jpg";

export const About = () => {
  return (
    <section className="text-justify max-w-[1100px] mx-auto mt-[120px] sm:mt-10 py-12 px-5">
      <div className="flex flex-col justify-center gap-3">
        <h2 className="text-3xl mb-3 font-bold text-primary uppercase">
          Nosotros
        </h2>
        <div className="flex items-center justify-center gap-5">
          <p className="text-primary">
            Bienvenido a Shopify, una tienda de ropa que ofrece una selección
            única de prendas de vestir y accesorios de moda para hombres y
            mujeres de todas las edades. En Shopify, nos apasiona la moda y nos
            esforzamos por ofrecer productos de alta calidad a precios
            asequibles para nuestros clientes.
            <br />
            Gracias por visitar nuestra tienda en línea. Siéntete libre de
            explorar nuestros productos y si tienes alguna pregunta, no dudes en
            ponerte en contacto con nosotros. ¡Esperamos que disfrutes de tu
            experiencia de compra en nuestra tienda en línea!
          </p>
          <img
            className="hidden lg:block lg:w-[450px] rounded-lg"
            src={Nosotros}
            alt="Imagen nosotros"
          />
        </div>
      </div>
      {/* mision y vision */}
      <div className="flex items-center justify-center gap-10 my-10">
        <div>
          <h3 className="text-3xl mb-3 font-bold text-primary uppercase">
            Misión
          </h3>
          <p className="text-primary">
            "Nuestra misión es proporcionar ropa elegante y cómoda a precios
            asequibles, mientras promovemos la sostenibilidad en la moda. Nos
            comprometemos a ofrecer productos de alta calidad y un servicio al
            cliente excepcional a todos nuestros clientes."
          </p>
        </div>
        <div>
          <h3 className="text-3xl mb-3 font-bold text-primary uppercase">
            Visión
          </h3>
          <p className="text-primary">
            "Nuestra visión es convertirnos en líderes en la moda sostenible,
            ofreciendo productos de alta calidad y promoviendo prácticas éticas
            y respetuosas con el medio ambiente en toda la industria de la
            moda."
          </p>
        </div>
      </div>
    </section>
  );
};
