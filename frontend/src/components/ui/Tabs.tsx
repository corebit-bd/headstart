// frontend/src/components/ui/Tabs.tsx
"use client";

import { useState } from "react";
import { TabsProps } from "@/types/nav"; // Import from your central types file

export function Tabs({ tabs, defaultValue }: TabsProps) {
    const [activeTab, setActiveTab] = useState(defaultValue || tabs[0].id);
    
    return (
        <div className="w-full">
            <div className="flex justify-between border-b border-brand-grey-1000 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-4 text-sm font-heading font-black transition-all whitespace-nowrap border-b-2 ${
                        activeTab === tab.id
                            ? "border-brand-purple-1000 text-brand-purple-1000"
                            : "border-transparent text-black-500 hover:text-brand-purple-1000"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="mt-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
        </div>
    );
}