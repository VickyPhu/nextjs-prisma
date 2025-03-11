import { createPost } from "../actions";

export default function NewPostPage() {
  return (
    <main className="p-4">
      <form action={createPost} className="grid gap-2">
        <h2 className="text-2xl">Add new post</h2>
        <input
          className="bg-slate-600 px-2 py-1 rounded"
          name="title"
          type="text"
          placeholder="Add title..."
        />
        <textarea
          className="bg-slate-600 px-2 py-1 rounded"
          name="content"
          placeholder="Add content..."
        />
        <input
          className="bg-slate-600 px-2 py-1 rounded"
          name="author"
          type="text"
          placeholder="Add author..."
        />
        <button className="px-2 py-1 rounded bg-slate-700 hover:bg-slate-800 cursor-pointer">
          Save
        </button>
      </form>
    </main>
  );
}
