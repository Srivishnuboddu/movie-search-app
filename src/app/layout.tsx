import "./globals.css";
import { StoreProvider } from "@/providers/StoreProvider";

export const metadata = {
  title: "Movie Search App",
  description: "Find movies with OMDB API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
