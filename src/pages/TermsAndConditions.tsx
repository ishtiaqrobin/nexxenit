
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const termsContent = [
  {
    title: "Terms of Services",
    text: `Effective Date: July 2, 2025\nApp Name: Rz Autopost\n\nPlease read these Terms of Services ("Terms") before using the Rz Autopost app. By using the app, you agree to be bound by them.`
  },
  {
    title: "1. Use of the App",
    text: `Rz Autopost allows you to:\n\n- Log in with your Facebook account\n- Connect to your Facebook Pages\n- Automatically post content on approved Pages\n\nYou must be an admin of any Page you connect to.`
  },
  {
    title: "2. User Responsibilities",
    text: `You agree not to:\n\n- Use the app for spam or automated bulk posting\n- Post anything that violates Facebook’s Community Standards or local laws\n- Share your access token or credentials with anyone else`
  },
  {
    title: "3. Account Suspension",
    text: `We reserve the right to suspend or terminate your access if:\n\n- You misuse the app\n- You attempt to manipulate Facebook APIs inappropriately\n- You violate these Terms`
  },
  {
    title: "4. Limitation of Liability",
    text: `We are not liable for:\n\n- Downtime or changes to Facebook’s API\n- Posts made due to improper settings or misuse of the tool\n\nUse this app at your own risk.`
  },
  {
    title: "5. Updates",
    text: `We may update these Terms at any time. Continued use of the app means you accept the changes.`
  }
];

export default function TermsAndConditions() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="nexxenit-theme">
      <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
        <Header />
        <main className="container mx-auto flex flex-col items-center pt-24 pb-12 px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Terms of Services</h1>
          <div className="max-w-2xl w-full space-y-8 text-gray-700 dark:text-gray-200">
            {termsContent.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
                <p className="leading-relaxed whitespace-pre-line">{section.text}</p>
              </section>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
