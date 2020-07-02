# React Native Modal Use Cases


## Use Cases
- [x] visible
    - Minimal Modal Usage
    - Button with title "Show More"
    - Opens default modal with text content
- [x] animationType
    - Animated Entry Demonstration
    - pill styles on top of screen which decides how all modals on the page show up
    - Slide Up 
    - Fade 
    - No Animation
- [x] hardwareAccelerated
- [x] statusBarTranslucent
    - No distraction mode example
- [ ] onDismiss 
    - Ask user for confirmation  after reading a text / terms & conditions
- [ ] onOrientationChange
- [ ] onRequestClose
    - Prompt user that this action is necessary to proceed in application (when back button pressed with modal open)
- [ ] onShow
    - Find time spent in viewing the content of the modal, (make user to wait n seconds after modal loads to click on submit button)
- [ ] presentationStyle
    - show a large image / text on large screensize 
- [ ] hardwareAccelerated
    - switch to launch modal with hardware acceleration on
- [ ] onOrientationChange
    - change layour of content when layout changes
- [ ] supportedOrientations
    - show message to user when opening modal in non portrait view ?
- [ ] transparent
    - use modal as a quick popup, without hiding other content

## E2E Tests
- [ ] Write detox tests for each of the above alerts and test the following
    - [ ] Modal is visible
    - [ ] Back button behavior on open modal
    - [ ] Check use cases against status text changes