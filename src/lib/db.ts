import { PrismaClient } from '@/app/generated/prisma/client';
import { env } from '@/lib/env';
import { PrismaPg } from '@prisma/adapter-pg';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const adapter = new PrismaPg({
  connectionString: env.DATABASE_URL
});

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export { prisma };
