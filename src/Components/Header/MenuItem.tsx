import { View, Menu, MenuButton, MenuItem, Divider } from "@aws-amplify/ui-react";
import { FcSpeaker } from "react-icons/fc";
import { IconType } from "react-icons/lib";
interface Iprops {
    icon: IconType
    children: React.ReactNode
}

export const MenuItemsExample: React.FC<Iprops> = (props:Iprops) => {
    return (
      <View width="4rem">
        <Menu
      trigger={
        <MenuButton size='small'>
          {<props.icon/>}
        </MenuButton>
      }
    >
          {props.children}
        </Menu>
      </View>
    );
  };
  