import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LMS-Application",
  description: "LMS-Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" flex items-center justify-center">{children}</body>
    </html>
  );
}
