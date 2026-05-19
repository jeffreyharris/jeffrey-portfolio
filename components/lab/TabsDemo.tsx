"use client";

import { useState } from "react";

const tabs = [
  {
    label: "Overview",
    content:
      "This tab introduces the component and explains the basic interaction.",
  },
  {
    label: "Approach",
    content:
      "The active tab is stored in React state and updated when a button is clicked.",
  },
  {
    label: "Result",
    content:
      "The component conditionally renders content based on the selected tab.",
  },
];

export default function TabsDemo() {
  const [activeTab, setActiveTab] = useState("Overview");

  const selectedTab = tabs.find((tab) => tab.label === activeTab);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            type="button"
            onClick={() => setActiveTab(tab.label)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeTab === tab.label
                ? "bg-[#f59e0b] text-black"
                : "border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
        <h3 className="text-xl font-semibold">{selectedTab?.label}</h3>
        <p className="mt-3 leading-7 text-white/70">{selectedTab?.content}</p>
      </div>
    </div>
  );
}