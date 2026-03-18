export default function OverviewPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[50vh]">
      <h1 className="text-3xl font-semibold mb-2">Overview</h1>
      <p className="mb-6 text-muted-foreground">
        View recent activity and key stats for your team.
      </p>
      <div className="mt-10">
        <p className="mb-4 text-lg">No recent activity yet. Add a customer to get started.</p>
        <button
          className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
        >
          Add Customer
        </button>
      </div>
    </section>
  );
}