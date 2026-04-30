# Our Love Story Website 💕

A beautiful, responsive website to showcase your relationship with photos and timeline of special events.

## Features

✨ **Photo Gallery** - Display your favorite memories with a lightbox viewer
📅 **Event Timeline** - Create a beautiful timeline of milestones in your relationship
💕 **Love Story Section** - Share your story with a dedicated about section
📱 **Responsive Design** - Works perfectly on mobile, tablet, and desktop
🎨 **Modern UI** - Beautiful gradient colors and smooth animations

## How to Use

### 1. Open the Website Locally
Simply open `index.html` in your web browser to view the website.

### 2. Customize Your Content

#### Edit the About Section
Open `index.html` and find the "About Us" section. Replace the placeholder text with your story:

```html
<section id="about" class="about">
    <div class="container">
        <h2>About Us</h2>
        <div class="about-content">
            <p>
                Your love story here...
            </p>
        </div>
    </div>
</section>
```

#### Add Events to the Timeline
In `index.html`, find the timeline section and modify the timeline items:

```html
<div class="timeline-item">
    <div class="timeline-date">DATE (e.g., June 2023)</div>
    <div class="timeline-description">
        <strong>Event Title</strong>
        <p>Description of what happened...</p>
    </div>
</div>
```

Add as many timeline items as you need!

#### Add Your Photos to the Gallery

1. **Create a `photos` folder** in the same directory as `index.html`
2. **Add your photos** to this folder (JPG, PNG, WebP formats work best)
3. **Update the gallery in `index.html`**:

Replace the placeholder gallery items with your photos:

```html
<div class="gallery-item">
    <img src="photos/your-photo.jpg" alt="Description">
    <div class="photo-caption">Caption for the photo</div>
</div>
```

**Tips for photos:**
- Recommended size: 300x300px or larger (they'll be resized automatically)
- Use landscape or square photos for best results
- Keep file sizes reasonable (under 2MB per photo)

### 3. Customize the Colors

Edit `styles.css` to change the color scheme. Look for these color values:
- `#ff6b9d` - Pink/Magenta
- `#c44569` - Deep Red
- `#fafafa` - Light Gray background

Replace these colors throughout the file with your preferred colors.

### 4. Change the Site Title

In `index.html`, update the title:
```html
<title>Our Love Story - Your Names Here</title>
```

And update the logo in the navigation:
```html
<div class="logo">💕 Our Story</div>
```

## Deploying Online

### Option 1: GitHub Pages (Free & Easy)

1. Create a GitHub account if you don't have one
2. Create a new repository called `yourusername.github.io`
3. Upload all files (`index.html`, `styles.css`, `script.js`, and `photos` folder)
4. Your site will be live at `https://yourusername.github.io`

### Option 2: Netlify (Free & Very Easy)

1. Go to [netlify.com](https://www.netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your repository
5. Your site will be automatically deployed

### Option 3: Vercel (Free & Fast)

1. Go to [vercel.com](https://www.vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Your site will be live in seconds

## Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Features Explained

**Lightbox Gallery**: Click any photo to open it in a larger view. Use arrow buttons or keyboard arrows to navigate. Press Escape to close.

**Timeline**: Automatically alternates sides for a professional look. Add more items as needed.

**Responsive Design**: The site automatically adapts to phone, tablet, and desktop screens.

**Smooth Animations**: Sections fade in as you scroll, creating a polished experience.

## Keyboard Shortcuts

When viewing a photo in the lightbox:
- **Arrow Right** - Next photo
- **Arrow Left** - Previous photo
- **Escape** - Close lightbox

## Tips for Best Results

1. **Keep photos consistent** - Use photos with similar aspect ratios
2. **Write good captions** - Add meaningful descriptions to your photos
3. **Tell your story** - Make the timeline and about section personal and heartfelt
4. **Add more content** - Don't be shy! Add quotes, poems, or special messages
5. **Update regularly** - Add new photos and timeline events to keep it fresh

## File Structure

```
Ntando website/
├── index.html       (Main page)
├── styles.css       (Styling)
├── script.js        (Interactivity)
├── photos/          (Folder for your photos)
└── README.md        (This file)
```

## Need Help?

- **Photos not showing?** Check the file path in the `src` attribute
- **Colors not changing?** Make sure you're editing the right color values
- **Website looks weird?** Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)

Enjoy your beautiful relationship website! 💕
