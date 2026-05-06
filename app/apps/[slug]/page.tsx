import { apps } from "../../../data/apps"

type AppDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function AppDetailPage({ params }: AppDetailPageProps) {
  const { slug } = await params
  const app = apps.find((entry) => entry.slug === slug)

  if (!app) {
    return (
      <main
        style={{
          minHeight: "100vh",
          padding: "56px 24px",
          backgroundColor: "#f7f7f5",
          color: "#1a1a1a",
        }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "48px",
              lineHeight: 1.1,
              margin: "0 0 12px 0",
            }}
          >
            App not found
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.6,
              color: "#444",
              margin: 0,
            }}
          >
            The app you’re looking for doesn’t exist.
          </p>
        </div>
      </main>
    )
  }

  const hasLinks =
    Boolean(app.appStoreUrl) ||
    Boolean(app.playStoreUrl) ||
    Boolean(app.githubUrl) ||
    Boolean(app.websiteUrl)

  const hasStory =
    Boolean(app.summary) ||
    Boolean(app.whatIBuilt) ||
    Boolean(app.whatILearned)

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "56px 24px",
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "56px",
                lineHeight: 1.05,
                margin: "0 0 12px 0",
              }}
            >
              {app.name}
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.6,
                color: "#444",
                margin: "0 0 12px 0",
                maxWidth: "720px",
              }}
            >
              {app.description}
            </p>

            <p
              style={{
                fontSize: "16px",
                color: "#666",
                margin: 0,
              }}
            >
              {app.platform}
            </p>
          </div>

          <span
            style={{
              display: "inline-block",
              padding: "10px 14px",
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

        <section
          style={{
            padding: "24px",
            backgroundColor: "#ffffff",
            border: "1px solid #e5e5e0",
            borderRadius: "20px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#777",
                  margin: "0 0 4px 0",
                }}
              >
                Version
              </p>
              <p
                style={{
                  fontSize: "18px",
                  color: "#333",
                  margin: 0,
                }}
              >
                {app.version}
              </p>
            </div>

            <div>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#777",
                  margin: "0 0 4px 0",
                }}
              >
                Created
              </p>
              <p
                style={{
                  fontSize: "18px",
                  color: "#333",
                  margin: 0,
                }}
              >
                {app.createdOn}
              </p>
            </div>

            <div>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#777",
                  margin: "0 0 4px 0",
                }}
              >
                Location
              </p>
              <p
                style={{
                  fontSize: "18px",
                  color: "#333",
                  margin: 0,
                }}
              >
                {app.location || "Not listed"}
              </p>
            </div>

            <div>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#777",
                  margin: "0 0 4px 0",
                }}
              >
                Notes
              </p>
              <p
                style={{
                  fontSize: "18px",
                  color: "#333",
                  margin: 0,
                }}
              >
                {app.notes || "—"}
              </p>
            </div>
          </div>
        </section>

        {hasLinks && (
          <section
            style={{
              padding: "24px",
              backgroundColor: "#ffffff",
              border: "1px solid #e5e5e0",
              borderRadius: "20px",
              marginBottom: "24px",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                margin: "0 0 16px 0",
              }}
            >
              Links
            </h2>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              {app.appStoreUrl && (
                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "12px 16px",
                    backgroundColor: "#111",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "999px",
                    fontWeight: 600,
                  }}
                >
                  App Store
                </a>
              )}

              {app.playStoreUrl && (
                <a
                  href={app.playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "12px 16px",
                    backgroundColor: "#111",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "999px",
                    fontWeight: 600,
                  }}
                >
                  Play Store
                </a>
              )}

              {app.githubUrl && (
                <a
                  href={app.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "12px 16px",
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
              )}

              {app.websiteUrl && (
                <a
                  href={app.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "12px 16px",
                    border: "1px solid #ccc",
                    color: "#111",
                    textDecoration: "none",
                    borderRadius: "999px",
                    fontWeight: 600,
                    backgroundColor: "#fff",
                  }}
                >
                  Website
                </a>
              )}
            </div>
          </section>
        )}

        <section
          style={{
            padding: "24px",
            backgroundColor: "#ffffff",
            border: "1px solid #e5e5e0",
            borderRadius: "20px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              margin: "0 0 16px 0",
            }}
          >
            About this app
          </h2>

          {hasStory ? (
            <div
              style={{
                display: "grid",
                gap: "20px",
              }}
            >
              {app.summary && (
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      margin: "0 0 8px 0",
                    }}
                  >
                    Summary
                  </h3>

                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: 1.7,
                      color: "#444",
                      margin: 0,
                    }}
                  >
                    {app.summary}
                  </p>
                </div>
              )}

              {app.whatIBuilt && (
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      margin: "0 0 8px 0",
                    }}
                  >
                    What I built
                  </h3>

                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: 1.7,
                      color: "#444",
                      margin: 0,
                    }}
                  >
                    {app.whatIBuilt}
                  </p>
                </div>
              )}

              {app.whatILearned && (
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      margin: "0 0 8px 0",
                    }}
                  >
                    What I learned
                  </h3>

                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: 1.7,
                      color: "#444",
                      margin: 0,
                    }}
                  >
                    {app.whatILearned}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.7,
                color: "#444",
                margin: 0,
              }}
            >
              This project is part of a broader collection of apps I’ve built
              while learning through shipping, refining interfaces, and turning
              ideas into real products.
            </p>
          )}
        </section>
      </div>
    </main>
  )
}