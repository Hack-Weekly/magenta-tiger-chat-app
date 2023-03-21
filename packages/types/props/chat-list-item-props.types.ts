export interface StyleChatListItemProps {
  variant: 'chat' | 'invite' | 'edit';
  imageUrl: string | null;
  title: string;
  description: string;
  timestamp: number;
  isNotified: boolean;
  onClick: (event: React.MouseEvent<HTMLLIElement>) => void;
}
