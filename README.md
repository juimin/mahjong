# Mahjong

Project to make an easy to use mahjong scoring tool.

## Goals

-   Application should be usable on mobile
-   Winning hand recognition should be fast
    -   Performant
    -   Fast to use (OCR?)
-   Score Keeping is required
    -   Account for a full round
    -   Multiple save files
    -   Graphing player stats

## Technologies

-   NVM (Node Version Manager)
-   Node JS
-   Javascript
-   React?

## Data Storage

-   Initially intended to be FE focused with small BE requirements. Firebase is a good starting point
    for storing data although securing it will be a little annoying. - Use local storage first and make sure the interface is extensible.

## Instructions (Running React Native App)

- The React Native App is in `app` directory
- To start developing, run the following commands:
```sh
$ npm i
$ npm start
```
- We use Expo to run our app and there are two ways to run the app on your phone:
    - Through Wifi: You can connect the app with the running server by scanning the QR code.
    - Through USB Cable (Android) on MacOS:
```sh
// Install Android Studio
// Export env vars so you can use ADB
$ export ANDROID_HOME=/Users/[USERNAME]/Library/Android/sdk
$ export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
// Open your Android device and ensure Developer mode is enabled. This is different per device so you have to find the way through Google.
// Enable USB Debugging
// Check that device is properly connected. If the result says 'authorizing', you may
// want to use a different USB port.
$ adb devices
// Run Expo Server and choose 'open Android' option to open app in Android phone
$ npm start
```