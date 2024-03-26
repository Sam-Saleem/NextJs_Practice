import { Html, Head, Main, NextScript } from "next/document";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function Document() {
  return (
    <Html lang="en" className="overflow-x-hidden">
      <Head />
      <body>
        {/* <ThemeProvider theme={baselightTheme}> */}
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        {/* <CssBaseline /> */}
        <Main />
        <NextScript />
        {/* </ThemeProvider> */}
      </body>
    </Html>
  );
}
