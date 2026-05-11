import type { Metadata } from "next"
import "./globals.css"
import styles from "./layout.module.css"

export const metadata: Metadata = {
  title: "Don Builds",
  description: "A showcase of apps built across Apple platforms and Android.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <a href="/" className={styles.brand}>
              Don Builds
            </a>

            <nav className={styles.nav}>
              <a href="/" className={styles.navLink}>
                Home
              </a>
              <a href="/apps" className={styles.navLink}>
                Apps
              </a>
              <a
                href="https://github.com/donnoel"
                target="_blank"
                rel="noreferrer"
                className={styles.navLink}
              >
                GitHub
              </a>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  )
}
