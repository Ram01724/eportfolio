import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell block">
      <div className="block-head">
        <h2 style={{ fontSize: "var(--t-2xl)" }}>Welcome</h2>
        <p>This portfolio collects my ITC C508 output term by term. Open a term to see the activities, the project, and every file behind them.</p>
        

      </div>
      <div className="cta-row">
        <Link className="btn btn-solid" href="/courses">Go to courses</Link>
        <Link className="btn" href="/">Home</Link>
      </div>
    </section>
  );
}
