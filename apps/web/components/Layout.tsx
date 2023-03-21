import { ChildrenProps } from "../../../packages/types/src/props/children.types";

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
