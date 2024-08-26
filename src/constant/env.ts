export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

// showLogger is true in development (local), 
// and in other environments, it's controlled by the NEXT_PUBLIC_SHOW_LOGGER environment variable.
export const showLogger = isLocal
  ? true
  : (process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false);