export type ChatPreviewProps = {
  variant: "chat" | "invite" | "edit" | "user-list";
  imageUrl: string | null;
  title: string;
  description: string;
  timestamp: number;
  isNotified: boolean;
  onClick: (event: React.MouseEvent<HTMLLIElement | HTMLButtonElement>) => void;
};
