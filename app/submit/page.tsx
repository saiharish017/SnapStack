import { Metadata } from "next";
import { SubmissionPortalView } from "@/components/submit/submission-portal-view";

export const metadata: Metadata = {
  title: "Community Submission Portal | SnapStack",
  description: "Submit reproducible AI automation workflows, prompt engineering skills, or developer tools for free technical audit and indexing.",
  openGraph: {
    title: "100% Free Community Submission Portal | SnapStack",
    description: "Submit multi-tool workflows, prompt playbooks, and developer tools for verified inclusion in the SnapStack index.",
  },
};

export default function SubmitPage() {
  return <SubmissionPortalView />;
}

