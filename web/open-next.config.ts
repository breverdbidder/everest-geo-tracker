import { defineCloudflareConfig } from '@opennextjs/cloudflare';

// Incremental cache is deliberately NOT configured: the Cloudflare account is on
// Workers Free and R2 is not enabled (proven Sep 5 2026 during the Vercel exit --
// R2 returned API error 10042 and limits.cpu_ms was rejected with code 100328).
// Enable an R2 incremental cache here only after R2 is turned on for the account.
export default defineCloudflareConfig();
