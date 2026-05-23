import { apps } from "../../data/apps"
import styles from "./page.module.css"

const sortedApps = [...apps].sort(
  (a, b) => b.projectNumber - a.projectNumber
)

export default function AppsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Apps</h1>

        <p className={styles.intro}>
          A collection of apps I’ve built across Apple platforms, Android, and
          the web, with a focus on thoughtful UI, calm experiences, and steady
          iteration.
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
                  <p className={styles.projectLabel}>
                    Project {app.projectNumber} · {app.projectName}
                  </p>
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
                  <p className={styles.metaLabel}>Audience</p>
                  <p className={styles.metaValue}>{app.audience}</p>
                </div>

                <div>
                  <p className={styles.metaLabel}>Location</p>
                  <p className={styles.metaValue}>
                    {app.location || "Not listed"}
                  </p>
                </div>

                <div>
                  <p className={styles.metaLabel}>Roadmap</p>
                  <p className={styles.metaValue}>{app.roadmap || "—"}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
