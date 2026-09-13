"use client";

import { useState } from "react";

const KIND_LABEL = {
  pdf: "PDF",
  notebook: "Notebook",
  sheet: "Spreadsheet",
  doc: "Document",
  image: "Image",
  code: "Code",
  link: "Link",
};

export default function FileRow({ file }) {
  const [open, setOpen] = useState(false);
  const { name, kind, file: src, note, colab, href, html } = file;

  const inline = kind === "pdf" || kind === "image" ? src : kind === "notebook" ? html : null;

  return (
    <article className="file">
      <div className="file-head">
        <div>
          <div className="file-name">{name}</div>
          {note && <p className="file-note">{note}</p>}
          <span className="file-kind">{KIND_LABEL[kind] || kind}</span>
        </div>

        <div className="file-actions">
          {inline && (
            <button className="btn btn-solid" onClick={() => setOpen(!open)}>
              {open ? "Close" : "View"}
            </button>
          )}
          {src && (
            <a className="btn" href={src} download>
              Download
            </a>
          )}
          {colab && (
            <a className="btn" href={colab} target="_blank" rel="noopener noreferrer">
              Open in Colab
            </a>
          )}
          {href && (
            <a className="btn btn-solid" href={href} target="_blank" rel="noopener noreferrer">
              Visit
            </a>
          )}
        </div>
      </div>

      {open && inline && (
        <div className="viewer">
          {kind === "image" ? (
            <img src={inline} alt={note || name} />
          ) : (
            <iframe src={inline} title={name} loading="lazy" />
          )}
        </div>
      )}
    </article>
  );
}
