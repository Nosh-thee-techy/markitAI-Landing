import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-brand-dark">Terms of use</h1>
      <p className="mt-4 text-gray-600">
        This is a placeholder. Add your terms of use content here before launch.
      </p>
      <Link href="/" className="mt-6 inline-block text-brand-purple hover:underline">
        ← Back to home
      </Link>
    </div>
  );
}
