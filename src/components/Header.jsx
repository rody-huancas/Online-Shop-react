import { useContext } from "react";
// contexts
import { SidebarContext } from "../contexts/SidebarContext";
// iconos
import { BsBag } from "react-icons/bs";

export const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <header className="bg-pink-200">
      <div>Header</div>
      <div
        className="cursor-pointer flex relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BsBag className="text-2xl" />
      </div>
    </header>
  );
};
