"use client"

import Post from "./content.mdx";

export default function Page() {
    return (
        <main className="mx-auto max-w-3xl">
            <article className="prose prose-invert">
                <Post />
            </article>
        </main>
    );
}