import type { Metadata } from "next";
import "./globals.css";
import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JobSphere",
  description: "Find Jobs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="min-h-screen bg-gray-950 text-gray-100">
          <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-lg">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-purple-500" />
                <span className="text-xl font-bold">JobSphere</span>
              </div>
              <nav className="hidden space-x-6 md:flex">
                <Link
                  href="/"
                  className="text-sm font-medium hover:text-purple-400"
                >
                  Find Jobs
                </Link>
                <Link
                  href="/companies"
                  className="text-sm font-medium hover:text-purple-400"
                >
                  Companies
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-purple-400"
                >
                  Career Advice
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-purple-400"
                >
                  Salary Guide
                </Link>
              </nav>
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="hidden text-sm font-medium hover:text-purple-400 md:inline-block"
                >
                  Sign In
                </Link>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Post a Job
                </Button>
              </div>
            </div>
          </header>

          {children}

          {/* Footer */}
          <footer className="border-t border-gray-800 bg-gray-900 py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <Briefcase className="h-6 w-6 text-purple-500" />
                    <span className="text-xl font-bold">JobSphere</span>
                  </div>
                  <p className="mb-4 text-sm text-gray-400">
                    Connecting talented professionals with the world's best
                    companies.
                  </p>
                </div>
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                    For Job Seekers
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>
                      <Link href="#" className="hover:text-purple-400">
                        Browse Jobs
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-purple-400">
                        Career Advice
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-purple-400">
                        Resume Builder
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-purple-400">
                        Salary Calculator
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                    For Employers
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>
                      <Link href="#" className="hover:text-purple-400">
                        Post a Job
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-purple-400">
                        Talent Search
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-purple-400">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-purple-400">
                        Employer Resources
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                    Company
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>
                      <Link href="#" className="hover:text-purple-400">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-purple-400">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-purple-400">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-purple-400">
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
                <p>
                  © {new Date().getFullYear()} JobSphere. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
