export default function CustomersPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[50vh]">
      <h1 className="text-3xl font-semibold mb-2">Customers</h1>
      <p className="mb-6 text-muted-foreground">
        No customers found. Add your first customer to start building relationships.
      </p>
      <div className="mt-10">
        <button
          className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
        >
          Add Customer
        </button>
      </div>
    </section>
  );
}