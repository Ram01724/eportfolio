import { site } from "@/data/site";

export const metadata = {
  title: `About — ${site.name}`,
  description: `About ${site.name}, ${site.role}.`,
};

export default function AboutPage() {
  return (
    <section className="shell block">
      <div className="block-head">
        <p className="eyebrow">About me</p>
        <h2 style={{ fontSize: "var(--t-2xl)" }}>{site.name}</h2>
        <p>
          {site.role} · {site.school}
        </p>
      </div>

      <div className="about-grid">
        <div>
          {site.photo && (
            <img className="portrait" src={site.photo} alt={site.photoAlt || site.name} />
          )}
          {site.facts?.length > 0 && (
            <dl className="facts">
              {site.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        <div>
          <div className="prose">
            {site.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {site.skills?.length > 0 && (
            <>
              <h3 style={{ fontSize: "var(--t-lg)", marginTop: "2.25rem" }}>
                What I work with
              </h3>
              <div className="skill-grid">
                {site.skills.map((s) => (
                  <div className="skill-card" key={s.group}>
                    <h3>{s.group}</h3>
                    <p>{s.items.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
