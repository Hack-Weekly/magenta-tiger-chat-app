export interface StyledHeaderProps {
  variant?: 'default' | 'welcome' | 'account';
  title: string;
  description?: string;
  imageUrl?: string | null;
  userName: string;
}
