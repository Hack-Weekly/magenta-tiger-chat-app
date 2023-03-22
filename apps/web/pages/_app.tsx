import type { AppProps } from "next/app";
import GlobalStyle from "ui/components/globalStyle/GlobalStyling";
import { AuthProvider } from "../context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AuthProvider>
  );
}
