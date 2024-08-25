/* eslint-disable @typescript-eslint/no-namespace */
/**
 * Configuration for type-safe environment variables.
 * Imported through src/app/page.tsx
 * @see https://x.com/mattpocockuk/status/1760991147793449396
 */

import dotenv from 'dotenv';
import { z } from 'zod';

// Load environment variables from .env file
dotenv.config();

// Define the schema for your environment variables
const envSchema = z.object({
  NODE_ENV: z.string().optional().default('development'),
  // NEXT_PUBLIC_API_URL: z.string().url(),
  // Add other environment variables here
});

// Validate the environment variables
const env = envSchema.safeParse(process.env);

if (!env.success) {
  throw new Error(
    `Invalid environment variables: ${JSON.stringify(env.error.format())}`,
  );
}

// Export the validated environment variables
export const ENV = env.data;
