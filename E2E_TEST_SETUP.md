# End-to-End Testing Setup

## ✅ Current Configuration Status

### Fingerprint Verification
**APK Certificate Fingerprint:**
```
59:55:2C:A1:9B:A5:2E:B6:07:F1:5B:F6:82:B8:16:4D:80:DC:75:56:1A:04:3A:74:F7:1C:A9:94:5F:D8:64:7B
```

**Web Manifest Fingerprint:**
```
59:55:2C:A1:9B:A5:2E:B6:07:F1:5B:F6:82:B8:16:4D:80:DC:75:56:1A:04:3A:74:F7:1C:A9:94:5F:D8:64:7B
```

✅ **FINGERPRINTS MATCH!**

### Application Configuration
- **Package ID:** `dev.bobbucks`
- **Keystore:** `/Users/sbhutegowda/POC/BobBucksAndroidPaymentApp/dev.bobbucks/bobbucks.keystore`
- **Current Payment Method:** `https://bobbucks.dev/pay` (needs update)

## Deployment Options for Testing

### Option 1: GitHub Pages (Easiest for Testing)

1. **Push to GitHub:**
   ```bash
   cd /Users/sbhutegowda/POC/web-based-payment-app-example
   git init
   git add .
   git commit -m "Updated manifest with custom fingerprint"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `main`
   - Folder: `/public`
   - Save

3. **Your URLs will be:**
   - Main site: `https://YOUR_USERNAME.github.io/YOUR_REPO/`
   - Payment manifest: `https://YOUR_USERNAME.github.io/YOUR_REPO/pay/manifest.json`

### Option 2: Local Testing with ngrok (Quick Test)

1. **Install dependencies and start local server:**
   ```bash
   cd /Users/sbhutegowda/POC/web-based-payment-app-example
   npm install
   npm start
   ```

2. **In another terminal, expose with ngrok:**
   ```bash
   ngrok http 8080 --domain=your-static-domain.ngrok-free.app
   ```

3. **Your URLs will be:**
   - Main site: `https://your-domain.ngrok-free.app/`
   - Payment manifest: `https://your-domain.ngrok-free.app/pay/manifest.json`

### Option 3: Vercel (Fastest Deploy)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd /Users/sbhutegowda/POC/web-based-payment-app-example
   vercel --prod
   ```

3. **Follow prompts:**
   - Set up and deploy
   - Output directory: `public`

## After Deployment: Update Android App

Once you have your deployed URL, you'll need to update the Android app configuration.

**Your deployed URL will be something like:**
- GitHub Pages: `https://YOUR_USERNAME.github.io/YOUR_REPO`
- Vercel: `https://your-project.vercel.app`
- ngrok: `https://your-domain.ngrok-free.app`

Let me know your deployed URL and I'll update the Android app automatically!

## Testing Checklist

### Pre-Deployment
- [x] Web manifest fingerprint updated
- [x] APK signed with matching certificate
- [x] Package ID matches (`dev.bobbucks`)

### Post-Deployment
- [ ] Web app accessible via HTTPS
- [ ] `/pay/manifest.json` returns correct JSON
- [ ] Android app updated with new payment method URL
- [ ] APK installed on test device

### E2E Test
- [ ] Open test page on Android device
- [ ] Click "Invoke Payment App"
- [ ] BobBucks app launches
- [ ] Payment flow completes

## Quick Test Commands

**Verify web manifest is accessible:**
```bash
curl https://YOUR_DOMAIN/pay/manifest.json | jq .
```

**Check fingerprint in manifest:**
```bash
curl https://YOUR_DOMAIN/pay/manifest.json | jq '.related_applications[0].fingerprints[0].value'
```

**Verify APK fingerprint:**
```bash
keytool -printcert -jarfile dev.bobbucks-debug.apk | grep SHA256
```

## Troubleshooting

### Issue: Payment app doesn't launch
- Ensure HTTPS is enabled
- Verify manifest is accessible
- Check Chrome DevTools console for errors
- Navigate to `chrome://payment-handler-internals/` on device

### Issue: Fingerprint mismatch
- Re-verify APK signature
- Ensure manifest has correct fingerprint (case-sensitive)
- Check that APK was built with the correct keystore

### Issue: 404 on manifest
- Verify GitHub Pages is enabled and deployed
- Check the base path (might need `/YOUR_REPO/` prefix)
- Ensure `public` folder is set as root

## Next Steps

1. **Choose your deployment method** (GitHub Pages recommended)
2. **Deploy the web app**
3. **Share your deployed URL** with me
4. **I'll update the Android app** to point to your new URL
5. **Rebuild and test!**
