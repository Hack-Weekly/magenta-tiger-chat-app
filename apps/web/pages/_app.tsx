import type { AppProps } from "next/app";
import GlobalStyle from "ui/components/global-styles/GlobalStyle";
import { AuthProvider } from "../context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
