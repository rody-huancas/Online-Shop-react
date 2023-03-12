import { Link } from "react-router-dom";
// imagenes
import NotFound from "../img/404.png";
import Group from "../img/Group.png";

export const Error = () => {
  return (
    <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 h-[85vh]">
      <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div class="relative">
          <div class="absolute">
            <div class="">
              <h1 class="my-2 text-gray-800 dark:text-indigo-600 font-bold text-2xl">
                Parece que has encontrado la puerta a la gran nada.
              </h1>
              <p class="mt-2 mb-10 text-gray-800 dark:text-indigo-600">
                ¡Lo lamento! Visite nuestra página de inicio para llegar a donde
                necesita ir.
              </p>
              <Link
                to={"/"}
                class="sm:w-full lg:w-auto my-2 mt-5 rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 uppercase"
              >
                Ir al Inicio
              </Link>
            </div>
          </div>
          <div>
            <img src={NotFound} />
          </div>
        </div>
      </div>
      <div>
        <img src={Group} />
      </div>
    </div>
  );
};
