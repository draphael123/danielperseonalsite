# Daniel's Leisure Activities Website

A beautiful, interactive website for tracking and rating leisure activities.

## Features

- **794+ Activities** - Comprehensive list of leisure activities
- **Enjoyment Rating System** - Rate activities from 1 (unlikely) to 3 (probable)
- **Search & Filter** - Find activities quickly
- **Sort Options** - Sort by rating, alphabetical, etc.
- **Suggestions** - AI-powered activity recommendations
- **Export/Import** - Backup and restore your data
- **Cloud Sync** - Progress saved across devices and deploys
- **Keyboard Shortcuts** - Power user features

## Cloud Storage Setup

The website includes API endpoints for cloud storage (`/api/save` and `/api/load`). Currently, these are placeholder functions that need to be connected to a database.

### To Enable Cloud Storage:

1. **Option 1: Use a Database Service**
   - Set up MongoDB, PostgreSQL, or Firebase
   - Update `api/save.js` and `api/load.js` to connect to your database
   - Add authentication if needed

2. **Option 2: Use Vercel KV (Redis)**
   - Install Vercel KV: `npm install @vercel/kv`
   - Update the API functions to use KV storage

3. **Option 3: Use a Third-Party Service**
   - Firebase Firestore
   - Supabase
   - PlanetScale
   - Any other database service

### Current Behavior

- Data is saved to **localStorage** (works immediately, browser-specific)
- Cloud sync is attempted but currently uses localStorage as fallback
- Progress persists within the same browser/device
- For cross-device sync, implement database storage in the API functions

## Development

```bash
# Install dependencies (if using npm packages)
npm install

# Run locally with Vercel CLI
vercel dev
```

## Deployment

The site is automatically deployed to Vercel when pushed to GitHub.

## Keyboard Shortcuts

- `Ctrl+F` / `Cmd+F` - Focus search
- `Ctrl+E` / `Cmd+E` - Export data
- `Ctrl+I` / `Cmd+I` - Import data

## License

Personal project for Daniel Raphael

