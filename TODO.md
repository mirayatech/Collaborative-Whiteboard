
### 🎯 MVP Scope:
- [ ] Real-time drawing canvas where multiple users can draw simultaneously
- [ ] See other users' cursors
- [ ] Basic drawing tools (pen, eraser)
- [ ] Different colors
- [ ] Clear canvas option

### 📋 Detailed To-Do List:

1. 🏗️ Setup Project Structure
   - [ ] Fix typo in page.tsx (change "componenta" to "components")
   - [ ] Create new components folder structure:
     ```
     components/
       Canvas/
         Canvas.tsx
         Toolbar.tsx
         Cursor.tsx
       Room/ (already exists)
     ```

2. ### 🎨 Create Basic Canvas Component
   - [ ] Implement Canvas.tsx with HTML canvas element
   - [ ] Add full-screen responsive layout
   - [ ] Setup basic mouse event listeners
   - [ ] Create drawing context
   - [ ] Test local drawing works

3. ### 👆 Add Real-time Cursor Tracking
   - [ ] Update liveblocks.config.ts to include cursor position
   - [ ] Implement cursor presence with Liveblocks
   - [ ] Show other users' cursors with different colors
   - [ ] Add smooth cursor movement

4. ### ✏️ Implement Drawing Functionality
   - [ ] Create basic pen tool
   - [ ] Add stroke color selection
   - [ ] Implement eraser tool
   - [ ] Add clear canvas button
   - [ ] Sync drawing data between users

5. ### 🧰 Build Simple Toolbar
   - [ ] Create tool selection (pen/eraser)
   - [ ] Add color picker (start with 6 basic colors)
   - [ ] Add clear canvas button
   - [ ] Style with Tailwind

