"use client";
import { motion } from "framer-motion";

export function SiteHeader() {
  return <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-7"><motion.nav initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#0b0b0b]/80 px-4 backdrop-blur-xl sm:px-5">
    <a href="#top" className="flex items-center gap-2 font-semibold tracking-[-.04em]"><span className="grid size-6 place-items-center rounded-md bg-[#e9e8e4] text-xs font-black text-black">V</span> vangrex</a>
    <div className="hidden items-center gap-7 text-[13px] text-zinc-400 md:flex"><a href="#platform" className="hover:text-white">Platform</a><a href="#workflows" className="hover:text-white">Workflows</a><a href="#agents" className="hover:text-white">Agents</a><a href="#company" className="hover:text-white">Company</a></div>
    <a href="#cta" className="rounded-lg border border-white/15 px-3 py-2 text-xs font-medium transition hover:border-white/35">Talk to us <span className="ml-1 text-zinc-500">↗</span></a>
  </motion.nav></header>;
}
