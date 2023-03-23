export interface InputProps {
  variant: 'search' | 'send' | 'user' | 'password' | 'email';
  width?: '100%' | '20rem' | '15rem' | '10rem';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: boolean;
}
