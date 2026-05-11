import { apps } from "../../data/apps"
import styles from "./page.module.css"

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
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Apps</h1>

        <p className={styles.intro}>
          A collection of apps I’ve built across Apple platforms and Android,
          with a focus on thoughtful UI, calm experiences, and steady iteration.
        </p>

        <div className={styles.grid}>
          {sortedApps.map((app) => (
            <a
              key={app.slug}
              href={`/apps/${app.slug}`}
              className={styles.card}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardHeaderText}>
                  <h2 className={styles.cardTitle}>{app.name}</h2>
                  <p className={styles.cardDescription}>{app.description}</p>
                  <p className={styles.platform}>{app.platform}</p>
                </div>

                <span className={styles.badge}>{app.status}</span>
              </div>

              <div className={styles.metaGrid}>
                <div>
                  <p className={styles.metaLabel}>Version</p>
                  <p className={styles.metaValue}>{app.version}</p>
                </div>

                <div>
                  <p className={styles.metaLabel}>Created</p>
                  <p className={styles.metaValue}>{app.createdOn}</p>
                </div>

                <div>
                  <p className={styles.metaLabel}>Location</p>
                  <p className={styles.metaValue}>
                    {app.location || "Not listed"}
                  </p>
                </div>

                <div>
                  <p className={styles.metaLabel}>Notes</p>
                  <p className={styles.metaValue}>{app.notes || "—"}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
