#!/usr/bin/env bash
# Rebuild ./public from the design-canvas source. Run after editing the .dc.html,
# then commit and push — Cloudflare deploys what is in ./public.
set -euo pipefail
cd "$(dirname "$0")"
SRC="Claude Contest Landing v3 - Dark.dc.html"

rm -rf public && mkdir -p public/uploads
cp "$SRC" public/index.html
cp support.js public/
cp -R _ds assets public/

# only ship the uploads the page actually references
grep -o 'uploads/[^"]*' "$SRC" | sort -u | while read -r f; do
  cp "$f" "public/${f}"
done

echo "public/ rebuilt: $(find public -type f | wc -l | tr -d ' ') files, $(du -sh public | cut -f1)"
