export type HeaderProps = {
  variant?: 'default' | 'welcome' | 'account';
  title: string;
  description?: string;
  imageUrl?: string | null;
  userName: string;
};
