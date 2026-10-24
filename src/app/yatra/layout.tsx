
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yatra - Bhakti Udyan | 8 Bagiche Memory Garden",
  description: "Immersive visual journey through 8 Bagiche, 40 Memory Anchors, Hanuman Chalisa memorization - Bhakti Udyan",
};

export default function YatraLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#2B2117] isolation-isolate">
      {children}
    </div>
  );
}
