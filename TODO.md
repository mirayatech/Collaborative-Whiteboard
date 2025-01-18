# Levi

A real-time collaborative whiteboard built with Next.js and Liveblocks. Share a link and start collaborating instantly!

## 🎯 MVP Scope
- [ ] Real-time drawing canvas where multiple users can draw simultaneously
- [ ] See other users' cursors
- [ ] Basic drawing tools (pen, eraser)
- [ ] Different colors
- [ ] Clear canvas option
- [ ] Shareable link system
- [ ] Sticky notes functionality

## 📋 Development Roadmap

### 1. 🔗 Link Sharing System
- [ ] Generate unique room ID for each session
- [ ] Create shareable link functionality
- [ ] Add copy link button
- [ ] Show current participants count
- [ ] Add room joining flow

### 2. 🏗️ Project Structure
- [ ] Fix typo in page.tsx (change "componenta" to "components")
- [ ] Create new components folder structure:
```
components/
  Canvas/
    Canvas.tsx
    Toolbar.tsx
    Cursor.tsx
  Room/
    RoomLink.tsx
    ParticipantCount.tsx
  StickyNotes/
    StickyNote.tsx
    NotesList.tsx
```

### 3. 🎨 Canvas Features
- [ ] Implement Canvas.tsx with HTML canvas element
- [ ] Add full-screen responsive layout
- [ ] Setup mouse event listeners
- [ ] Create drawing context
- [ ] Test local drawing works

### 4. 👆 Real-time Features
- [ ] Update liveblocks.config.ts for cursors
- [ ] Implement cursor presence
- [ ] Show other users' cursors with different colors
- [ ] Add smooth cursor movement

### 5. ✏️ Drawing Tools
- [ ] Create pen tool
- [ ] Add color selection
- [ ] Implement eraser tool
- [ ] Add clear canvas button
- [ ] Sync drawing data between users

### 6. 📝 Sticky Notes Feature
- [ ] Create StickyNote component
- [ ] Add create/edit/delete functionality
- [ ] Make notes draggable
- [ ] Implement real-time sync for notes
- [ ] Add text editing within notes
- [ ] Color options for notes

### 7. 🧰 Toolbar
- [ ] Tool selection (pen/eraser)
- [ ] Color picker (start with 6 basic colors)
- [ ] Clear canvas button
- [ ] Add sticky note creation button
- [ ] Style with Tailwind

## 🛠️ Tech Stack

- Next.js 15.1.5
- React 19
- TypeScript
- Liveblocks
- Tailwind CSS
 