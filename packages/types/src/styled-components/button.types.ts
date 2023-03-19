import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Size } from "../shared/size.types";

export type ButtonTheme = "primary" | "dim" | "icon" | "navIcon";

export type ButtonProps = {
  text: string;
  variant?: ButtonTheme;
  icon?: IconProp;
  danger?: boolean;
  disabled?: boolean;
  active?: boolean;
  size?: Size;
  onClick?: (event: MouseEvent) => void;
};

export type StyledButtonProps = {
  variant?: ButtonTheme;
  danger?: boolean;
  disabled?: boolean;
  active?: boolean;
  size?: Size;
};

export type StyledIconProps = {
  active: boolean;
  danger: boolean;
  size: Size;
};
