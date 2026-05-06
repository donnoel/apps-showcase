import { apps } from "../data/apps"

const featuredSlugs = [
  "glow-daily-practice",
  "coloring-room",
  "easy-units",
]

const featuredApps = apps.filter((app) => featuredSlugs.includes(app.slug))

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "56px 24px 72px",
        backgroundColor: "#f7f7f5",
        color: "#1a1a1a",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        <section
          style={{
            marginBottom: "56px",
          }}
        >
          <h1
            style={{
              fontSize: "56px",
              lineHeight: 1.05,
              margin: "0 0 20px 0",
              maxWidth: "900px",
            }}
          >
            Apps I’ve built across Apple, Android, and the web.
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.6,
              maxWidth: "720px",
              color: "#444",
              marginBottom: "32px",
            }}
          >
            A simple showcase of the apps I’ve designed and shipped, with a focus
            on thoughtful UI, calm experiences, and steady iteration.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/apps"
              style={{
                display: "inline-block",
                padding: "14px 20px",
                backgroundColor: "#111",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "999px",
                fontWeight: 600,
              }}
            >
              View Apps
            </a>

            <a
              href="https://github.com/donnoel"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                padding: "14px 20px",
                border: "1px solid #ccc",
                color: "#111",
                textDecoration: "none",
                borderRadius: "999px",
                fontWeight: 600,
                backgroundColor: "#fff",
              }}
            >
              GitHub
            </a>
          </div>
        </section>

        <section
          style={{
            marginBottom: "56px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "24px",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#777",
                  margin: "0 0 8px 0",
                }}
              >
                Featured Apps
              </p>

              <h2
                style={{
                  fontSize: "34px",
                  lineHeight: 1.15,
                  margin: 0,
                }}
              >
                A few projects from the collection
              </h2>
            </div>

            <a
              href="/apps"
              style={{
                textDecoration: "none",
                color: "#444",
                fontWeight: 600,
              }}
            >
              See all apps →
            </a>
          </div>

          <div
            style={{
              display: "grid",
              gap: "16px",
            }}
          >
            {featuredApps.map((app) => (
              <a
                key={app.slug}
                href={`/apps/${app.slug}`}
                style={{
                  display: "block",
                  padding: "22px 24px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e5e0",
                  borderRadius: "20px",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "16px",
                    flexWrap: "wrap",
                    marginBottom: "12px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "28px",
                        margin: "0 0 8px 0",
                      }}
                    >
                      {app.name}
                    </h3>

                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: 1.6,
                        color: "#444",
                        margin: 0,
                        maxWidth: "700px",
                      }}
                    >
                      {app.description}
                    </p>
                  </div>

                  <span
                    style={{
                      display: "inline-block",
                      padding: "8px 12px",
                      borderRadius: "999px",
                      backgroundColor: "#f1f1ee",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#333",
                    }}
                  >
                    {app.status}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "12px",
                    flexWrap: "wrap",
                    paddingTop: "14px",
                    borderTop: "1px solid #ecece7",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      margin: 0,
                    }}
                  >
                    {app.platform} • {app.location || "Not listed"}
                  </p>

                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#444",
                    }}
                  >
                    View project →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section
          style={{
            padding: "28px",
            backgroundColor: "#ffffff",
            border: "1px solid #e5e5e0",
            borderRadius: "20px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#777",
              margin: "0 0 10px 0",
            }}
          >
            About Don
          </p>

          <h2
            style={{
              fontSize: "34px",
              lineHeight: 1.15,
              margin: "0 0 16px 0",
            }}
          >
            Learning by building and shipping real products
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#444",
              margin: 0,
              maxWidth: "760px",
            }}
          >
            I’m an independent developer building apps across Apple platforms,
            Android, and now the web. I like calm interfaces, practical tools,
            and learning by shipping real products instead of waiting for perfect.
            This site is a simple home for the projects I’ve made and the ones
            still taking shape.
          </p>
        </section>
      </div>
    </main>
  )
}
