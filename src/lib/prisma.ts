// lib/prisma.ts
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

// For the application, we use the pooled connection (port 6543)
// Make sure this is in your vskc-platform/.env file!
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('CRITICAL: DATABASE_URL is missing in your .env file');
}

const adapter = new PrismaPg({ connectionString });

// This pattern prevents Next.js from exhausting your database connection limit
// during hot-reloads in development mode.
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;