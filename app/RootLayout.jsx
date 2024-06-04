import { Header } from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { jetbrainsMOno } from "./layout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMOno.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
