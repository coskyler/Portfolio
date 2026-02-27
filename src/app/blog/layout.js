export default function BlogLayout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <article
          className="
            prose prose-invert prose-lg max-w-none
            prose-headings:font-semibold
            prose-headings:tracking-tight
            prose-p:leading-7
            prose-p:text-zinc-200
            prose-a:text-blue-400
            prose-a:no-underline hover:prose-a:underline
            prose-code:text-zinc-200
            prose-code:bg-zinc-800
            prose-code:px-1.5
            prose-code:py-0.5
            prose-code:rounded
            prose-pre:bg-zinc-900
            prose-pre:border
            prose-pre:border-zinc-800
            prose-strong:text-zinc-100
            prose-h1:mb-4
            prose-h2:mb-3
            prose-h3:mb-2
          "
        >
          {children}
        </article>
      </div>
    </div>
  );
}