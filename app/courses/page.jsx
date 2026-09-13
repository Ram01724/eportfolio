import Link from "next/link";
import { site } from "@/data/site";
import { courses, getCourse, TERM_ORDER, totalFiles, courseFileCount } from "@/data/courses";

export default function HomePage() {
  const published = courses.reduce(
    (n, c) => n + TERM_ORDER.filter((t) => c.terms[t]?.status === "done").length,
    0
  );

  const expectations = getCourse("itc-c508")?.terms?.expectations;

  return (
    <>
      <div className="shell">
        <section className="banner">
          {site.cover && (
            <div className="banner-bg" style={{ backgroundImage: `url(${site.cover})` }} />
          )}
          <div className="banner-inner">
            <h1>Welcome</h1>
            <p className="banner-tagline">{site.tagline}</p>
            <p className="banner-role">{site.role} · {site.school}</p>
            <div className="cta-row">
              <Link className="btn btn-solid" href="/courses/itc-c508">Browse my coursework</Link>
              <a className="btn" href="#course-expectations">Course Expectations</a>
              <Link className="btn" href="/about">About me</Link>
            </div>
          </div>
        </section>

        <dl className="stats">
          <div className="stat"><dt>Terms published</dt><dd>{published} / {courses.length * 4}</dd></div>
          <div className="stat"><dt>Files uploaded</dt><dd>{totalFiles()}</dd></div>
          <div className="stat"><dt>Year and section</dt><dd>402i</dd></div>
        </dl>
      </div>

      <section className="shell block">
        <div className="block-head">
          <h2>My courses</h2>
          <p>Four parts: expectations, prelim, midterm and final term.</p>
        </div>
        <div className="card-grid">
          {courses.map((c) => {
            const done = TERM_ORDER.filter((t) => c.terms[t]?.status === "done").length;
            return (
              <Link className="card" href={`/courses/${c.slug}`} key={c.slug}>
                <span className="card-code">{c.code}</span>
                <h3>{c.title}</h3>
                <p>{c.summary}</p>
                <div className="card-foot">
                  {done} of 4 terms published · {courseFileCount(c)} files
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="shell block" id="course-expectations">
        <div className="block-head">
          <h2>Course Expectations</h2>
          <p>ITC C508 — my responses to the required readings and what I want from this course.</p>
        </div>

        {(expectations?.sections || []).map((s, i) => (
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
      </section>
    </>
  );
}