import Image from "next/image"
import { apps } from "../data/apps"

const featuredSlugs = [
  "coloring-room",
  "glow-daily-practice",
  "easy-units",
]

const featuredApps = featuredSlugs
  .map((slug) => apps.find((app) => app.slug === slug))
  .filter(Boolean)

const previewPanelTints: Record<string, string> = {
  "glow-daily-practice":
    "linear-gradient(180deg, #f7faf5 0%, #edf3ec 100%)",
  "coloring-room":
    "linear-gradient(180deg, #eef9f7 0%, #e4f1ef 100%)",
  "easy-units":
    "linear-gradient(180deg, #f6f5fc 0%, #edf1f8 100%)",
}

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
                key={app!.slug}
                href={`/apps/${app!.slug}`}
                style={{
                  display: "block",
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e5e0",
                  borderRadius: "20px",
                  textDecoration: "none",
                  color: "inherit",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "260px 1fr",
                    alignItems: "stretch",
                  }}
                >
                  <div
                    style={{
                      padding: "12px",
                      background:
                        previewPanelTints[app!.slug] ??
                        "linear-gradient(180deg, #fbfbf8 0%, #f3f3ef 100%)",
                      borderRight: "1px solid #ecece7",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "190px",
                        borderRadius: "16px",
                        overflow: "hidden",
                        backgroundColor: "#ffffff",
                        boxShadow:
                          "0 1px 2px rgba(0,0,0,0.04), 0 12px 28px rgba(0,0,0,0.07)",
                        border: "1px solid #ecece7",
                      }}
                    >
                      {app!.heroImage ? (
                        <Image
                          src={app!.heroImage}
                          alt={`${app!.name} preview`}
                          fill
                          sizes="260px"
                          style={{
                            objectFit: "contain",
                            objectPosition: "center",
                            padding: "4px",
                          }}
                        />
                      ) : null}
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "22px 24px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr auto",
                        alignItems: "start",
                        gap: "16px",
                        marginBottom: "12px",
                      }}
                    >
                      <div style={{ minWidth: 0 }}>
                        <h3
                          style={{
                            fontSize: "28px",
                            margin: "0 0 8px 0",
                          }}
                        >
                          {app!.name}
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
                          {app!.description}
                        </p>
                      </div>

                      <div
                        style={{
                          width: "88px",
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            padding: "8px 12px",
                            borderRadius: "999px",
                            backgroundColor: "#f1f1ee",
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#333",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {app!.status}
                        </span>
                      </div>
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
                        {app!.platform} • {app!.location || "Not listed"}
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
                  </div>
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
