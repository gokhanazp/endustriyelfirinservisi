import type { Block } from "@/lib/blog";
import { slugifyHeading } from "@/lib/blog";
import { IconAlert, IconCheck, IconTools } from "./Icons";
import { renderRich } from "./RichText";

const noteStyles = {
  info: {
    wrap: "border-ink-200 bg-ink-50/70",
    badge: "bg-ink-900 text-white",
    Icon: IconTools,
  },
  warn: {
    wrap: "border-ember-200 bg-ember-50/70",
    badge: "bg-ember-500 text-white",
    Icon: IconAlert,
  },
  tip: {
    wrap: "border-emerald-200 bg-emerald-50/60",
    badge: "bg-emerald-600 text-white",
    Icon: IconCheck,
  },
} as const;

export default function PostBody({ body }: { body: Block[] }) {
  return (
    <div className="post-body">
      {body.map((b, i) => {
        switch (b.t) {
          case "h2":
            return (
              <h2
                key={i}
                id={slugifyHeading(b.text)}
                className="mt-14 scroll-mt-28 font-display text-[1.6rem] font-extrabold leading-tight text-ink-900 first:mt-0 sm:text-[1.85rem]"
              >
                {b.text}
              </h2>
            );

          case "h3":
            return (
              <h3
                key={i}
                className="mt-9 font-display text-[1.18rem] font-bold leading-snug text-ink-900"
              >
                {b.text}
              </h3>
            );

          case "p":
            return (
              <p
                key={i}
                className="mt-5 text-[17px] leading-[1.85] text-ink-600"
              >
                {renderRich(b.text)}
              </p>
            );

          case "ul":
            return (
              <ul key={i} className="mt-6 space-y-3">
                {b.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500" />
                    <span className="text-[16.5px] leading-[1.8] text-ink-600">
                      {renderRich(item)}
                    </span>
                  </li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={i} className="mt-6 space-y-3.5">
                {b.items.map((item, n) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-ink-900 text-[12.5px] font-bold text-white">
                      {n + 1}
                    </span>
                    <span className="text-[16.5px] leading-[1.8] text-ink-600">
                      {renderRich(item)}
                    </span>
                  </li>
                ))}
              </ol>
            );

          case "steps":
            return (
              <ol key={i} className="mt-7 space-y-4">
                {b.items.map((s, n) => (
                  <li
                    key={s.title}
                    className="rounded-2xl border border-ink-100 bg-white p-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-ember-500 text-[13px] font-extrabold text-white">
                        {n + 1}
                      </span>
                      <div>
                        <h4 className="font-display text-[16px] font-bold text-ink-900">
                          {s.title}
                        </h4>
                        <p className="mt-2 text-[15.5px] leading-[1.75] text-ink-500">
                          {renderRich(s.text)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            );

          case "note": {
            const style = noteStyles[b.tone ?? "info"];
            const { Icon } = style;
            return (
              <aside
                key={i}
                className={`mt-8 rounded-2xl border p-6 sm:p-7 ${style.wrap}`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${style.badge}`}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <h4 className="font-display text-[16px] font-bold text-ink-900">
                      {b.title}
                    </h4>
                    <p className="mt-2 text-[15.5px] leading-[1.8] text-ink-600">
                      {renderRich(b.text)}
                    </p>
                  </div>
                </div>
              </aside>
            );
          }

          case "table":
            return (
              <figure key={i} className="mt-8">
                <div className="overflow-x-auto rounded-2xl border border-ink-100">
                  <table className="w-full min-w-[34rem] border-collapse text-left">
                    <thead>
                      <tr className="bg-ink-950">
                        {b.head.map((h) => (
                          <th
                            key={h}
                            scope="col"
                            className="px-5 py-3.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {b.rows.map((row, r) => (
                        <tr
                          key={r}
                          className="border-t border-ink-100 odd:bg-white even:bg-ink-50/50"
                        >
                          {row.map((cell, c) => (
                            <td
                              key={c}
                              className={`px-5 py-3.5 align-top text-[15px] leading-relaxed ${
                                c === 0
                                  ? "font-semibold text-ink-900"
                                  : "text-ink-600"
                              }`}
                            >
                              {renderRich(cell)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {b.caption && (
                  <figcaption className="mt-3 text-[13.5px] leading-relaxed text-ink-400">
                    {b.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "quote":
            return (
              <blockquote
                key={i}
                className="mt-9 border-l-[3px] border-ember-500 bg-ink-50/60 py-5 pl-6 pr-5 font-display text-[18px] font-semibold leading-relaxed text-ink-800"
              >
                {b.text}
              </blockquote>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
