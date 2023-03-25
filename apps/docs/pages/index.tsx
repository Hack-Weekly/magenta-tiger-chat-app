import { Button, Input, StyleChatListItem, Header } from 'ui';

export default function Docs() {
  return (
    <div>
      <h1>Docs +</h1>
      <Header
        variant="welcome"
        title="Test"
        userName="Magenta"
        imageUrl={null}
      />
      <Button />
      <Input variant="search" />
      <StyleChatListItem
        variant="chat"
        title="#magenta-tiger-chat"
        description=""
        imageUrl={null}
      />
    </div>
  );
}
