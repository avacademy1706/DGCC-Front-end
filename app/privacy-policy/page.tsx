"use client";

import { Shield, Lock, Eye, Database, Trash2, Mail, Globe, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import type { LucideIcon } from "lucide-react";

/* ── Types ── */
interface ContentBlock {
  subtitle?: string;
  text?: string;
  list?: string[];
  contactInfo?: boolean;
}

interface Section {
  id: string;
  icon: LucideIcon;
  title: string;
  content: ContentBlock[];
}

const sections: Section[] = [
  {
    id: "info-collect",
    icon: Database,
    title: "Information We Collect",
    content: [
      {
        subtitle: "Account Information",
        text: "When you use DGCC (Digital Growth Command Centre), we collect information necessary to provide our services, including your name, email address, company name, and contact details provided during account creation.",
      },
      {
        subtitle: "Social Media Account Data",
        text: "When you connect third-party social media accounts (Facebook, Instagram, LinkedIn, Twitter/X), we receive and securely store OAuth access tokens and refresh tokens required to publish content on your behalf. We access your social media profile name, page IDs, and account identifiers. We do not access or store your social media passwords.",
      },
      {
        subtitle: "Content Data",
        text: "We store the content you create for publishing, including post captions, media files (images and videos uploaded to our platform), hashtags, scheduling dates, and publishing preferences.",
      },
      {
        subtitle: "Lead & Campaign Data",
        text: "For clients using our lead management and campaign tracking features, we collect lead information received through Meta Ads integrations, JustDial email parsing, and manual entries. This may include names, phone numbers, email addresses, and inquiry details.",
      },
      {
        subtitle: "Usage & Log Data",
        text: "We automatically collect technical information such as IP addresses, browser type, device information, and interaction logs to maintain service quality and security.",
      },
    ],
  },
  {
    id: "how-use",
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      {
        list: [
          "To provide, operate, and maintain the DGCC platform and its features",
          "To schedule and publish social media content on your connected accounts at your specified times",
          "To manage leads, campaigns, and client data as directed by you",
          "To authenticate and maintain secure connections with third-party social media platforms",
          "To send service-related notifications, including publishing confirmations and error alerts",
          "To monitor and improve platform performance, reliability, and security",
          "To comply with legal obligations and enforce our terms of service",
        ],
      },
    ],
  },
  {
    id: "social-media",
    icon: Globe,
    title: "Social Media Platform Integrations",
    content: [
      {
        subtitle: "Facebook & Instagram (Meta)",
        text: "We use Meta's Graph API (v19.0) to publish posts, images, videos, and reels to your connected Facebook Pages and Instagram Business accounts. We request permissions including pages_manage_posts, pages_read_engagement, instagram_basic, and instagram_content_publish. These permissions are used solely to publish content you schedule through our platform.",
      },
      {
        subtitle: "LinkedIn",
        text: "We use LinkedIn's API to publish posts and share media on your behalf. We request w_member_social and r_liteprofile permissions to create posts and identify your account.",
      },
      {
        subtitle: "Twitter / X",
        text: "We use Twitter's API v2 with OAuth 2.0 PKCE to publish tweets and upload media. We request tweet.read, tweet.write, and offline.access scopes.",
      },
      {
        subtitle: "Token Security",
        text: "All OAuth tokens are encrypted using AES-256-GCM encryption before storage. Tokens are automatically refreshed before expiry and can be revoked by disconnecting your account at any time through the DGCC dashboard.",
      },
    ],
  },
  {
    id: "data-security",
    icon: Lock,
    title: "Data Security",
    content: [
      {
        list: [
          "AES-256-GCM encryption for all stored OAuth tokens and sensitive credentials",
          "HMAC-signed, time-limited state tokens for OAuth CSRF protection",
          "Rate limiting on all API endpoints to prevent abuse",
          "Input validation and sanitisation to prevent injection attacks",
          "Security headers via Helmet (CSP, HSTS, XSS protection)",
          "MongoDB injection protection through express-mongo-sanitize",
          "Encrypted data transmission via HTTPS/TLS",
          "Role-based access control for platform users",
        ],
      },
    ],
  },
  {
    id: "data-sharing",
    icon: Shield,
    title: "Data Sharing & Third Parties",
    content: [
      {
        text: "We do not sell, rent, or trade your personal information to third parties. We share data only in the following limited circumstances:",
        list: [
          "With social media platforms (Facebook, Instagram, LinkedIn, Twitter) solely to publish content you have scheduled — only the content and media you provide is transmitted",
          "With cloud infrastructure providers (hosting, database, file storage) who process data on our behalf under strict confidentiality agreements",
          "When required by law, regulation, or legal process",
          "To protect the rights, safety, and property of Plexus Digitals, our users, or the public",
        ],
      },
    ],
  },
  {
    id: "data-retention",
    icon: Trash2,
    title: "Data Retention & Deletion",
    content: [
      {
        list: [
          "Social media OAuth tokens are deleted immediately when you disconnect an account",
          "Published post records are retained for analytics and audit purposes unless you request deletion",
          "Lead and campaign data is retained for the duration of your client engagement",
          "You may request complete deletion of your data by contacting us at the email address below",
          "Upon account termination, all associated data is permanently deleted within 30 days",
        ],
      },
    ],
  },
  {
    id: "your-rights",
    icon: Shield,
    title: "Your Rights",
    content: [
      {
        text: "You have the right to:",
        list: [
          "Access the personal data we hold about you",
          "Request correction of inaccurate or incomplete data",
          "Request deletion of your data (right to be forgotten)",
          "Disconnect any social media account at any time, immediately revoking our access",
          "Export your data in a machine-readable format",
          "Withdraw consent for data processing at any time",
        ],
      },
    ],
  },
  {
    id: "contact",
    icon: Mail,
    title: "Contact Us",
    content: [
      {
        text: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:",
        contactInfo: true,
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#020817] text-slate-800 dark:text-slate-200">

      {/* ── Hero ── */}
      <header className="relative overflow-hidden border-b border-slate-200 dark:border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
              <Shield size={20} className="text-indigo-400" />
            </div>
            <span className="text-sm font-medium text-indigo-400 tracking-wide uppercase">
              Legal
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Privacy Policy
          </h1>

          <p className="mt-4 text-lg text-slate-400 max-w-2xl leading-relaxed">
            How Plexus Digitals collects, uses, protects, and manages your data
            within the DGCC (Digital Growth Command Centre) platform.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span>Effective Date: March 18, 2026</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span>Last Updated: March 18, 2026</span>
          </div>
        </div>
      </header>

      {/* ── Body ── */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex gap-12">

        {/* Sidebar Nav (desktop) */}
        <aside className="hidden lg:block w-56 shrink-0">
          <nav className="sticky top-8 space-y-1">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3">
              Sections
            </p>
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
                  activeSection === s.id
                    ? "bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 font-medium"
                    : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
                }`}
              >
                <ChevronRight
                  size={14}
                  className={`shrink-0 transition-transform ${
                    activeSection === s.id ? "rotate-90 text-indigo-500" : ""
                  }`}
                />
                <span className="truncate">{s.title}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 space-y-12">

          {/* Intro */}
          <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1220] p-6">
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Plexus Digitals (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) operates the DGCC (Digital
              Growth Command Centre) platform. This Privacy Policy explains how
              we collect, use, store, and protect information when you use our
              services, including integrations with third-party social media
              platforms such as Facebook, Instagram, LinkedIn, and Twitter/X. By
              using DGCC, you agree to the practices described in this policy.
            </p>
          </div>

          {/* Sections */}
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-8 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1220] p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <Icon size={18} className="text-indigo-500 dark:text-indigo-400" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold">{section.title}</h2>
                </div>

                <div className="space-y-5">
                  {section.content.map((block, i) => (
                    <div key={i}>
                      {block.subtitle && (
                        <h3 className="font-semibold text-sm mb-1.5 text-slate-700 dark:text-slate-300">
                          {block.subtitle}
                        </h3>
                      )}

                      {block.text && (
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {block.text}
                        </p>
                      )}

                      {block.list && (
                        <ul className="mt-2 space-y-2">
                          {block.list.map((item, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}

                      {block.contactInfo && (
                        <div className="mt-4 p-4 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-2 text-sm">
                          <p className="font-semibold text-slate-700 dark:text-slate-300">
                            Plexus Digitals
                          </p>
                          <p className="text-slate-600 dark:text-slate-400">
                            Email:{" "}
                            <a
                              href="mailto:privacy@plexusdigitals.com"
                              className="text-indigo-500 hover:underline"
                            >
                              privacy@plexusdigitals.com
                            </a>
                          </p>
                          <p className="text-slate-600 dark:text-slate-400">
                            Address: Prayagraj, Uttar Pradesh, India
                          </p>
                          <p className="text-xs text-slate-500 mt-2">
                            We will respond to all privacy-related requests
                            within 30 days.
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {/* Footer note */}
          <div className="text-center py-8 border-t border-slate-200 dark:border-white/10">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} Plexus Digitals. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 mt-1">
              This policy may be updated periodically. Changes will be posted on
              this page with a revised date.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}