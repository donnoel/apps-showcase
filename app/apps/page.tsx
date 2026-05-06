import { apps } from "../../data/apps"

function parseCreatedOn(value: string): number {
  const [month, day, year] = value.split("/").map(Number)
  const fullYear = year < 100 ? 2000 + year : year
  return new Date(fullYear, month - 1, day).getTime()
}

const sortedApps = [...apps].sort(
  (a, b) => parseCreatedOn(b.createdOn) - parseCreatedOn(a.createdOn)
)

export default function AppsPage() {
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
        <h1
          style={{
            fontSize: "48px",
            lineHeight: 1.1,
            margin: "0 0 12px 0",
          }}
        >
          Apps
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.6,
            color: "#444",
            marginBottom: "40px",
            maxWidth: "700px",
          }}
        >
          A collection of apps I’ve built across Apple platforms and Android,
          with a focus on thoughtful UI, calm experiences, and steady iteration.
        </p>

        <div
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          {sortedApps.map((app) => (
            <a
              key={app.slug}
              href={`/apps/${app.slug}`}
              style={{
                display: "block",
                padding: "24px",
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
                  marginBottom: "16px",
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "28px",
                      margin: "0 0 8px 0",
                    }}
                  >
                    {app.name}
                  </h2>

                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: 1.6,
                      color: "#444",
                      margin: "0 0 12px 0",
                      maxWidth: "700px",
                    }}
                  >
                    {app.description}
                  </p>

                  <p
                    style={{
                      fontSize: "14px",
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
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "12px",
                  paddingTop: "16px",
                  borderTop: "1px solid #ecece7",
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
                      fontSize: "15px",
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
                      fontSize: "15px",
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
                      fontSize: "15px",
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
                      fontSize: "15px",
                      color: "#333",
                      margin: 0,
                    }}
                  >
                    {app.notes || "—"}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}