#!/bin/zsh

# Quick helper for staging, committing, and pushing current repository changes.
# Usage:
#   ./push-changes.sh "Commit message here"
#   ./push-changes.sh          # uses default message if none provided

set -e
cd "$(dirname "$0")"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Error: not inside a git repository."
  exit 1
fi

branch=$(git rev-parse --abbrev-ref HEAD)
remote=$(git config branch."$branch".remote || true)
upstream=$(git config branch."$branch".merge || true)

if [[ -z "$remote" || -z "$upstream" ]]; then
  echo "Warning: current branch '$branch' has no upstream set."
  echo "You can still push manually later with: git push --set-upstream origin $branch"
fi

message="$*
"
message=${message:-"Update website content"}

if git diff --quiet --ignore-submodules --cached && git diff --quiet --ignore-submodules; then
  echo "No changes to commit."
  git status --short
  exit 0
fi

git add .

echo "Committing changes to '$branch'..."
git commit -m "$message"

echo "Pushing to '$branch'..."
git push

echo "Done."
