"use client";

import React, { useState } from "react";
import { Copy, Check, FileCode2, Terminal } from "lucide-react";

export default function CodeEditorCard() {
  const [activeTab, setActiveTab] = useState<"profile" | "stack">("profile");
  const [copied, setCopied] = useState(false);

  const snippets = {
    profile: `// developer.js
const developer = {
  name: "Vikas Manral",
  role: "Full-Stack Developer",
  stack: [
    "React",
    "Next.js",
    "Node.js",
    "MongoDB"
  ],
  focus: [
    "Full-Stack Apps",
    "AI Integration",
    "REST APIs"
  ]
};
module.exports = developer;`,
    stack: `// techStack.js
const technologies = {
  frontend: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
  backend: ["Node.js", "Express.js", "REST APIs"],
  data: ["MongoDB", "Convex", "Sequelize"],
  auth: ["JWT", "Clerk"],
  ai: ["Gemini / AI APIs"],
  languages: ["Java", "Python", "C", "DSA"]
};`,
  };

  const currentCode = snippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="hero-code-editor-card"
      className="w-full max-w-full rounded-2xl bg-zinc-950/95 border border-zinc-800 shadow-xl backdrop-blur-md overflow-hidden"
    >
      {/* Window Header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-zinc-800 bg-zinc-900/60">
        {/* macOS dot indicators */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span>
        </div>

        {/* Tab Selectors */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar mx-2">
          <button
            onClick={() => setActiveTab("profile")}
            id="tab-btn-profile"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === "profile"
                ? "bg-zinc-800 text-sky-300 font-medium"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <FileCode2 className="h-3 w-3" />
            <span>developer.js</span>
          </button>

          <button
            onClick={() => setActiveTab("stack")}
            id="tab-btn-stack"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === "stack"
                ? "bg-zinc-800 text-sky-300 font-medium"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Terminal className="h-3 w-3" />
            <span>techStack.js</span>
          </button>
        </div>

        {/* Action button */}
        <div className="flex items-center shrink-0">
          <button
            onClick={handleCopy}
            id="copy-code-snippet-btn"
            title="Copy code"
            className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-400" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-3.5 sm:p-4 font-mono text-[12px] leading-relaxed overflow-x-auto text-zinc-300 select-text max-h-[300px]">
        <pre className="text-zinc-300">
          <code>
            {currentCode.split("\n").map((line, idx) => (
              <div key={idx} className="flex min-w-0">
                <span className="w-5 select-none text-right pr-2 text-zinc-600 shrink-0 font-mono text-[11px]">
                  {idx + 1}
                </span>
                <span className="flex-1 whitespace-pre break-normal">
                  {line.startsWith("//") ? (
                    <span className="text-zinc-500 italic">{line}</span>
                  ) : line.includes("const ") ||
                    line.includes("module.exports") ? (
                    <span>
                      {line
                        .replace("const ", "<kw>const </kw>")
                        .replace("module.exports", "<kw>module.exports</kw>")
                        .split(/(<kw>.*?<\/kw>)/g)
                        .map((part, pIdx) =>
                          part.startsWith("<kw>") ? (
                            <span
                              key={pIdx}
                              className="text-indigo-400 font-medium"
                            >
                              {part.replace(/<\/?kw>/g, "")}
                            </span>
                          ) : (
                            <span key={pIdx}>{renderTokens(part)}</span>
                          ),
                        )}
                    </span>
                  ) : (
                    renderTokens(line)
                  )}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Clean Status Bar */}
      <div className="flex items-center justify-between px-3.5 py-1.5 border-t border-zinc-850 bg-zinc-900/40 text-[11px] font-mono text-zinc-500">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
          Node.js / JavaScript
        </span>
        <span className="text-zinc-500">UTF-8</span>
      </div>
    </div>
  );
}

function renderTokens(str: string) {
  const parts = str.split(/(".*?"|:\s*true|:\s*false)/g);
  return parts.map((part, i) => {
    if (part.startsWith('"')) {
      return (
        <span key={i} className="text-emerald-300">
          {part}
        </span>
      );
    }
    if (part === ": true") {
      return (
        <span key={i} className="text-sky-400 font-semibold">
          {part}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}
