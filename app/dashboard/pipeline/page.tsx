export default function PipelinePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[50vh]">
      <h1 className="text-3xl font-semibold mb-2">Sales Pipeline</h1>
      <p className="mb-6 text-muted-foreground">
        Track deals as they move through your pipeline stages.
      </p>
      <div className="mt-10">
        <p className="mb-4 text-lg">Your sales pipeline is empty. Add a deal to start tracking progress.</p>
        <button
          className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
        >
          Add Deal
        </button>
      </div>
    </section>
  );
}