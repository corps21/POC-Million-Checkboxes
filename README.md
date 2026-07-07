# Million Checkboxes POC

This project is a lightweight proof of concept for rendering and synchronizing a very large checkbox grid in the browser. It uses a Node.js server with Express and Socket.IO to broadcast checkbox changes to all connected clients in real time.

## What it does

- Renders a large grid of checkboxes in a scrollable view
- Tracks checkbox state on the server
- Syncs toggles across connected clients instantly
- Loads the current shared state when a new client connects

## Tech stack

- TypeScript
- Node.js
- Express
- Socket.IO

## Getting started

1. Install dependencies
   ```bash
   pnpm install
   ```

2. Start the development server
   ```bash
   pnpm dev
   ```

3. Open the app in your browser
   ```text
   http://localhost:3000
   ```

## Notes

- The current demo uses an in-memory state store, so changes are not persisted across restarts.
- Opening multiple browser tabs or windows will show real-time synchronization between clients.
- This is intended as a POC and not yet a production-ready scaling or persistence solution.

## Project structure

- [src/index.ts](src/index.ts) - Server setup, Socket.IO events, and shared checkbox state
- [public/index.html](public/index.html) - Client UI and checkbox grid rendering

## Demo

https://github.com/user-attachments/assets/eb40f236-22b1-47c9-bb2b-1dd011cc2b7b



