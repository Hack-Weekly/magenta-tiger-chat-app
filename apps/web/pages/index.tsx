import { Button, Input } from "ui/components"

export default function Web() {
    return (
        <div>
            <h1>Web</h1>
            <Button />
            <Input typeOfInput={"email"} border={true} width={"15rem"} />
        </div>
    )
}
