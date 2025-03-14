import { db } from "@/prisma/db";
import DeletePostButton from "../ui/delete-post-button";

//  här exporterar vi alla URL parametrar för alla posts
export async function generateStaticParams() {
  const posts = await db.post.findMany();

//   Här berättar den att detta är datan som den ska generera ut
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

// huvudsakliga som exporteras
export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await db.post.findUnique({ where: { slug } });

  if (!post) return <main>404</main>;

  return (
    <main className="grid gap-8 p-4">
      <article key={post.id} className="grid">
        <section className="flex justify-between items-center">
          <span className="text-slate-200">
            {post.createdAt.toLocaleDateString()}
          </span>
          <DeletePostButton post={post} />
        </section>
        <h2 className="text-2xl">{post.title}</h2>
        <p className="text-slate-300">{post.content}</p>
        <p className="text-slate-400">Author: {post.author}</p>
      </article>
    </main>
  );
}
