import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MyMenu = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} aria-label="Menu" icon={<HamburgerIcon />} />
      <MenuList>
        <MenuItem>
          <Link to="/all-twoshots">ALL TWOSHOTs</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MyMenu;
