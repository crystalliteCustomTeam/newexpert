// Fonts
import {fontMono, fontSans} from "./fonts";
// Global Css
import "./globals.css";

import {cn} from "@/lib/utils";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("font-sans", fontSans.variable,fontMono.variable)}>{children}</body>
    </html>
  );
}
