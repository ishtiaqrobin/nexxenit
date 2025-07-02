import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


const privacyContent = [
  {
    title: "Privacy Policy",
    text: `Effective Date: July 2, 2025\nApp Name: Rz Autopost\n\nWe respect your privacy and are committed to protecting your personal information. This Privacy Policy explains what we collect, how we use it, and your choices.`
  },
  {
    title: "1. Information We Collect",
    text: `When you log in with Facebook, we may collect:\n\n- Your public Facebook profile (name, profile picture)\n- Email address (if provided)\n- Facebook Page(s) you manage\n- Permissions you've granted (like posting to a page)\n\nWe do not collect your Facebook password or access any personal messages.`
  },
  {
    title: "2. How We Use Your Information",
    text: `We use your information only to:\n\n- Connect your account to Facebook\n- Allow our app to post content on your behalf (to Pages you approve)\n- Manage your access and preferences\n\nWe never sell or share your data with third parties.`
  },
  {
    title: "3. Data Storage",
    text: `We store access tokens securely for the duration of your use. If you revoke access, the token becomes invalid and is no longer used.`
  },
  {
    title: "4. Your Rights",
    text: `You can:\n\n- Revoke access anytime via your Facebook settings\n- Request deletion of your data by contacting us.`
  },
  {
    title: "5. Contact",
    text: `If you have questions, email us at: support@rzautopost.com.`
  }
];

import { ThemeProvider } from "@/components/ThemeProvider";

export default function PrivacyPolicy() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="nexxenit-theme">
      <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
        <Header />
        <main className="container mx-auto flex flex-col items-center pt-24 pb-12 px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
          <div className="max-w-2xl w-full space-y-8 text-gray-700 dark:text-gray-200">
            {privacyContent.map((section, idx) => (
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
