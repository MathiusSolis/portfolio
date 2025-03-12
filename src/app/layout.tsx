import type { Metadata } from "next";
import '../assets/global-styles/globals.css';

export const metadata: Metadata = {
  title: "Mathius Solis",
  description: "¡Hola!, soy desarrollador de software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
