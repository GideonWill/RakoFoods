# Social Media SEO Quick Reference

## 🎯 Current Social Media Integration

### Facebook & LinkedIn (Open Graph)
```
Title: Rako Foods | Local Bar, Homemade Food & Refreshing Drinks
Description: Your premier local bar serving homemade food, refreshing drinks, and delicious yoghurt. Perfect for weddings, funerals, birthdays, and special events.
Image: /images/og-image.jpg (1200x630px)
URL: https://rakofoods.org
```

### Twitter
```
Card Type: summary_large_image
Title: Rako Foods | Local Bar, Homemade Food & Refreshing Drinks
Description: Your premier local bar serving homemade food, refreshing drinks, and delicious yoghurt. Perfect for all your special events.
Image: /images/twitter-image.jpg (1200x675px)
Handle: @rakofoods
```

### Instagram
- No specific meta tags (uses Open Graph)
- Ensure your Instagram bio links to: rakofoods.org
- Use hashtags: #rakofoods #localbar #homemadefood #refreshingdrinks #yoghurt

### WhatsApp
- Uses Open Graph tags (same as Facebook)
- Preview will show your custom image and description

---

## 📱 Social Media Profile Optimization

### Recommended Usernames (Consistency)
- Facebook: facebook.com/rakofoods
- Instagram: @rakofoods
- Twitter: @rakofoods
- LinkedIn: linkedin.com/company/rakofoods
- YouTube: @rakofoods
- TikTok: @rakofoods

### Bio Template
```
🍽️ Rako Foods | Local Bar & Catering
🏠 Homemade Food | Refreshing Drinks | Yoghurt
🎉 Weddings | Funerals | Birthdays | Events
🌐 rakofoods.org
```

### Hashtag Strategy
**Primary:**
- #RakoFoods
- #LocalBar
- #HomemadeFood
- #RefreshingDrinks

**Secondary:**
- #EventCatering
- #WeddingCatering
- #LocalCuisine
- #FreshYoghurt
- #CateringServices

---

## 🔗 Social Media Links in Website

Current implementation in `StructuredData.tsx`:
```typescript
sameAs: [
  "https://www.facebook.com/rakofoods",
  "https://www.instagram.com/rakofoods",
  "https://twitter.com/rakofoods",
  "https://www.linkedin.com/company/rakofoods",
  "https://www.youtube.com/@rakofoods",
]
```

**Action Required:** Update these with your actual social media URLs once created.

---

## 📸 Image Requirements

### Open Graph Image (Facebook, LinkedIn, WhatsApp)
- **Size:** 1200 x 630 pixels
- **Format:** JPG or PNG
- **File:** `/public/images/og-image.jpg`
- **Content:** Your logo + tagline + appealing food image
- **Text:** Keep minimal, large, readable

### Twitter Card Image
- **Size:** 1200 x 675 pixels (16:9 ratio)
- **Format:** JPG or PNG
- **File:** `/public/images/twitter-image.jpg`
- **Content:** Similar to OG image but wider format

### Logo
- **Size:** 250 x 60 pixels (or proportional)
- **Format:** PNG with transparency
- **File:** `/public/images/logo.png`

---

## ✅ Testing Social Media Previews

### Facebook/WhatsApp
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter: https://rakofoods.org
3. Click "Scrape Again" to refresh
4. Verify image, title, description appear correctly

### Twitter
1. Go to: https://cards-dev.twitter.com/validator
2. Enter: https://rakofoods.org
3. Verify card preview

### LinkedIn
1. Go to: https://www.linkedin.com/post-inspector/
2. Enter: https://rakofoods.org
3. Verify preview

---

## 🎨 Content Ideas for Social Media

### Post Topics
1. **Menu Highlights:** "Try our homemade [dish name]"
2. **Event Success:** "Thanks for choosing Rako Foods for your [event type]"
3. **Behind the Scenes:** "Making our fresh yoghurt"
4. **Customer Testimonials:** Share reviews
5. **Special Offers:** "Book your event catering today"

### Keywords to Include in Posts
- Rako Foods / RakoFoods
- Local bar
- Homemade food
- Refreshing drinks
- Yoghurt
- Event catering
- [Your location/area]

---

## 📊 Social Media SEO Benefits

1. **Brand Recognition:** Consistent @rakofoods across platforms
2. **Backlinks:** Social profiles link to rakofoods.org
3. **Social Signals:** Engagement helps search rankings
4. **Local Discovery:** Tagged location posts boost local SEO
5. **Rich Previews:** Attractive link previews increase click-through

---

## 🚀 Next Steps

1. ✅ Create/optimize all social media profiles
2. ✅ Update profile links in `StructuredData.tsx`
3. ✅ Create og-image.jpg and twitter-image.jpg
4. ✅ Add social media icons/links in website footer
5. ✅ Start posting regularly with target keywords
6. ✅ Encourage customers to tag @rakofoods

---

**Remember:** Consistency is key! Use the same branding, messaging, and keywords across all platforms.
