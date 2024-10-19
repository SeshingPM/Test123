export default function HelpCenterPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Help Center</h1>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">How do I get started with InboxAgency.io?</h3>
            <p>To get started, simply sign up for an account and our team will guide you through the onboarding process.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">What types of businesses do you work with?</h3>
            <p>We work with businesses of all sizes across various industries. Our solutions are tailored to meet your specific needs.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">How can I contact support?</h3>
            <p>You can reach our support team via email at support@inboxagency.io or through the contact form on our website.</p>
          </div>
        </div>
      </div>
    </div>
  );
}