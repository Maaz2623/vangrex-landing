"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const features = [
  [
    "Autonomous engineering",
    "From intent to pull request, agent teams carry work through with transparent checkpoints.",
  ],
  [
    "Visual workflows",
    "Design dependable execution paths with branching, memory, retries, and approvals.",
  ],
  [
    "Persistent context",
    "Every project has a living understanding of your codebase, conventions, and decisions.",
  ],
  [
    "Production awareness",
    "Connect signals from CI and production to turn incidents into resolved work.",
  ],
  [
    "Human approval gates",
    "Keep people in control at the moments that carry risk or demand judgment.",
  ],
  [
    "Engineering observability",
    "See every agent decision, tool call, change, and outcome in one place.",
  ],
];
const agents = [
  "Planner",
  "Architect",
  "Backend",
  "Frontend",
  "QA",
  "Security",
  "DevOps",
  "Docs",
];
const faqs = [
  [
    "Is Vangrex an AI coding assistant?",
    "No. Vangrex coordinates complete, specialized AI teams across the software lifecycle. It connects planning, implementation, review, deployment, and operational learning in a single system.",
  ],
  [
    "How does Vangrex work with our codebase?",
    "You connect repositories and define the permissions and approval policies appropriate for your organization. Agents develop structured project context as they work.",
  ],
  [
    "Can engineers stay in control?",
    "Always. Workflows can include mandatory approval gates, scoped permissions, and clear audit trails for every action an agent takes.",
  ],
  [
    "Who is Vangrex for?",
    "Engineering organizations that want to scale delivery capacity without sacrificing the reliability, context, and judgment that great software requires.",
  ],
];

