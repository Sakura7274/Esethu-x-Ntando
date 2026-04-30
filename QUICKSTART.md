# Quick Start Guide 🚀

## Get Your Website Up & Running in 5 Minutes

### Step 1: View Your Website
1. Open the folder: `Ntando website`
2. Right-click on `index.html`
3. Select "Open with" → Choose your web browser
4. Your website is now live locally! 🎉

### Step 2: Add Your Photos
1. Open the `photos` folder
2. Add your relationship photos here (JPG, PNG)
3. In `index.html`, replace the placeholder image paths:

**Find this line in index.html:**
```html
<img src="https://via.placeholder.com/300?text=Photo+1" alt="Memory 1">
```

**Replace with:**
```html
<img src="photos/your-photo-name.jpg" alt="Your photo description">
```

### Step 3: Update Timeline Events
Open `index.html` and find the timeline section. Update each event:

**Change:**
```html
<div class="timeline-date">First Meeting</div>
<div class="timeline-description">
    <strong>The Beginning</strong>
    <p>The day that changed everything...</p>
</div>
```

**To your events like:**
```html
<div class="timeline-date">June 15, 2021</div>
<div class="timeline-description">
    <strong>When We Met</strong>
    <p>At the coffee shop on Main Street...</p>
</div>
```

### Step 4: Edit Your Love Story
Find the "About Us" section in `index.html`:
```html
<p>
    Our love story is filled with beautiful moments...
</p>
```

Replace with your personal story.

### Step 5: Deploy Online (Optional)

**Using GitHub Pages (Free):**
1. Create a GitHub account
2. Create a new repo: `yourusername.github.io`
3. Upload these files
4. Visit `https://yourusername.github.io`

**Or use Netlify (Even Easier):**
1. Go to https://app.netlify.com
2. Click "Deploy manually"
3. Drag and drop your `Ntando website` folder
4. Done! Get a live link in seconds

---

## File Customization Tips

### Changing Colors
Edit `styles.css` and change:
- `#ff6b9d` = Pink (change this for lighter color)
- `#c44569` = Deep red (change this for darker color)

### Adding More Timeline Events
Copy and paste a timeline-item block:
```html
<div class="timeline-item">
    <div class="timeline-date">Your Date</div>
    <div class="timeline-description">
        <strong>Event Title</strong>
        <p>Your description</p>
    </div>
</div>
```

### Adding More Photos
Copy and paste a gallery-item block:
```html
<div class="gallery-item">
    <img src="photos/your-photo.jpg" alt="Description">
    <div class="photo-caption">Photo caption</div>
</div>
```

---

## Troubleshooting

**Photos not showing?**
- Check the file path matches exactly (case-sensitive on Mac)
- Make sure photo files are in the `photos` folder
- Try using the full path: `./photos/filename.jpg`

**Website looks different than expected?**
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Clear browser cache

**Need to test before going live?**
- Use http-server (if you have Node.js installed):
  ```bash
  npx http-server
  ```
- Or use VS Code Live Server extension

---

**Ready to share your love story with the world? 💕**

For detailed instructions, see `README.md`
