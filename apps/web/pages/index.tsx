import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { Button, Input } from "ui/components";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button size="large" text="Buttontext" icon={faMobileAlt} onClick={(e) => console.log(e)}/>
      <Input type={"search"} />
    </div>
  );
}