export function MainSections() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <section className="border-y border-white/10 bg-[#0a0a0a] px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 text-xs text-zinc-500">
          <span className="eyebrow">
            Trusted by teams building the next era
          </span>
          <div className="flex gap-7 font-semibold tracking-[.12em] text-zinc-400 sm:gap-12">
            <span>ARCFORM</span>
            <span>MONO</span>
            <span>HYPERLINE</span>
            <span className="hidden sm:block">ROUTE</span>
          </div>
        </div>
      </section>
      <section id="platform" className="px-5 py-30 sm:px-7">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">One system. One source of truth.</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-2">
            <h2 className="display text-5xl font-semibold sm:text-6xl">
              The work moves forward.{" "}
              <span className="text-zinc-500">Not around.</span>
            </h2>
            <p className="max-w-md self-end text-base leading-7 text-zinc-400">
              Vangrex replaces the handoffs and fragmented tools between an idea
              and a dependable release with an engineering system built to think
              in sequence.
            </p>
          </div>
          <div className="mt-14 grid gap-3 md:grid-cols-4">
            {[
              [
                "01",
                "Project",
                "Ground the team in product and repository context.",
              ],
              [
                "02",
                "Workflow",
                "Define how work should move, including the exceptions.",
              ],
              [
                "03",
                "Agent team",
                "Give each discipline the focus it needs to do excellent work.",
              ],
              [
                "04",
                "Execution",
                "Observe autonomous progress and approve what matters.",
              ],
            ].map((x, i) => (
              <motion.article
                whileHover={{ y: -5 }}
                key={x[1]}
                className="card min-h-55 p-5"
              >
                <span className="text-xs text-indigo-300">{x[0]}</span>
                <h3 className="mt-12 text-lg font-medium">{x[1]}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{x[2]}</p>
                {i < 3 && <span className="absolute" />}
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="workflows"
        className="border-y border-white/10 bg-[#0b0b0b] px-5 py-30 sm:px-7"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="eyebrow">Workflow builder</p>
              <h2 className="display mt-5 text-5xl font-semibold">
                Engineering judgment,{" "}
                <span className="text-zinc-500">made executable.</span>
              </h2>
              <p className="mt-6 max-w-sm leading-7 text-zinc-400">
                Compose intelligent paths through complex work. Conditions,
                parallel execution, human gates, and recovery are first-class
                building blocks.
              </p>
            </div>
            <WorkflowCanvas />
          </div>
        </div>
      </section>
      <section id="agents" className="px-5 py-30 sm:px-7">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="eyebrow">Specialists, in sync</p>
            <h2 className="display mx-auto mt-5 max-w-2xl text-5xl font-semibold sm:text-6xl">
              One team.{" "}
              <span className="text-zinc-500">Many perspectives.</span>
            </h2>
          </div>
          <div className="card relative mt-14 overflow-hidden p-5 sm:p-10">
            <div className="absolute inset-0 grid-bg opacity-60" />
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1000 430"
              preserveAspectRatio="none"
            >
              <path
                d="M120 90 C300 90 270 215 500 215 S700 80 890 80 M120 340 C300 340 300 215 500 215 S730 340 890 340"
                fill="none"
                stroke="rgba(129,140,248,.45)"
                strokeWidth="1"
                className="workflow-line"
              />
            </svg>
            <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4">
              {agents.map((a, i) => (
                <motion.div
                  key={a}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-xl border border-white/10 bg-[#141414]/85 p-4 backdrop-blur"
                >
                  <span className="text-[10px] text-indigo-300">0{i + 1}</span>
                  <b className="mt-5 block text-sm font-medium">{a}</b>
                  <span className="mt-1 block text-[11px] text-zinc-500">
                    {i % 3 === 0 ? "Planning" : "Connected"}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="relative mx-auto mt-7 w-fit rounded-full border border-indigo-400/40 bg-indigo-400/10 px-4 py-2 text-xs text-indigo-200">
              Shared project memory
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 pb-30 sm:px-7">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">A platform engineered for the whole loop</p>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {features.map((f, i) => (
              <motion.article
                whileHover={{ y: -4 }}
                key={f[0]}
                className="card p-6"
              >
                <span className="text-xs text-zinc-600">0{i + 1}</span>
                <h3 className="mt-12 text-lg font-medium">{f[0]}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-500">
                  {f[1]}
                </p>
                <span className="mt-7 block text-sm text-zinc-300">
                  Learn more <i className="not-italic text-indigo-300">↗</i>
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-white/10 bg-[#0b0b0b] px-5 py-30 sm:px-7">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">The next evolution</p>
              <h2 className="display mt-5 text-5xl font-semibold">
                A new model for software delivery.
              </h2>
            </div>
            <p className="self-end leading-7 text-zinc-400">
              Tools make individuals faster. Vangrex makes the entire
              engineering function more capable, more continuous, and more
              certain.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-2xl border border-white/10 md:grid-cols-3">
            {[
              ["Traditional", "Human capacity is the limiting system."],
              ["AI assistant", "One developer, accelerated."],
              ["Vangrex", "A coordinated team, compounding."],
            ].map((x, i) => (
              <div
                key={x[0]}
                className={
                  "min-h-55 border-white/10 p-6 " +
                  (i ? "border-t md:border-l md:border-t-0" : "") +
                  (i === 2 ? " bg-indigo-400/8" : "")
                }
              >
                <span className="text-xs text-zinc-500">0{i + 1}</span>
                <h3 className="mt-10 text-xl font-medium">{x[0]}</h3>
                <p className="mt-3 max-w-45 text-sm leading-6 text-zinc-500">
                  {x[1]}
                </p>
                {i === 2 && (
                  <span className="mt-7 inline-block rounded-full border border-indigo-300/30 px-2 py-1 text-[10px] text-indigo-200">
                    THE VANGREX MODEL
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="company" className="px-5 py-30 sm:px-7">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Built for ambitious teams</p>
            <h2 className="display mt-5 text-5xl font-semibold">
              Quietly powerful.
              <br />
              <span className="text-zinc-500">Deeply trusted.</span>
            </h2>
          </div>
          <blockquote className="card p-7 sm:p-10">
            <p className="text-2xl leading-snug tracking-[-.035em] text-zinc-200">
              “Vangrex changed our mental model from asking AI for help to
              leading a team that never loses context.”
            </p>
            <footer className="mt-10 flex items-center gap-3 text-sm">
              <span className="grid size-9 place-items-center rounded-full bg-zinc-800 text-xs">
                AL
              </span>
              <span>
                <b className="block font-medium">Amara Liu</b>
                <small className="text-zinc-500">
                  VP Engineering, Northstar
                </small>
              </span>
            </footer>
          </blockquote>
        </div>
      </section>
      <section className="border-y border-white/10 bg-[#0b0b0b] px-5 py-26 sm:px-7">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-center">Frequently asked</p>
          <h2 className="display mt-5 text-center text-5xl font-semibold">
            Clarity, by design.
          </h2>
          <div className="mt-12">
            {faqs.map((f, i) => (
              <div key={f[0]} className="border-b border-white/10">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="flex w-full items-center justify-between py-5 text-left text-sm font-medium"
                >
                  <span>{f[0]}</span>
                  <span className="text-xl text-zinc-500">
                    {open === i ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pb-5 pr-10 text-sm leading-6 text-zinc-500"
                    >
                      {f[1]}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="cta"
        className="relative overflow-hidden px-5 py-35 text-center sm:px-7"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(77,77,168,.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="eyebrow">The work begins here</p>
          <h2 className="display mt-6 text-5xl font-semibold sm:text-7xl">
            The future of software engineering is autonomous.
          </h2>
          <p className="mx-auto mt-7 max-w-md leading-7 text-zinc-400">
            Build an AI team that understands your product, carries the work,
            and earns your trust.
          </p>
          <a
            href="mailto:mohammedmaaz2623@gmail.com"
            className="button-primary mt-9 inline-block rounded-xl px-6 py-3.5 text-sm font-semibold transition"
          >
            Start building with Vangrex <span className="ml-2">→</span>
          </a>
        </div>
      </section>
      <footer className="border-t border-white/10 px-5 py-8 sm:px-7">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-5 text-xs text-zinc-500">
          <span className="font-semibold text-zinc-200">◈ vangrex</span>
          <span>© 2026 Vangrex, Inc.</span>
          <span>Privacy &nbsp; Security &nbsp; Status</span>
        </div>
      </footer>
    </>
  );
}

function WorkflowCanvas() {
  return (
    <div className="card relative min-h-105 overflow-hidden p-4 sm:p-7">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 text-[11px]">
        <span className="text-zinc-400">
          release /{" "}
          <b className="font-medium text-zinc-200">payment-reconciliation</b>
        </span>
        <span className="rounded bg-emerald-400/10 px-2 py-1 text-emerald-300">
          Valid
        </span>
      </div>
      <svg
        className="absolute left-[12%] top-24 h-65 w-[76%]"
        preserveAspectRatio="none"
      >
        <path
          d="M30 50 H280 V140 H420 M280 50 V245 H420"
          fill="none"
          stroke="rgba(129,140,248,.55)"
          strokeWidth="1.5"
          className="workflow-line"
        />
      </svg>
      <div className="relative grid grid-cols-2 gap-x-12 gap-y-10 pt-10 text-xs sm:grid-cols-3">
        <Flow label="New issue" tag="TRIGGER" />
        <Flow label="Plan approach" tag="AGENT" />
        <Flow label="Risk review" tag="GATE" />
        <Flow label="Parallel build" tag="TEAM" />
        <Flow label="Run checks" tag="SYSTEM" />
        <Flow label="Create release" tag="ACTION" />
      </div>
    </div>
  );
}
function Flow({ label, tag }: { label: string; tag: string }) {
  return (
    <div className="rounded-lg border border-white/12 bg-[#141414] p-3 shadow-xl">
      <span className="text-[9px] text-indigo-300">{tag}</span>
      <b className="mt-2 block text-[11px] font-medium">{label}</b>
    </div>
  );
}
