import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50/50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-gray-600">
            © {year} MarkitAI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#waitlist" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
              Waitlist
            </Link>
            <Link href="#faq" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
              FAQ
            </Link>
            <Link href="#how-it-works" className="text-sm text-gray-600 hover:text-brand-purple transition-colors">
              How it works
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
