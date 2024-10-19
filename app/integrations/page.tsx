export default function IntegrationsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Integrations</h1>
      <p className="text-center mb-8">
        InboxAgency.io seamlessly integrates with your favorite tools and platforms to streamline your email marketing workflow.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['CRM Systems', 'E-commerce Platforms', 'Analytics Tools'].map((integration, index) => (
          <div key={index} className="border p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4">{integration}</h3>
            <p>Integration details coming soon.</p>
          </div>
        ))}
      </div>
    </div>
  );
}