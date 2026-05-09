# Visual Workflow

## The Complete Teaching Process

### Step 1: Setup (Teacher) 🎨

```
Your vocabulary image
(with Spanish labels visible)
         ↓
    Copy to clipboard (Ctrl+C)
         ↓
   Open vocabulary_trainer.py
         ↓
   Go to "📐 Editor" tab
         ↓
   Click "Paste Image" or press Ctrl+V
         ↓
   Draw rectangles over each Spanish word
   (like you would in Microsoft Paint)
         ↓
   For each rectangle, add the Spanish word
   when prompted
         ↓
   Click "Save Configuration"
         ↓
   Creates:
   - image.png (the image)
   - image.json (rectangle positions & labels)
```

### Step 2: Practice (Student) ✏️

```
Configuration files created
(image.png + image.json)
         ↓
Student opens the app
         ↓
Goes to "✏️ Practice" tab
         ↓
Clicks "Load Configuration"
         ↓
Selects the image.json file
         ↓
App displays:

┌─────────────────────────┬──────────────────┐
│                         │  Draggable       │
│  Image with colored     │  image squares   │
│  rectangles (hiding     │  (extracted from │
│  the Spanish words)     │  rectangles)     │
│                         │                  │
│                         │──────────────────│
│                         │  Drop zones      │
│                         │  with Russian    │
│                         │  labels:         │
│                         │  - голова        │
│                         │  - рука          │
│                         │  - шея           │
│                         │  etc.            │
└─────────────────────────┴──────────────────┘

Student drags squares to match Russian labels
         ↓
   Instant feedback:
   ✓ Green = Correct placement
   ✗ Red = Wrong placement
         ↓
   Score updates
         ↓
   Click "Reset Exercise" to retry
```

## What Students See

### The Practice View

**Left side**: The image
- Shows the original image
- Rectangles are visible (they hid the vocabulary)
- The colored areas mark where words should go

**Right side - Top**: Draggable squares
- Small image pieces extracted from rectangles
- These contain what was hidden
- Golden colored, ready to drag

**Right side - Bottom**: Drop zones
- Each has a Russian label
- E.g., "голова" (head), "рука" (arm)
- Drop zones where squares should go

## Example: Body Parts Image

### Your Original Image Shows:
```
      [Head picture] - "la cabeza"
      [Arm picture]  - "el brazo"  
      [Neck picture] - "el cuello"
      [Leg picture]  - "la pierna"
      etc.
```

### Editor Mode:
1. Paste the image
2. Draw rectangle over "la cabeza" → add label "la cabeza"
3. Draw rectangle over "el brazo" → add label "el brazo"
4. Draw rectangle over "el cuello" → add label "el cuello"
5. Draw rectangle over "la pierna" → add label "la pierna"
6. ... (all words)
7. Save → Creates `body_parts.png` + `body_parts.json`

### Practice Mode View:
```
┌─ PRACTICE VIEW ─────────────┬─ STUDENT TASK ──────┐
│                             │                     │
│   [Image with colored       │  Squares to drag:   │
│    rectangles hiding        │  [head image]       │
│    the Spanish words]       │  [arm image]        │
│                             │  [neck image]       │
│                             │  [leg image]        │
│                             │                     │
│                             │  Drop here:         │
│                             │  □ голова           │
│                             │  □ рука             │
│                             │  □ шея              │
│                             │  □ нога             │
│                             │                     │
│                             │  Score: 0/4         │
└─────────────────────────────┴─────────────────────┘
```

### Student's Task:
- Drag head image → drop on "голова" (голова = head)
- Drag arm image → drop on "рука" (рука = arm)
- Drag neck image → drop on "шея" (шея = neck)
- Drag leg image → drop on "нога" (нога = leg)

**Result**: All correct! Score = 4/4 ✓

## Key Points

✓ **Rectangles hide the original Spanish text**
  - Students can't see the answers
  - They must know the vocabulary

✓ **Small squares are visual clues**
  - Students can see pictures of what they're matching
  - Helps with visual memory

✓ **Russian labels guide the activity**
  - Perfect for Russian-speaking students
  - They match Spanish vocabulary to their language

✓ **Instant feedback reinforces learning**
  - Green = success (dopamine!)
  - Red = try again (safe failure)

✓ **Multiple exercises**
  - Create many different images
  - Practice different vocabulary sets
  - Build comprehensive curriculum

---

That's it! Simple, visual, effective. 🎓
