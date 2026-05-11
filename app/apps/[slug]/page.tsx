import Image from "next/image"
import { apps } from "../../../data/apps"
import styles from "./page.module.css"

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
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.notFoundTitle}>App not found</h1>
          <p className={styles.notFoundText}>
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
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>{app.name}</h1>

            <p className={styles.description}>{app.description}</p>

            <p className={styles.platform}>{app.platform}</p>
          </div>

          <span className={styles.badge}>{app.status}</span>
        </div>

        {app.heroImage && (
          <section className={styles.heroSection}>
            <div className={styles.heroFrame}>
              <Image
                src={app.heroImage}
                alt={`${app.name} preview`}
                fill
                priority
                sizes="(max-width: 767px) 100vw, 960px"
                style={{
                  objectFit: app.heroFit ?? "cover",
                  objectPosition: app.heroPosition ?? "center",
                }}
              />
            </div>
          </section>
        )}

        <section className={styles.metaCard}>
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
        </section>

        {hasLinks && (
          <section className={styles.linksCard}>
            <h2 className={styles.sectionTitle}>Links</h2>

            <div className={styles.linkRow}>
              {app.appStoreUrl && (
                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.primaryLink}
                >
                  App Store
                </a>
              )}

              {app.playStoreUrl && (
                <a
                  href={app.playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.primaryLink}
                >
                  Play Store
                </a>
              )}

              {app.githubUrl && (
                <a
                  href={app.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.secondaryLink}
                >
                  GitHub
                </a>
              )}

              {app.websiteUrl && (
                <a
                  href={app.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.secondaryLink}
                >
                  Website
                </a>
              )}
            </div>
          </section>
        )}

        <section className={styles.storyCard}>
          <h2 className={styles.sectionTitle}>About this app</h2>

          {hasStory ? (
            <div className={styles.storyGrid}>
              {app.summary && (
                <div>
                  <h3 className={styles.storyHeading}>Summary</h3>
                  <p className={styles.storyText}>{app.summary}</p>
                </div>
              )}

              {app.whatIBuilt && (
                <div>
                  <h3 className={styles.storyHeading}>What I built</h3>
                  <p className={styles.storyText}>{app.whatIBuilt}</p>
                </div>
              )}

              {app.whatILearned && (
                <div>
                  <h3 className={styles.storyHeading}>What I learned</h3>
                  <p className={styles.storyText}>{app.whatILearned}</p>
                </div>
              )}
            </div>
          ) : (
            <p className={styles.storyText}>
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
