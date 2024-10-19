export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Careers at InboxAgency.io</h1>
      <p className="text-center mb-8">
        Join our team of passionate marketers and developers to shape the future of email marketing.
      </p>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Senior Email Marketing Specialist</li>
          <li>Full Stack Developer</li>
          <li>Customer Success Manager</li>
          <li>Data Analyst</li>
        </ul>
        <p className="mt-8">
          To apply, please send your resume and cover letter to careers@inboxagency.io
        </p>
      </div>
    </div>
  );
}