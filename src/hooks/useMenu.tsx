import { useContext } from "react";
import { MenuContext } from "@/contexts/MenuContext";
import type { MenuContextType } from "@/contexts/MenuContext";

export const useMenu = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};
