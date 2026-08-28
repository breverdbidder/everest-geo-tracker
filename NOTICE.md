# NOTICE

This repository is a fork of [ansvisor/ansvisor](https://github.com/ansvisor/ansvisor)
(commit range up to 2026-08-27), an open-source AI Search Intelligence Platform
created by **Empler AI Inc.** and released under the MIT License. See `LICENSE`
for the full upstream copyright and license text, which is preserved unmodified.

Upstream project: https://github.com/ansvisor/ansvisor
Upstream homepage: https://ansvisor.com

## What Everest Capital USA changed to self-host this fork

See the "Self-hosting on our Supabase" section of `README.md` for the full,
maintained list of changes. In summary: database objects were moved from the
upstream `public` schema into a dedicated `geo_tracker` schema to avoid
collision with existing tables in our shared Supabase project
(`mocerqjnksmhcjzxrewo`), and the app runs in self-hosted mode
(`IS_CLOUD=false`) against our own credentials.

No upstream application logic was altered beyond schema-qualification changes
required for the above. Attribution is preserved per the MIT License; this
NOTICE file and the unmodified `LICENSE` file must be retained in any further
redistribution of this fork.
