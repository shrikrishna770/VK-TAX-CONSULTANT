import Image from "next/image";
import { CheckCircle2, Clock3, CalendarCheck } from "lucide-react";

const ROWS = [
  { label: "GSTR-1", period: "Monthly return", status: "Filed", done: true },
  { label: "GSTR-3B", period: "Monthly return", status: "Filed", done: true },
  { label: "TDS Return", period: "Quarterly · 26Q", status: "Due soon", done: false },
  { label: "Income Tax Return", period: "Annual · ITR", status: "Filed", done: true },
];

/** Decorative hero illustration: a sample compliance tracker in brand colours. */
export default function ComplianceTracker() {
  return (
    <div className="tracker" aria-hidden="true">
      <div className="tracker-head">
        <Image src="/brand-mark.png" alt="" width={40} height={40} />
        <div>
          <div className="tracker-title">Compliance Tracker</div>
          <div className="tracker-sub">Sample client dashboard</div>
        </div>
      </div>

      <div className="tracker-progress">
        <div className="tracker-progress-label">
          <span>This quarter</span>
          <strong>3 of 4 complete</strong>
        </div>
        <div className="tracker-bar">
          <span style={{ width: "75%" }} />
        </div>
      </div>

      <ul className="tracker-rows">
        {ROWS.map((r) => (
          <li key={r.label} className={r.done ? "done" : "due"}>
            {r.done ? <CheckCircle2 size={20} /> : <Clock3 size={20} />}
            <div className="tracker-row-text">
              <strong>{r.label}</strong>
              <span>{r.period}</span>
            </div>
            <span className="tracker-chip">{r.status}</span>
          </li>
        ))}
      </ul>

      <div className="tracker-foot">
        <CalendarCheck size={16} /> Reminders sent before every due date
      </div>
    </div>
  );
}
