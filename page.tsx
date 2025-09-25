import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <div className="space-y-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Next.js + Vercel Starter
        </h1>
        <p className="text-lg text-neutral-300">
          Clean, minimal, production-ready. TypeScript, Tailwind, App Router, and a sample API route.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <Card title="Docs" href="https://nextjs.org/docs">Read the Next.js docs</Card>
          <Card title="API Route" href="/api/hello">Try the sample API route</Card>
          <Card title="Deploy on Vercel" href="https://vercel.com/new">Connect GitHub → Vercel</Card>
          <Card title="Source" href="https://github.com">Push this template</Card>
        </div>

        <pre className="rounded-2xl bg-neutral-900 p-6 text-sm text-neutral-200 overflow-x-auto">
{`# install deps
pnpm i   # or: npm i  |  yarn

# local dev
pnpm dev # or: npm run dev

# build & start
pnpm build && pnpm start`}
        </pre>
      </div>
    </main>
  );
}

function Card({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} className="block rounded-2xl border border-neutral-800 hover:border-neutral-700 p-5 transition">
      <div className="text-xl font-semibold">{title}</div>
      <div className="text-neutral-400 text-sm mt-1">{href}</div>
    </Link>
  );
}
