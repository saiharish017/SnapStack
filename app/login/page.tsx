import { Metadata } from "next";
import { LoginView } from "@/components/auth/login-view";

export const metadata: Metadata = {
  title: "Authentication & Secure Sign In | SnapStack",
  description: "Sign in with passwordless magic links or OAuth to save verified AI workflows, track multi-tool stack spend, and access your personal prompt vault.",
  openGraph: {
    title: "Secure Access Terminal | SnapStack",
    description: "Passwordless authentication with zero-data retention. Save workflows and access your personal vault.",
  },
};

export default function LoginPage() {
  return <LoginView />;
}

