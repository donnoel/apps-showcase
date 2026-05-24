import Image from "next/image"
import { apps } from "../data/apps"
import styles from "./page.module.css"

const featuredApps = [...apps]
  .sort((a, b) => b.projectNumber - a.projectNumber)
  .slice(0, 3)

const previewPanelTints: Record<string, string> = {
  "glow-daily-practice":
    "linear-gradient(180deg, #f7faf5 0%, #edf3ec 100%)",
  "coloring-room":
    "linear-gradient(180deg, #eef9f7 0%, #e4f1ef 100%)",
  "easy-units":
    "linear-gradient(180deg, #f6f5fc 0%, #edf1f8 100%)",
}

const thumbnailPositions: Record<string, string> = {
  "coloring-room": "center center",
  "glow-daily-practice": "center top",
  "easy-units": "center top",
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>
            Apps I’ve built across Apple, Android, and the web.
          </h1>

          <p className={styles.heroText}>
            A simple showcase of the apps I’ve designed and shipped, with a focus
            on thoughtful UI, calm experiences, and steady iteration.
          </p>

          <div className={styles.heroActions}>
            <a href="/apps" className={styles.primaryButton}>
              View Apps
            </a>

            <a
              href="https://github.com/donnoel"
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryButton}
            >
              GitHub
            </a>
          </div>
        </section>

        <section className={styles.featuredSection}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Latest Projects</p>
              <h2 className={styles.sectionTitle}>
                The newest work in the collection
              </h2>
            </div>

            <a href="/apps" className={styles.sectionLink}>
              See all apps →
            </a>
          </div>

          <div className={styles.featuredGrid}>
            {featuredApps.map((app) => (
              <a
                key={app.slug}
                href={`/apps/${app.slug}`}
                className={styles.featuredCard}
              >
                <div className={styles.featuredCardInner}>
                  <div
                    className={styles.previewPanel}
                    style={{
                      background:
                        previewPanelTints[app.slug] ??
                        "linear-gradient(180deg, #fbfbf8 0%, #f3f3ef 100%)",
                    }}
                  >
                    <div className={styles.previewFrame}>
                      {app.heroImage ? (
                        <Image
                          src={app.heroImage}
                          alt={`${app.name} preview`}
                          fill
                          sizes="(max-width: 767px) 100vw, 260px"
                          style={{
                            objectFit: "cover",
                            objectPosition:
                              thumbnailPositions[app.slug] ?? "center center",
                          }}
                        />
                      ) : null}
                    </div>
                  </div>

                  <div className={styles.featuredContent}>
                    <div className={styles.featuredTop}>
                      <div className={styles.featuredTextBlock}>
                        <h3 className={styles.cardTitle}>{app.name}</h3>
                        <p className={styles.cardDescription}>
                          {app.description}
                        </p>
                      </div>

                      <div className={styles.badgeLane}>
                        <span className={styles.badge}>{app.status}</span>
                      </div>
                    </div>

                    <div className={styles.featuredBottom}>
                      <p className={styles.cardMeta}>
                        {app.platform} • {app.location || "Not listed"}
                      </p>

                      <span className={styles.cardCta}>View project →</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.aboutCard}>
          <p className={styles.eyebrow}>About Don</p>

          <h2 className={styles.sectionTitle}>
            Learning by building and shipping real products
          </h2>

          <p className={styles.aboutText}>
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
