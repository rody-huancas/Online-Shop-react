import { Link } from "react-router-dom";
// imagenes
import model from "../img/model.png";

export const Hero = () => {
  return (
    <>
      <section className="h-[800px] bg-hero bg-no-repeat bg-center bg-cover py-24 mt-20">
        <div className="container mx-auto flex justify-around h-full">
          {/* texto */}
          <div className="flex flex-col justify-center">
            <div className="font-semibold flex items-center uppercase">
              <div className="w-10 h-[2px] bg-red-500 mr-3"></div>Nueva
              tendencia
            </div>
            <h1 className="w-full text-[70px] leading-[1.1] font-light mb-4 uppercase">
              Venta de otoño con estilo{" "}
              <span className="font-semibold">para Hombres y Mujeres</span>
            </h1>
            <Link
              to={"/products"}
              className="self-start uppercase font-semibold border-b-2 border-primary"
            >
              Descubrir más
            </Link>
          </div>
          {/* imagen */}
          <div className="hidden lg:block lg:w-1/2 lg:mr-20">
            <img className="lg:w-full" src={model} alt="Imagen de portada" />
          </div>
        </div>
      </section>
    </>
  );
};
