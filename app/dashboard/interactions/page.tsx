export default function InteractionsPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[50vh]">
      <h1 className="text-3xl font-semibold mb-2">Interactions</h1>
      <p className="mb-6 text-muted-foreground">
        Log calls, meetings, or notes for your customers.
      </p>
      <div className="mt-10">
        <p className="mb-4 text-lg">No interactions logged yet. Select a customer to begin tracking conversations.</p>
        <button
          className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
        >
          Log Interaction
        </button>
      </div>
    </section>
  );
}