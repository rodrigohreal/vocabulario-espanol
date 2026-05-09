# Spanish Vocabulary Trainer - Image Editor & Practice

A Python app for teaching Spanish vocabulary using visual image editing and drag-and-drop exercises.

## Overview

The app has **two modes**:

1. **🎨 Editor Mode** - Teacher draws rectangles on images to hide/mark vocabulary words
2. **✏️ Practice Mode** - Students drag the hidden areas to their correct positions

## Features

### Editor Mode
- **Paste images** directly (Ctrl+V)
- **Draw rectangles** to mark vocabulary items (like Microsoft Paint)
- **Cover/hide** the original text with colored boxes
- **Label each rectangle** with Spanish words
- **Save configurations** - image + rectangle positions
- **Undo/Reset** - easily fix mistakes

### Practice Mode
- **Visual exercises** - match small image squares to positions
- **Instant feedback** - green for correct, red for wrong
- **Score tracking** - see how many correct placements
- **Reset anytime** - students can retry

## Installation

```bash
pip install -r requirements.txt
```

## Quick Start

1. Run the app:
```bash
python vocabulary_trainer.py
```

2. **Editor Tab:**
   - Copy an image (Ctrl+C) and click "Paste Image"
   - Draw rectangles over vocabulary words
   - Add Spanish labels for each rectangle
   - Click "Save Configuration"

3. **Practice Tab:**
   - Click "Load Configuration"
   - Students drag small image squares to drop zones
   - Zones show Russian/meaning labels

## Workflow

### For Teachers (Editor Mode)

```
Image with Spanish vocabulary
         ↓
   Paste into Editor
         ↓
  Draw rectangles over words
         ↓
  Add Spanish labels
         ↓
  Save Configuration
         ↓
  Creates: image.png + image.json
```

### For Students (Practice Mode)

```
Load configuration
         ↓
See image + draggable squares (hidden words)
         ↓
See drop zones with Russian labels
         ↓
Drag squares to correct positions
         ↓
Instant feedback (green = correct)
         ↓
Score tracking
```

## How It Works

### Editor Example (Body Parts)

1. Paste image with vocabulary labels
2. Draw rectangle over "la cabeza" → label it
3. Draw rectangle over "el brazo" → label it
4. Draw rectangle over "el cuello" → label it
5. ... (continue for all words)
6. Save as `body_parts.png` + `body_parts.json`

**Result**: The rectangles cover the original Spanish text

### Practice Example

Students see:
- **Left**: Image with colored rectangles (hiding the words)
- **Right top**: Small image squares extracted from rectangles
- **Right bottom**: Drop zones with Russian labels:
  - "голова" ← drag the head square here
  - "рука" ← drag the arm square here
  - "шея" ← drag the neck square here

## Configuration Files

Automatically created when you save:

**image.json** structure:
```json
{
  "image_file": "body_parts.png",
  "rectangles": [
    {
      "id": "word_0",
      "x": 100,
      "y": 50,
      "width": 120,
      "height": 60,
      "label": "la cabeza"
    },
    {
      "id": "word_1",
      "x": 250,
      "y": 150,
      "width": 80,
      "height": 100,
      "label": "el brazo"
    }
  ]
}
```

## Keyboard Shortcuts

- **Ctrl+V** - Paste image in Editor mode

## UI Elements

### Editor Mode
- **Paste Image** - Load image from clipboard
- **Undo Last** - Remove last drawn rectangle
- **Clear All Rectangles** - Start over
- **Save Configuration** - Save image + positions
- **Rectangles List** - Shows all drawn rectangles and labels

### Practice Mode
- **Load Configuration** - Open a saved configuration
- **Reset Exercise** - Clear all placements
- **Draggable Squares** - Small image pieces to drag
- **Drop Zones** - Target areas with Russian labels
- **Score Display** - Shows correct placements

## Tips for Teachers

### Creating Exercises
- **Clear rectangles** - Make sure they clearly cover the vocabulary
- **Consistent labels** - Use the same Spanish words throughout
- **Good size** - Rectangles should be large enough to see but not overlap
- **Label format** - Add article (el/la) with noun for clarity

### For Students
- The drop zones show Russian text (or transliteration)
- Drag each small image square to match its meaning
- Feedback is immediate
- Green = correct placement
- Red = wrong placement (try again)

### Multiple Exercises
- Create multiple images
- Save each with unique names
- Build a library of vocabulary exercises
- Students can practice different topics

## Customization

You can easily modify:
- Rectangle colors and transparency
- Drop zone appearance
- Font sizes and styles
- Scoring system
- Practice difficulty

Edit the Python code to customize colors, feedback, or behavior.

## System Requirements

- Python 3.7+
- PyQt5
- Windows, Mac, or Linux

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "No image in clipboard" | Copy an image first before pasting |
| Can't see rectangles | Draw larger rectangles (min 10×10 pixels) |
| Config won't load | Ensure image and JSON are in same folder |
| App crashes on paste | Make sure clipboard has a valid image |

## Support

For issues or improvements, check the code and customize as needed!

---

Enjoy teaching Spanish vocabulary! 🇪🇸
