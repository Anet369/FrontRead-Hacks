# DISCLAIMER:
I am in no way responsible for what you use this for. <br />
This has also already been reported to FrontRead awhile ago, but since they haven't changed it yet, I don't think they will.

# Flaws
1. All the users progress data is stored in the App.userdata variable available through the developer console.
2. There is no server-side validation on saveUserData meaning you could save your progress to other peoples accounts, thereby resetting their progress
3. There is no server-side validation on the /auth endpoint (takes a uni-login, returns information about that user, including their saveid)

# Interesting commands
```js
Hax.impersonate("UNILOGIN")
```
Give it a uni login and it will log you in as that user<br />

```js
Hax.unlockDiploma();
```
Completes all tests & exercises to unlocks the diploma

```js
Hax.resetProgress();
```
Deletes all your progress

# What can it to
Options for completing things are:
  * completeAllExercises
  * completeAllTests
  * unlockAllVideos
  * unlockDiploma

Options for resetting progress are:
  * inCompleteAllExercises
  * inCompleteAllTests
  * lockAllVideos
  * deleteEverything

Other fun stuff:
  * impersonate

# How to install (for noobs)
**OBS**: This only lasts until you refresh the page
1. Open FrontRead
2. Press F12
3. Go to the console tap
4. Copy Paste the content of the hax.js file into the console
5. Press enter

# How to use (for noobs)
Firstly, follow the **How to install** guide above. <br />
Now you just copy paste one of the interesting commands into the console and press enter <br />
You can also just type "Hax." and there will come a list of available options <br />
