The issue is inherent to how Expo handles the initial app launch and deep links. A reliable solution involves using `Linking.addEventListener` to listen for URL changes throughout the app's lifecycle instead of relying solely on `Linking.getInitialURL()`. This ensures that the URL is captured, regardless of when it's initially received.

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrl = async (url) => {
      setInitialUrl(url);
    };

    // Add event listener to capture URLs when the app is already running
    const subscription = Linking.addEventListener('url', handleUrl);

    // Get initial URL if app launched from a deep link
    Linking.getInitialURL().then((url) => {
      setInitialUrl(url);
    });

    // Clean up the event listener when the component unmounts
    return () => subscription.remove();
  }, []);

  return (
    <View>
      {initialUrl && <Text>Initial URL: {initialUrl}</Text>}
    </View>
  );
}
```