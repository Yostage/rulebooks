#!/usr/bin/env bash
# Poll the GitHub Pages build until it finishes, then verify the live site.
#
# Usage: bash tools/verify_deploy.sh [needle]
#   needle  optional string that must appear in the live index.html
#           (e.g. a newly added game's script path: assets/js/games/defenders.js)
#
# Run from anywhere inside the repo. Requires gh (authed) + curl.
set -u
export MSYS_NO_PATHCONV=1  # stop Git Bash rewriting API paths

REPO="Yostage/rulebooks"
URL="https://yostage.github.io/rulebooks/"
NEEDLE="${1:-}"

echo "Polling Pages build for $REPO ..."
for i in $(seq 1 30); do
  status=$(gh api "repos/$REPO/pages/builds/latest" --jq .status 2>/dev/null)
  echo "  [$i] status: ${status:-<no response>}"
  case "$status" in
    built) break ;;
    errored)
      gh api "repos/$REPO/pages/builds/latest" --jq .error.message
      echo "BUILD FAILED"; exit 1 ;;
  esac
  sleep 5
done
if [ "${status:-}" != "built" ]; then echo "Timed out waiting for build"; exit 1; fi

# Cache-bust so we see the fresh deploy, not a CDN-cached copy.
body=$(curl -fsSL "$URL?cb=$(date +%s)")
if [ -z "$body" ]; then echo "FAILED to fetch $URL"; exit 1; fi
echo "Fetched $URL (${#body} bytes)"

if [ -n "$NEEDLE" ]; then
  if echo "$body" | grep -qF "$NEEDLE"; then
    echo "OK: found \"$NEEDLE\" in live page"
  else
    echo "MISSING: \"$NEEDLE\" not in live page (CDN cache lag? retry in ~1 min)"
    exit 1
  fi
fi
echo "Deploy verified."
