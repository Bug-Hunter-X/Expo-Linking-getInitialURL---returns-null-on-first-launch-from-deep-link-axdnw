# Expo Linking.getInitialURL() Returns Null on First Launch from Deep Link

This repository demonstrates a bug in Expo's `Linking` API where `Linking.getInitialURL()` returns `null` when the app is first launched via a deep link. Subsequent calls after the app has been started work as expected.  This issue is particularly relevant for handling deep links that trigger the app's initial launch.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app using Expo Go or EAS Build. 
4. Open a deep link (e.g., a custom URL scheme registered in your app's configuration) on your device. The console will log the result of `Linking.getInitialURL()`, demonstrating that it returns `null`. 
5. Close and restart the app, then open the same deeplink again. Now the deeplink works as expected and  `Linking.getInitialURL()` should return the URL.