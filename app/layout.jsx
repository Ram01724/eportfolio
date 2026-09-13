import "./globals.css";
import Nav from "@/components/Nav";
import { site } from "@/data/site";

export const metadata = {
  title: `${site.name} — ePortfolio`,
  description: `Coursework ePortfolio of ${site.name}, ${site.role}, ${site.school}.`,
  openGraph: {
    title: `${site.name} — ePortfolio`,
    description: `Coursework ePortfolio: ${site.role}, ${site.school}.`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

const themeScript = `document.documentElement.setAttribute('data-theme','dark');`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <footer className="footer">
          <div className="shell footer-inner">
            <div>
              {site.links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
            <div>
              {site.shortName} · {site.location}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
