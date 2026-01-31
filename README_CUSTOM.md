# BobBucks Payment App - Custom Test Version

This is a customized version of the BobBucks payment app configured for your specific Android APK.

## ✅ Configuration

**Certificate Fingerprint:** `59:55:2C:A1:9B:A5:2E:B6:07:F1:5B:F6:82:B8:16:4D:80:DC:75:56:1A:04:3A:74:F7:1C:A9:94:5F:D8:64:7B`

**Package ID:** `dev.bobbucks`

## Quick Deploy to GitHub Pages

1. **Create a new repository on GitHub** (e.g., `bobbucks-payment-test`)

2. **Push this code:**
   ```bash
   cd /Users/sbhutegowda/POC/web-based-payment-app-example
   git init
   git add .
   git commit -m "Initial commit with custom fingerprint"
   git remote add origin https://github.com/YOUR_USERNAME/bobbucks-payment-test.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main`, Folder: `/public`
   - Click Save

4. **Wait 1-2 minutes** for deployment

5. **Your URLs will be:**
   - Site: `https://YOUR_USERNAME.github.io/bobbucks-payment-test/`
   - Manifest: `https://YOUR_USERNAME.github.io/bobbucks-payment-test/pay/manifest.json`

## After Deployment

Once deployed, share your GitHub Pages URL and I'll update your Android app to use it!

## Test the Payment Flow

1. Install the updated APK on your Android device
2. Open Chrome on the device
3. Navigate to: `https://rsolomakhin.github.io/pr/bob/`
4. Click "Invoke Payment App"
5. Your BobBucks app should launch!

## Files Modified

- `public/pay/manifest.json` - Updated with your certificate fingerprint

## Original Repository

This is a fork/copy of: https://github.com/GoogleChromeLabs/web-based-payment-app-example

Modified for testing with custom Android APK signatures.
