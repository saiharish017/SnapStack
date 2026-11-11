import { Metadata } from "next";
import { UserVaultView } from "@/components/dashboard/user-vault-view";

export const metadata: Metadata = {
  title: "Personal Vault & Dashboard | SnapStack",
  description: "Manage saved workflows, prompt vault assets, and audit your multi-tool AI stack subscription costs and ROI in one place.",
  openGraph: {
    title: "User Dashboard & Personal Vault | SnapStack",
    description: "Track execution lifecycles, prompt techniques, and stack economics.",
  },
};

export default function DashboardPage() {
  return <UserVaultView />;
}

