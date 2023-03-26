import type { AppProps } from "next/app";
import GlobalStyle from "ui/components/global-styles/GlobalStyle";
import { initiateSocket } from "../components/socket";
import { AuthProvider } from "../context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  initiateSocket();

  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
