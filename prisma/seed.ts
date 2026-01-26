import { PrismaClient } from "@prisma/client";
import { mockQatas } from "../app/lib/_mockQatas";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding ...");

  for (const qata of mockQatas) {
    // 1. Create or connect the User (Author)
    // We use upsert to avoid creating duplicates if you run this multiple times
    const user = await prisma.user.upsert({
      where: { username: qata.author.username },
      update: {}, // No updates if exists
      create: {
        username: qata.author.username,
        name: qata.author.name,
        avatar: qata.author.avatar,
        // Mock data doesn't have email, so we generate a fake one
        email: `${qata.author.username}@example.com`,
      },
    });

    // 2. Create the Qata (Quote) connected to that User
    await prisma.qata.create({
      data: {
        content: qata.content,
        timestamp: qata.timestamp,
        loves: qata.loves,
        quotes: qata.quotes,
        shares: qata.shares,
        imageUrl: qata.imageUrl,
        userId: user.id,
      },
    });
    console.log(`Created qata with id: ${qata.id}`);
  }
  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
