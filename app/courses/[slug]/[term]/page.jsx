import Link from "next/link";
import { notFound } from "next/navigation";
import {
  courses,
  getCourse,
  TERM_ORDER,
  TERM_LABELS,
  TERM_BLURB,
} from "@/data/courses";
import FileRow from "@/components/FileRow";

export function generateStaticParams() {
  return courses.flatMap((c) => TERM_ORDER.map((term) => ({ slug: c.slug, term })));
}

export async function generateMetadata({ params }) {
  const { slug, term } = await params;
  const course = getCourse(slug);
  if (!course || !TERM_ORDER.includes(term)) return {};
  return {
    title: `${TERM_LABELS[term]} — ${course.code}`,
    description: `${TERM_LABELS[term]} output for ${course.title}.`,
  };
}

function Reflection({ items, heading }) {
  if (!items) return null;
  const list = Array.isArray(items) ? items : [items];
  if (list.length === 0) return null;
  return (
    <details className="reflect">
      <summary className="reflect-summary">
        <span className="week-chevron" aria-hidden="true">›</span>
        <span className="reflect-title">{heading}</span>
        <span className="reflect-meta">
          {list.length} {list.length === 1 ? "paragraph" : "paragraphs"}
        </span>
      </summary>
      <div className="reflect-body">
        {list.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </details>
  );
}

function WeekGroup({ group }) {
  const files = group.files || [];
  return (
    <details className="week">
      <summary className="week-summary">
        <span className="week-chevron" aria-hidden="true">›</span>
        <span className="week-title">{group.title}</span>
        <span className="week-meta">
          {group.blurb ? `${group.blurb} · ` : ""}
          {files.length} {files.length === 1 ? "file" : "files"}
        </span>
      </summary>
      <div className="week-body">
        <Reflection items={group.learned} heading="What I learned this week" />
        {files.map((f) => (
          <FileRow key={f.name} file={f} />
        ))}
      </div>
    </details>
  );
}

function FileGroup({ title, blurb, items }) {
  if (!items || items.length === 0) return null;
  return (
    <section style={{ marginTop: "2.5rem" }}>
      <div className="block-head" style={{ marginBottom: "1.1rem" }}>
        <h3 style={{ fontSize: "var(--t-lg)" }}>{title}</h3>
        <p>{blurb}</p>
      </div>
      {items.map((f) => (
        <FileRow key={f.name} file={f} />
      ))}
    </section>
  );
}

export default async function TermPage({ params }) {
  const { slug, term } = await params;
  const course = getCourse(slug);
  if (!course || !TERM_ORDER.includes(term)) notFound();

  const data = course.terms[term] || {};
  const index = TERM_ORDER.indexOf(term);
  const prev = index > 0 ? TERM_ORDER[index - 1] : null;
  const next = index < TERM_ORDER.length - 1 ? TERM_ORDER[index + 1] : null;
  const groups = data.groups || [];

  return (
    <div className="shell">
      <div className="crumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href={`/courses/${course.slug}`}>{course.code}</Link>
        <span>/</span>
        <span>{TERM_LABELS[term]}</span>
      </div>

      <section className="block">
        <div className="block-head">
          <p className="eyebrow">{course.title}</p>
          <h2 style={{ fontSize: "var(--t-2xl)" }}>{data.heading || TERM_LABELS[term]}</h2>
          <p>{TERM_BLURB[term]}</p>
        </div>

        <Reflection items={data.reflection} heading="My reflection on this term" />

        {(data.sections || []).map((s, i) => (
          <section className="section-box" key={i}>
            <span className="section-letter">{String.fromCharCode(65 + i)}</span>
            <h3>{s.title}</h3>
            <div className="prose">
              {s.body.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </section>
        ))}

        {groups.length > 0 && (
          <section style={{ marginTop: "2.5rem" }}>
            <div className="block-head" style={{ marginBottom: "1.1rem" }}>
              <h3 style={{ fontSize: "var(--t-lg)" }}>Weekly activities</h3>
              <p>Click a week to open its files and my reflection for that week.</p>
            </div>
            {groups.map((g, i) => (
              <WeekGroup key={i} group={g} />
            ))}
          </section>
        )}

        <FileGroup
          title="Activities"
          blurb="Exercises, labs, reviewers and seatwork for this term."
          items={data.activities || []}
        />
        <FileGroup
          title="Project"
          blurb="The main graded output for this term."
          items={data.projects || []}
        />

        <div className="cta-row" style={{ marginTop: "3rem" }}>
          {prev && (
            <Link className="btn" href={`/courses/${course.slug}/${prev}`}>
              Back to {TERM_LABELS[prev]}
            </Link>
          )}
          {next && (
            <Link className="btn btn-solid" href={`/courses/${course.slug}/${next}`}>
              Next: {TERM_LABELS[next]}
            </Link>
          )}
          <Link className="btn" href={`/courses/${course.slug}`}>
            All terms
          </Link>
        </div>
      </section>
    </div>
  );
}