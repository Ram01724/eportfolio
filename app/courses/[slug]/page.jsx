import Link from "next/link";
import { notFound } from "next/navigation";
import {
  courses,
  getCourse,
  TERM_ORDER,
  TERM_LABELS,
  TERM_BLURB,
  termFileCount,
} from "@/data/courses";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return { title: `${course.code} — ${course.title}`, description: course.summary };
}

export default async function CoursePage({ params }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <div className="shell">
      <div className="crumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/courses">Courses</Link>
        <span>/</span>
        <span>{course.code}</span>
      </div>

      <section className="block">
        <div className="block-head">
          <span className="card-code">{course.code}</span>
          <h2 style={{ fontSize: "var(--t-2xl)" }}>{course.title}</h2>
          <p>{course.instructor}</p>
        </div>

        <p className="prose" style={{ marginBottom: "2.25rem" }}>
          {course.summary}
        </p>

        <div className="term-grid">
          {TERM_ORDER.map((key) => {
            const t = course.terms[key] || {};
            const n = termFileCount(t);
            return (
              <Link className="term-card" href={`/courses/${course.slug}/${key}`} key={key}>
                <h3>{TERM_LABELS[key]}</h3>
                <p>{TERM_BLURB[key]}</p>
                <span className="pill" data-status={t.status}>
                  {t.status !== "done"
                    ? "Not yet published"
                    : n === 0
                    ? "Published"
                    : `Published · ${n} ${n === 1 ? "file" : "files"}`}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
