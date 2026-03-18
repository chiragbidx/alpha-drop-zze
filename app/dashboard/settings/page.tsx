import dynamic from "next/dynamic";

export default function SettingsPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[50vh]">
      <h1 className="text-3xl font-semibold mb-2">Settings</h1>
      <p className="mb-6 text-muted-foreground">
        Manage your Litestack profile, preferences, and notifications.
      </p>
    </section>
  );
}