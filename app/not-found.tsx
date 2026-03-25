import Link from "next/link";

import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f5efe6] text-[#1c1713]">
      <Container className="flex min-h-screen flex-col items-start justify-center py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#70655b]">
          404 / Style route missing
        </p>
        <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">
          This style does not exist in the library.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#70655b]">
          Go back to the homepage to search by keyword, browse by family, or open one of the live demos in the catalog.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#1c1713] px-5 py-3 text-sm font-semibold text-[#f5efe6] transition hover:-translate-y-0.5"
        >
          Back to style library
        </Link>
      </Container>
    </main>
  );
}
