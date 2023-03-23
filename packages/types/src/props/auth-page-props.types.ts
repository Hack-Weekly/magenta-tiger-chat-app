export type AuthPageProps = {
  variant: 'login' | 'signup';
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};
