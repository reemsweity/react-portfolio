// src/hooks/useMenuToggle.js
import { useState } from "react";

const useMenuToggle = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => setMenu(!menu);

  return [menu, toggleMenu];
};

export default useMenuToggle;
