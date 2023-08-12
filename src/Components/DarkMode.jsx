import { Icon, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  //value toggle for dark light
  return (
    <Icon
      w={"18px"}
      h={"18px"}
      ml={"10px"}
      onClick={toggleColorMode}
      as={colorMode === "dark" ? FaSun : FaMoon}
    />
  );
};
