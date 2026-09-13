# ePortfolio

Next.js App Router. No CSS framework. Deploys to Vercel with zero configuration.

## Pages

```
/                              Home dashboard — welcome banner, stats, course cards
/about                         About me — portrait, facts, bio, skills
/courses                       All courses
/courses/itc-c508              One course — four term buttons
/courses/itc-c508/prelim       One term — reflection, activities, project files
```

Every term has its own URL, so the link you submit points straight at that term.

## Run it

```
npm install
npm run dev
```

## Where to edit

| What | File |
| --- | --- |
| Your name, bio, facts, skills, links | `data/site.js` |
| Courses, reflections, file lists | `data/courses.js` |
| Your portrait and banner image | `public/me.jpg`, `public/cover.jpg` |
| Your PDFs, notebooks, spreadsheets | `public/files/` |
| Colors, fonts, spacing | `app/globals.css` (tokens at the top) |

## Images

Drop them straight into `public/`:

- `me.jpg` — portrait for the About page, square, around 800x800
- `cover.jpg` — wide background behind the welcome banner, around 1920x900

They're already wired up in `data/site.js`. Set either to `null` to turn it off.

## Adding a file to a term

1. Put `Report.pdf` into `public/files/`
2. In `data/courses.js`, find the course and term, then add to `activities` or `projects`:

```js
{
  name: "Report.pdf",
  kind: "pdf",
  file: "/files/Report.pdf",
  note: "One line on what it is.",
}
```

3. Set that term's `status` to `"done"`

## Changing the colors

Top of `app/globals.css`. Change `--accent` and everything follows.

```css
--accent: #3b49df;       /* buttons, links, highlights */
--bg: #f6f6f9;           /* page background */
--surface: #ffffff;      /* cards */
```

The `[data-theme="dark"]` block below it holds the dark mode values.
