#!/bin/bash
# Simple polling approach - checks for changes every 2 seconds

echo "Starting auto-sync (polling every 2 seconds)..."
echo "Press Ctrl+C to stop"

# Run initial sync
./sync-data.sh

# Store checksums to detect changes
get_checksums() {
    find data -name "*.json" -exec md5sum {} \; 2>/dev/null | sort
}

last_checksums=$(get_checksums)

while true; do
    sleep 2
    current_checksums=$(get_checksums)
    
    if [ "$current_checksums" != "$last_checksums" ]; then
        echo "Change detected, syncing files..."
        ./sync-data.sh
        last_checksums=$current_checksums
    fi
done