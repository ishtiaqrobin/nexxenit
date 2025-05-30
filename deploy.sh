#!/bin/bash

# ----- Configuration -----
LOCAL_PROJECT_PATH="/mnt/e/MIssion404/Commercial-Portfolio/nexxenit/"
REMOTE_USER="ezbitlyc"
REMOTE_HOST="nexxenit.com"
REMOTE_PROJECT_PATH="/home/ezbitlyc/nexxenit.com"

# ----- Telegram Setup -----
TELEGRAM_BOT_TOKEN="8187320150:AAFaUAZzia395zJFDIWCXMMUduV0ebxJIp0"
TELEGRAM_CHAT_ID="-1002293329405"
# ---------------------------

# ----- Functions -----
send_telegram() {
  MESSAGE="$1"
  curl -s -X POST "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/sendMessage" \
    -d chat_id="$TELEGRAM_CHAT_ID" \
    -d text="$MESSAGE" \
    -d parse_mode="Markdown"
}

send_error() {
  ERROR_MESSAGE="$1"
  send_telegram "❌ *Error During Deployment!*\n\`\`\`\n$ERROR_MESSAGE\n\`\`\`"
}

# ----- Start Deployment -----
echo "🚀 Starting Deployment..."
send_telegram "🚀 *Deployment Started!*"

# Step 0: Remove previous build
echo "🧹 Removing old dist folder..."
rm -rf dist

# Step 1: Install dependencies (if needed)
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  if npm install; then
    echo "✅ Dependencies installed successfully."
    send_telegram "📦 *Dependencies installed successfully!*"
  else
    echo "❌ Failed to install dependencies."
    send_error "Failed to install dependencies"
    exit 1
  fi
fi

# Step 2: Local Build
echo "🛠️ Building project locally..."
BUILD_START=$(date +%s)

if npm run build; then
  BUILD_END=$(date +%s)
  BUILD_TIME=$((BUILD_END - BUILD_START))
  echo "✅ Build successful."
  send_telegram "✅ *Local Build Successful!*\n🕒 Build Time: *${BUILD_TIME}s*"
else
  echo "❌ Build failed."
  ERROR=$(tail -n 30 npm-debug.log 2>/dev/null || echo "Build failed, no debug log found.")
  send_error "$ERROR"
  exit 1
fi

# Step 3: Upload Files
echo "📡 Uploading build files to server..."
UPLOAD_START=$(date +%s)

# First, copy .htaccess to dist folder
cp .htaccess dist/

if rsync -az --delete \
  --exclude 'node_modules' \
  --exclude '.git' \
  --exclude '.gitignore' \
  --exclude '.gitattributes' \
  --exclude '.vscode' \
  --exclude 'src' \
  --exclude 'public' \
  "$LOCAL_PROJECT_PATH/dist/" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PROJECT_PATH/"; then

  UPLOAD_END=$(date +%s)
  UPLOAD_TIME=$((UPLOAD_END - UPLOAD_START))
  UPLOAD_SIZE=$(du -sh "$LOCAL_PROJECT_PATH/dist" | cut -f1)

  echo "✅ Upload successful."
  send_telegram "📡 *Files Uploaded Successfully!*\n🕒 Upload Time: *${UPLOAD_TIME}s*\n📦 Upload Size: *${UPLOAD_SIZE}*"
else
  echo "❌ Upload failed."
  send_error "Upload failed during rsync operation."
  exit 1
fi

# Step 4: Deployment Complete
echo "🏁 Deployment Completed Successfully!"
send_telegram "🏁 *Deployment Completed Successfully!*\n🔗 Visit: http://$REMOTE_HOST"

# Save deployment log
echo "📅 Deployment date: $(date)" >> deployment.log
echo "🚀 Deployment Completed Successfully!" >> deployment.log
