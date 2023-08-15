export interface IProps {
  onClick: () => void;
  animate: MenuMode;
}

export type MenuMode =
  | "x-enter"
  | "x-leave"
  | "hamburger-enter"
  | "hamburger-leave";

export type SideNavProps = {
  onClose: () => void;
  animate: MenuMode;
};
