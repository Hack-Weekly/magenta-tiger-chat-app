import { Button, Input } from "ui/components"

export default function Web() {
    return (
        <div>
            <h1>Web</h1>
            <Button />
            <Input typeOfInput={"edit"} border={false} width={"100%"} />
        </div>
    )
}
