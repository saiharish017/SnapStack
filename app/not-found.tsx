import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <span className="font-mono text-xs uppercase tracking-wider text-brand-lavender font-semibold mb-2">
        404 • Page Not Found
      </span>
      <h1 className="text-3xl sm:text-5xl font-semibold text-ink tracking-tight mb-4">
        This recipe doesn&apos;t exist yet.
      </h1>
      <p className="text-sm text-ink-subtle max-w-md mb-8 leading-relaxed">
        The workflow, tool profile, or playbook you requested could not be located.
      </p>
      <Button asChild size="default">
        <Link href="/">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to Home</span>
        </Link>
      </Button>
    </main>
  );
}

