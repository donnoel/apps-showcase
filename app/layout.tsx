import type { Metadata } from "next"

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
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f7f7f5",
          color: "#1a1a1a",
        }}
      >
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            backgroundColor: "rgba(247, 247, 245, 0.92)",
            borderBottom: "1px solid #e7e7e2",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            style={{
              maxWidth: "960px",
              margin: "0 auto",
              padding: "18px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "#1a1a1a",
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "0.02em",
              }}
            >
              Don Builds
            </a>

            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "#444",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                Home
              </a>

              <a
                href="/apps"
                style={{
                  textDecoration: "none",
                  color: "#444",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                Apps
              </a>

              <a
                href="https://github.com/donnoel"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#444",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
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