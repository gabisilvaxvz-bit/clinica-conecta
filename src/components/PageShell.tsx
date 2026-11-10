import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

type PageShellProps = {
  title: string;
  children: ReactNode;
};

export default function PageShell({ title, children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-[#F3F6FB] font-sans text-marinho">
      <Sidebar />
      <div className="ml-74 min-h-screen flex flex-col">
        <Topbar title={title} />
        <div className="flex-1 px-8 pb-6 pt-6">{children}</div>
      </div>
    </div>
  );
}
