import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Repo",
  description: "Valkey issue repo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
