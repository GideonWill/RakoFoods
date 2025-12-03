# 🎨 Favicon Setup Guide - RakoFoods

## ✅ What Has Been Done

I've configured your logo (`/images/logo.jpg`) as the favicon in the Next.js metadata. The favicon will now appear in:
- Browser tabs
- Bookmarks
- Browser history
- Mobile home screen icons (Apple devices)

---

## 📋 Current Configuration

In `app/layout.tsx`, the following favicon configuration has been added:

```typescript
icons: {
  icon: [
    { url: "/images/logo.jpg", sizes: "32x32", type: "image/jpeg" },
    { url: "/images/logo.jpg", sizes: "16x16", type: "image/jpeg" },
  ],
  apple: { url: "/images/logo.jpg", sizes: "180x180", type: "image/jpeg" },
  shortcut: "/images/logo.jpg",
}
```

---

## 🚀 How to Test

1. **Local Testing:**
   - Your dev server is already running
   - Open: http://localhost:3000
   - Check the browser tab - you should see your logo as the favicon
   - Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

2. **After Deployment:**
   - Visit: https://rakofoods.org
   - Check the browser tab for the favicon
   - May take a few minutes to update due to browser caching

---

## 💡 Optional: Create Optimized Favicon Files

For best results across all browsers and devices, you can create optimized favicon files:

### Recommended Favicon Sizes:

1. **favicon.ico** (16x16, 32x32, 48x48) - Classic favicon
2. **favicon-16x16.png** - Small browser tab
3. **favicon-32x32.png** - Standard browser tab
4. **apple-touch-icon.png** (180x180) - iOS home screen
5. **android-chrome-192x192.png** - Android home screen
6. **android-chrome-512x512.png** - Android splash screen

### How to Create These Files:

#### Option 1: Online Favicon Generator (Easiest)
1. Go to: https://realfavicongenerator.net/
2. Upload your `/public/images/logo.jpg`
3. Customize settings if needed
4. Download the generated package
5. Extract all files to `/public/` directory
6. Update `app/layout.tsx` with the new paths

#### Option 2: Using Canva (Free)
1. Open your logo in Canva
2. Resize to each required size
3. Export as PNG (or ICO for favicon.ico)
4. Save to `/public/` directory

#### Option 3: Using Photoshop/GIMP
1. Open your logo
2. Resize to each required size
3. Export as PNG
4. For .ico file, use an online converter

---

## 📁 Recommended File Structure

After creating optimized favicons, your `/public/` directory should look like:

```
/public/
  ├── favicon.ico
  ├── favicon-16x16.png
  ├── favicon-32x32.png
  ├── apple-touch-icon.png
  ├── android-chrome-192x192.png
  ├── android-chrome-512x512.png
  └── images/
      └── logo.jpg (your current logo)
```

---

## 🔧 Advanced Configuration (Optional)

If you create the optimized favicon files, update `app/layout.tsx` icons section:

```typescript
icons: {
  icon: [
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
  ],
  apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  shortcut: "/favicon.ico",
  other: [
    {
      rel: "android-chrome",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      rel: "android-chrome",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
}
```

---

## 🌐 Web App Manifest (Optional)

For Progressive Web App (PWA) support, create `/public/site.webmanifest`:

```json
{
  "name": "Rako Foods",
  "short_name": "RakoFoods",
  "description": "Local Bar, Homemade Food & Refreshing Drinks",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#ff6b35",
  "background_color": "#ffffff",
  "display": "standalone",
  "start_url": "/"
}
```

Then add to `app/layout.tsx` metadata:

```typescript
manifest: "/site.webmanifest",
```

---

## 🎨 Design Tips for Favicons

1. **Keep it Simple:** Favicons are tiny - use simple, recognizable shapes
2. **High Contrast:** Ensure your logo is visible at small sizes
3. **Square Format:** Favicons work best with square logos
4. **Transparent Background:** Use PNG with transparency for best results
5. **Test at Small Sizes:** View your favicon at 16x16 to ensure it's recognizable

---

## 🧪 Testing Checklist

- [ ] Favicon appears in browser tab (Chrome)
- [ ] Favicon appears in browser tab (Firefox)
- [ ] Favicon appears in browser tab (Safari)
- [ ] Favicon appears in browser tab (Edge)
- [ ] Favicon appears in bookmarks
- [ ] Apple touch icon works on iOS devices
- [ ] Android icon works on Android devices
- [ ] Favicon persists after hard refresh

---

## 🔄 Clear Browser Cache

If you don't see the favicon immediately:

**Chrome/Edge:**
1. Press `Ctrl + Shift + Delete`
2. Select "Cached images and files"
3. Click "Clear data"

**Firefox:**
1. Press `Ctrl + Shift + Delete`
2. Select "Cache"
3. Click "Clear Now"

**Safari:**
1. Press `Cmd + Option + E`
2. Or Safari > Clear History

---

## ✅ Current Status

- [x] Logo configured as favicon in metadata
- [x] Multiple sizes configured (16x16, 32x32, 180x180)
- [x] Apple touch icon configured
- [x] Shortcut icon configured
- [ ] Optional: Create optimized PNG/ICO files
- [ ] Optional: Create web app manifest

---

## 🎉 Summary

Your RakoFoods logo is now set as the favicon! It will appear in:
- ✅ Browser tabs
- ✅ Bookmarks
- ✅ Browser history
- ✅ Mobile home screens (iOS)

**To see it now:**
1. Open http://localhost:3000 (your dev server is running)
2. Check the browser tab
3. Hard refresh if needed: `Ctrl + Shift + R`

**After deployment:**
- The favicon will automatically appear on rakofoods.org
- May take a few minutes due to browser caching

---

**Optional:** For best cross-browser compatibility, consider creating optimized favicon files using the guide above.
