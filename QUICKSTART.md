# Quick Start Guide

## Installation

```bash
pip install -r requirements.txt
```

## How It Works - Two Modes

### 🎨 **EDITOR MODE** (Teacher Setup)

This is where you prepare your vocabulary images:

1. **Run the app:**
   ```bash
   python vocabulary_trainer.py
   ```

2. **Click "Paste Image" (or Ctrl+V)**
   - Copy an image to your clipboard first
   - The image will appear in the editor

3. **Draw rectangles over vocabulary words**
   - Click and drag to create a rectangle
   - Creates a yellow/orange box covering the word
   - The box captures what's underneath

4. **Add a label for each rectangle**
   - After drawing, a dialog appears asking for the Spanish word
   - E.g., "la cabeza", "el brazo", etc.
   - You can edit the label in the list on the right

5. **Click "Save Configuration"**
   - Saves the image + rectangle positions
   - Creates a JSON config file with all rectangle data

### ✏️ **PRACTICE MODE** (Student Learning)

1. **Click "Load Configuration"** in the Practice tab
   - Select the `.json` file you created

2. **App shows:**
   - **Left**: The vocabulary image
   - **Right top**: Small draggable squares (the hidden vocabulary areas)
   - **Right bottom**: Drop zones with Russian labels (or meanings)

3. **Students drag the squares**
   - Drag each small image square from the top
   - Drop it in the correct position below
   - **Green border** = Correct! ✓
   - **Red border** = Wrong placement ✗

4. **Reset to try again**
   - Click "Reset Exercise" to start over

## Workflow Example

### Your image shows "Body Parts"

**In Editor:**
1. Paste the body image
2. Draw rectangle over "la cabeza" → label it
3. Draw rectangle over "el brazo" → label it
4. Draw rectangle over "el cuello" → label it
5. ... (all vocabulary items)
6. Save as `body_parts.png` and `body_parts.json`

**In Practice:**
1. Load `body_parts.json`
2. App shows small squares (hiding the words)
3. Shows Russian labels: "голова", "рука", "шея", etc.
4. Students drag each square to the correct Russian label
5. Instant feedback - green if correct, red if wrong

## Keyboard Shortcuts

- **Ctrl+V** → Paste image in Editor mode

## Tips

- **Draw rectangles carefully** - They should cover just the vocabulary word
- **Labels matter** - Add clear, consistent labels (Spanish words)
- **Image format** - Works with PNG, JPG, etc.
- **Multiple exercises** - Create as many configurations as you want

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "No image in clipboard" | Copy an image first (Ctrl+C) before clicking Paste |
| Image not saving | Make sure you have write permissions in the folder |
| Config won't load | Make sure both image and .json are in the same folder |
| Rectangles not showing | Try drawing a larger rectangle |

## Example workflow with YOUR image:

1. **Take your body parts image**
2. **Copy it (Ctrl+C)**
3. **Paste in Editor (Ctrl+V)**
4. **Draw boxes over each word:**
   - "la cabeza" (head)
   - "el cuello" (neck)
   - "el hombro" (shoulder)
   - etc.
5. **Save** → Creates:
   - `body_parts.png` (the image)
   - `body_parts.json` (rectangle positions & labels)
6. **Give to students** → They load the config in Practice mode
7. **Students see** labeled positions in Russian, drag squares to match

Done! 🎓
