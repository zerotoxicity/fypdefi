import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { useContext } from "react";
import AuthContext from "store/auth-context";
import LogOutMenuItem from "./CustomMenuItems/LogoutMenuItem";
import ProfileIcon from "./ProfileIcon";

const ProfileMenu = () => {
  const authContext = useContext(AuthContext);

  const logoutHandler = () => {
    authContext.logout();
  };
  return (
    <Flex alignItems={"center"}>
      <Menu>
        <MenuButton>
          <ProfileIcon />
        </MenuButton>

        <MenuList>
          <MenuItem onClick={logoutHandler}>
            <LogOutMenuItem />
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default ProfileMenu;
