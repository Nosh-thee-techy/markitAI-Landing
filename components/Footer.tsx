import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-gray-800 text-gray-200"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold text-white">
              Markit<span className="text-amber-400">AI</span>
            </p>
            <p className="mt-2 text-sm text-gray-300">
              Your virtual marketing team powered by AI.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-amber-200">Contact</h4>
            <a
              href="mailto:hello@markitai.com"
              className="mt-2 block text-sm text-gray-300 hover:text-amber-300 transition-colors"
            >
              hello@markitai.com
            </a>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-amber-200">Product</h4>
            <div className="mt-2 flex flex-col gap-1">
              <Link href="#waitlist" className="text-sm text-gray-300 hover:text-amber-300 transition-colors">
                Waitlist
              </Link>
              <Link href="#how-it-works" className="text-sm text-gray-300 hover:text-amber-300 transition-colors">
                How it works
              </Link>
              <Link href="#faq" className="text-sm text-gray-300 hover:text-amber-300 transition-colors">
                FAQ
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-amber-200">Legal</h4>
            <div className="mt-2 flex flex-col gap-1">
              <Link href="/privacy" className="text-sm text-gray-300 hover:text-amber-300 transition-colors">
                Privacy policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-300 hover:text-amber-300 transition-colors">
                Terms of use
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-8 sm:flex-row">
          <p className="text-sm text-gray-400">
            © {year} MarkitAI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://twitter.com/markitai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-300 transition-colors"
              aria-label="Twitter"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/markitai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-300 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v18.542C0 21.227.792 22 1.771 22h20.451C23.2 22 24 21.227 24 20.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
