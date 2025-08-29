#!/bin/bash
# File watcher that automatically syncs data files

echo "Starting file watcher for data directory..."
echo "Watching for changes in data/*.json files"
echo "Press Ctrl+C to stop"

# Run initial sync
./sync-data.sh

# Watch for changes using inotifywait (install with: sudo apt install inotify-tools)
if command -v inotifywait >/dev/null 2>&1; then
    while inotifywait -e modify,create,delete data/*.json 2>/dev/null; do
        echo "Change detected, syncing files..."
        ./sync-data.sh
    done
else
    echo "inotifywait not found. Installing inotify-tools..."
    echo "Please run: sudo apt install inotify-tools"
    echo "Then restart this script."
fi