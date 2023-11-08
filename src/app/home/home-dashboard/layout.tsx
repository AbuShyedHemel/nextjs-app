"use client";
import { ExamplesNav } from "@/components/examples-nav";
import { PageHeader } from "@/components/page-header";

interface ExamplesLayoutProps {
  children: React.ReactNode;
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
  return (
    <>
      <div className="container relative">
        <PageHeader className="page-header pb-8"></PageHeader>
        <section>
          <ExamplesNav />
          <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
            {children}
          </div>
        </section>
      </div>
    </>
  );
}
