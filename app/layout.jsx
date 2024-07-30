import Logo from "./components/Logo";
import Navigation from "./components/Navigation";


export const metadata = {
  title: "The Wild Oasis",
  description: "Title of the app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        
        <main>
          {children}
        </main>

        </body>
    </html>
  );
}
