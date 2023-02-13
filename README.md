# TODOs

- Add a table featuring browser compatibility of features
- Add a nice cover photo
- Add an example with custom UI
- Create a GIF?

# Overview

This is a barebones library which only gives you some flags. What you do with that information is totally upto you. The UI for handling various use cases is completely in your hands.

# Features

1. Force full-screen mode
2. Warns when user switches tabs
3. Prevents user from opening the context menu (menu opened by pressing right-click from the mouse)
4. Prevents user from copying website content
5. Works well with custom proctoring logic (which you might want to implement separately)
6. Webcam detection (Coming Soon)

## Why should you use this?

There are lots of browser specific issues that show up when you are working with browser APIs. This package tries to cover most if not all of them. So you can focus on whats actually important for your business

### Why do we not support preventing user from opening Browser Developer Tools

Currently, there is no reliable way to accurately determine if Browser Developer Tools are opened. `react-devtools` works (mostly), but it also gives false positives. It determines if Developer Tools are open by checking the window width, which as you might already guess, is not a very accurate way.

# Usage

### Setting up full screen detection

1. We cannot force the browser to enter full screen mode. We need to do it on a user gesture. Once you have identified the gesture that you want to use, you can use the following handler to request full screen mode.

   ```tsx
   import { useProctoring, triggerFullScreen } from 'react-proctoring'

   function App() {
     const { fullScreen } = useProctoring({
       forceFullScreen: true,
     })

     return <button onClick={triggerFullscreen}>Trigger full screen</button>
   }
   ```

2. By default, browsers have a black background for fullscreen pages. You can override those default styles by adding the following lines in your global CSS file.

   ```css
   :fullscreen,
   ::backdrop {
     background-color: white;
   }
   ```
