"use client"

import Post from "./content.mdx";

export default function Page() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-12">
            <article className="prose prose-invert max-w-none">
                <Post />
            </article>
        </main>
    );
}