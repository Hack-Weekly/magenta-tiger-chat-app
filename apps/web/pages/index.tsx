import { Button, Input, StyleChatListItem, StyledHeader } from 'ui/components';

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <StyledHeader title="Test" userName="Magenta" imageUrl={null} />
      <Button />
      <Input type={'search'} />
      <StyleChatListItem
        variant="chat"
        title="#magenta-tiger-chat"
        description=""
        imageUrl={null}
      />
    </div>
  );
}
