# 🚀 START HERE

Welcome to the Spanish Vocabulary Trainer!

## What You Have

A Python app with two tabs:
- **📐 Editor Tab** - You draw rectangles on images to hide vocabulary
- **✏️ Practice Tab** - Your students drag hidden squares to correct positions

## Installation (First Time Only)

```bash
pip install -r requirements.txt
```

## Run the App

```bash
python vocabulary_trainer.py
```

## Quick Example (5 minutes)

### Create an Exercise (You)

1. **Take your vocabulary image** (e.g., body parts image)
2. **Copy it**: Ctrl+C
3. **Paste in Editor**: Ctrl+V
4. **Draw rectangles** over each Spanish word
5. **Add labels** when prompted (e.g., "la cabeza", "el brazo")
6. **Save** → Creates image files and config

### Practice (Your Students)

1. **Load the configuration** you just created
2. **See the image** with hidden rectangles (colored boxes)
3. **See small squares** to drag (extracted from rectangles)
4. **See Russian labels** below (what each word means)
5. **Drag squares to match labels**
6. **Get instant feedback** (green = correct, red = wrong)

## Files

- `vocabulary_trainer.py` ← **This is the app!**
- `requirements.txt` ← Dependencies to install
- `QUICKSTART.md` ← Quick reference
- `README.md` ← Full documentation
- `WORKFLOW.md` ← Visual explanation of the process

## Next Steps

1. ✅ Install dependencies: `pip install -r requirements.txt`
2. ✅ Run: `python vocabulary_trainer.py`
3. ✅ Read: `QUICKSTART.md` for detailed steps
4. ✅ Try: Create your first exercise!

## Common Questions

**Q: How do I get my image into the app?**  
A: Copy it to clipboard (Ctrl+C), then click "Paste Image" in the Editor tab (or press Ctrl+V)

**Q: What if my rectangle isn't covering the word properly?**  
A: Click "Undo Last" and redraw. You can also adjust the label text.

**Q: Can students see the answers?**  
A: No! The rectangles hide the original Spanish text. Students only see the small extracted squares and Russian labels.

**Q: How do students load an exercise?**  
A: They open the app, go to Practice tab, click "Load Configuration", and select your `.json` file.

**Q: Can I create multiple exercises?**  
A: Yes! Save each one with a different name. Build a whole curriculum.

## Tips

💡 **Make rectangles clear** - They should cover just the vocabulary word
💡 **Use consistent labels** - Always use Spanish with articles (el/la)
💡 **Test it yourself** - Try a practice exercise to make sure it works
💡 **Adjust Russian labels** - The "name" field is what students see as hints

---

**Ready?** → `python vocabulary_trainer.py` 🎓
