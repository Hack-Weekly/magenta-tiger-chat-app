import { Button, Input, StyleChatListItem, StyledHeader } from 'ui';

export default function Docs() {
  return (
    <div>
      <h1>Docs +</h1>
      <StyledHeader
        variant="welcome"
        title="Test"
        userName="Magenta"
        imageUrl={null}
      />
      <Button />
      <Input type="search" />
      <StyleChatListItem
        variant="chat"
        title="#magenta-tiger-chat"
        description=""
        imageUrl={null}
      />
    </div>
  );
}
