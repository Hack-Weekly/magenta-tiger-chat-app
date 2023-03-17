import { Button, Input, List } from 'ui';

export default function Docs() {
  return (
    <div>
      <h1>Docs +</h1>
      <Button />
      <Input type="search" />
      <List
        type="chat"
        title="#magenta-tiger-chat"
        description=""
        imageUrl={null}
      />
    </div>
  );
}
