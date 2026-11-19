#!/usr/bin/env bash
# One-time bootstrap: create the GitHub repository, push this project, and set
# the Pages source to GitHub Actions. After this, every push to main deploys.
#
# Usage: scripts/deploy-init.sh [--owner NAME] [--repo NAME] [--private]
#   --owner  GitHub user or organization (default: reding-gt)
#   --repo   repository name             (default: gtrworks)
#
# Requires the GitHub CLI (`gh`), signed in as a user allowed to create repos
# under the owner.
set -euo pipefail

owner="reding-gt"
repo_name="gtrworks"
visibility="--public"

while [ $# -gt 0 ]; do
  case "$1" in
    --owner) owner="${2:?--owner needs a value}"; shift 2 ;;
    --repo) repo_name="${2:?--repo needs a value}"; shift 2 ;;
    --private) visibility="--private"; shift ;;
    *) echo "Unknown argument: $1" >&2; exit 2 ;;
  esac
done

full_name="${owner}/${repo_name}"

cd "$(dirname "$0")/.."

command -v gh >/dev/null || { echo "GitHub CLI (gh) is required: https://cli.github.com" >&2; exit 1; }
gh auth status >/dev/null || { echo "Run 'gh auth login' first." >&2; exit 1; }

if [ ! -d .git ]; then
  git init -q -b main
  git add .
  git commit -q -m "Initial commit"
fi

if gh repo view "$full_name" >/dev/null 2>&1; then
  echo "Repository ${full_name} already exists; pushing to it."
  git remote get-url origin >/dev/null 2>&1 || git remote add origin "https://github.com/${full_name}.git"
  git push -u origin main
else
  gh repo create "$full_name" "$visibility" --source=. --remote=origin --push
fi

./scripts/enable-pages.sh "$full_name"

echo
echo "Pushed to https://github.com/${full_name}"
echo "Deploy workflow: https://github.com/${full_name}/actions"
if [ "$repo_name" = "${owner}.github.io" ]; then
  echo "Site: https://${repo_name}/"
else
  echo "Site: https://${owner}.github.io/${repo_name}/"
fi
