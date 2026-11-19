#!/usr/bin/env bash
# One-time setup: switch the repository's Pages source to GitHub Actions,
# so the deploy workflow can publish without touching the Settings UI.
# Requires the GitHub CLI (`gh`) authenticated with admin rights on the repo.
set -euo pipefail

repo="${1:-$(gh repo view --json nameWithOwner --jq .nameWithOwner)}"

if gh api "repos/${repo}/pages" >/dev/null 2>&1; then
  gh api --method PUT "repos/${repo}/pages" -f build_type=workflow >/dev/null
  echo "Pages source set to GitHub Actions for ${repo}"
else
  gh api --method POST "repos/${repo}/pages" -f build_type=workflow >/dev/null
  echo "Pages enabled (GitHub Actions source) for ${repo}"
fi
