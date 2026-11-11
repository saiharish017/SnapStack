import { Metadata } from "next";
import { VideosFeedView } from "@/components/videos/videos-feed-view";

export const metadata: Metadata = {
  title: "AI Video Feed & Execution Tutorials | SnapStack",
  description: "Watch verified AI builders execute multi-tool automations and prompt techniques in real time. Inspect prompts, copy verified code snippets, and clone reproducible workflows in one click.",
  openGraph: {
    title: "AI Video Tutorials & Execution Feed | SnapStack",
    description: "140+ unedited video playbooks, real-time code demos, and 100% reproducible execution blueprints.",
  },
};

export default function VideosPage() {
  return <VideosFeedView />;
}

