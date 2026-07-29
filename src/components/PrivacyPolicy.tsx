import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="pt-28 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-brand-green uppercase bg-brand-green/10 rounded-full border border-brand-green/20">
            LEGAL
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy-dark mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-base text-text-muted font-semibold">
            Last Updated: July 29, 2026
          </p>
        </div>

        <div className="prose prose-navy max-w-none text-text-primary">
          <p className="text-lg leading-relaxed mb-8">
            At CVKaro, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use CVKaro – Career Intelligence Platform.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark mt-10 mb-4">1. Information We Collect</h2>
          <p className="mb-4">We may collect the following information:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Mobile Number</li>
            <li>Educational Information</li>
            <li>Skills and Career Preferences</li>
            <li>Resume and Supporting Documents</li>
            <li>Career Assessment Responses</li>
            <li>Usage Analytics</li>
            <li>Device and Browser Information</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-navy-dark mt-10 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Provide AI-powered Career Discovery</li>
            <li>Generate personalized Career Intelligence Reports</li>
            <li>Build and analyze resumes</li>
            <li>Recommend learning paths</li>
            <li>Improve our platform and services</li>
            <li>Communicate important updates</li>
            <li>Provide customer support</li>
            <li>Ensure platform security</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-navy-dark mt-10 mb-4">3. Resume & Assessment Data</h2>
          <p className="mb-4">
            Your uploaded resumes and career assessment responses are used only to provide personalized recommendations and AI-powered analysis.
          </p>
          <p className="mb-6 font-semibold text-brand-green">
            We do not sell your personal data to third parties.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark mt-10 mb-4">4. Data Security</h2>
          <p className="mb-6">
            We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark mt-10 mb-4">5. Third-Party Services</h2>
          <p className="mb-4">CVKaro may use trusted third-party services for:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Authentication</li>
            <li>Cloud Storage</li>
            <li>Analytics</li>
            <li>Payment Processing</li>
            <li>AI Services</li>
            <li>Email Notifications</li>
          </ul>
          <p className="mb-6">
            These providers process data in accordance with their own privacy policies.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark mt-10 mb-4">6. Cookies</h2>
          <p className="mb-4">We use cookies to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Keep you signed in</li>
            <li>Improve website performance</li>
            <li>Remember your preferences</li>
            <li>Analyze website usage</li>
          </ul>
          <p className="mb-6">
            You can manage cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark mt-10 mb-4">7. Your Rights</h2>
          <p className="mb-4">You may request to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Access your personal data</li>
            <li>Update inaccurate information</li>
            <li>Delete your account</li>
            <li>Download your personal data</li>
            <li>Withdraw consent where applicable</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-navy-dark mt-10 mb-4">8. Children's Privacy</h2>
          <p className="mb-6">
            CVKaro is intended for students, graduates, and professionals. If a user is under the age required by applicable law, parental or guardian consent may be required.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark mt-10 mb-4">9. Policy Updates</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. Changes will be published on this page with the revised "Last Updated" date.
          </p>

          <h2 className="text-2xl font-display font-bold text-navy-dark mt-10 mb-4">10. Contact Us</h2>
          <p className="mb-4">
            If you have questions regarding this Privacy Policy, please contact us:
          </p>
          <div className="bg-light-bg p-6 rounded-xl border border-border-gray">
            <p className="font-bold text-navy-dark mb-2">CVKaro – Career Intelligence Platform</p>
            <p className="flex items-center gap-2 mb-2 text-text-primary">
              <span>📧</span>
              <a href="mailto:support@cvkaro.com" className="hover:text-brand-green transition-colors">support@cvkaro.com</a>
            </p>
            <p className="flex items-center gap-2 text-text-primary">
              <span>🌐</span>
              <a href="https://www.cvkaro.com" className="hover:text-brand-green transition-colors">www.cvkaro.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
