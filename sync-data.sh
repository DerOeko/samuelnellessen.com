#!/bin/bash
# Sync data files from data/ to static/data/
echo "Syncing JSON data files..."
cp -r data/* static/data/
echo "Data files synced successfully!"