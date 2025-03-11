import { db } from "./db";

async function main() {
  await db.post.deleteMany();
  await db.post.createMany({
    data: [
      {
        title: "Understanding React Hooks",
        content:
          "React Hooks revolutionized functional components by enabling state and side effects. The useState and useEffect hooks are among the most commonly used.",
        author: "Jane Doe",
      },
      {
        title: "Why TypeScript is a Game Changer",
        content:
          "TypeScript provides static typing, making JavaScript development more robust. It helps catch errors early and improves code maintainability.",
        author: "John Smith",
      },
      {
        title: "Introduction to Node.js",
        content:
          "Node.js allows JavaScript to run on the server, making it possible to build scalable and fast backend applications. It's event-driven and non-blocking.",
        author: "Alice Johnson",
      },
      {
        title: "CSS Grid vs Flexbox",
        content:
          "CSS Grid is great for two-dimensional layouts, while Flexbox is ideal for one-dimensional alignment. Knowing when to use each is key to responsive design.",
        author: "David Brown",
      },
      {
        title: "Exploring Angular Standalone Components",
        content:
          "Angular 14 introduced standalone components, making it easier to build modular applications without relying on NgModules.",
        author: "Victoria Phu",
      },
    ],
  });
}

main()
  .then(async () => {
    console.log("👍🏽 Seeded database successfully!");
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
