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
  const isExpectations = term === "expectations";

  return (
    <div className="shell">
      <div className="crumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/courses">Courses</Link>
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

        <div className="prose">
          {(data.reflection || []).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
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

        {!isExpectations && (
          <>
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
          </>
        )}

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
