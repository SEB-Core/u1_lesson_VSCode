# Introduction to VS Code

![Michael](./images/michael.png)


## Lesson Overview

This lesson is a brief introduction to VS Code by Microsoft, the go-to text editor for web developers.  You'll be spending a lot of time using this program, and the faster you are acclimated to it and become comfortable with it, the better coder you will be!  In this lesson we'll review the basic layout, usage of common features, and review a few things that can take VS Code even further like hot keys and Extensions.


## Objectives
  - Review the main features and layout of VS Code
  - Practice several common hot-key commands and shortcuts
  - Review and synchronize certain *Settings* to ensure we all start off on the same page
  - Discuss common helpful and/or necessary *Extensions* for VS Code

![Tank](./images/tank.gif)


## Getting Started
  - **Fork** and **clone** this repository
  - Open the repo in VS Code with `code .`


## VS Code Profile Setup

[💊 Download the Student VS Code Profile](https://github.com/SEB-Core/u1_lesson_VSCode/releases/download/profile/student.code-profile)

**Import steps:**  
1. In VS Code → Open the **Command Palette** with <kbd>Cmd</kbd> + <kbd>Shft</kbd> + <kbd>P</kbd> (<kbd>Ctrl</kbd> on Windows)
2. Search **Profiles: Import Profile…**
3. Select **Import from file** → pick the downloaded `student.code-profile`
4. Click **Create & Switch**


_"Buckle your seatbelt, Dorothy - cuz Kansas, is goin' bye-bye."_


## Basic Layout

![Basic Layout](./images/layout.png)

Take a look at the main UI (**U**ser **I**nterface) layout in the image above. Your VS Code layout may not look *exactly* like this, but it'll be close.  Let's look at each of these different sections:

  **A)** ***Activity Bar*** - Use these icons to switch between and show/hide different views.

  **B)** ***Side Bar*** - Contains views like the *Explorer View* to show your entire project in a compact and readable way.

  **C)** ***Editor Groups*** - This is the main area for editing your code. Can be configured in any layout so you can view multiple files at once.

  **D)** ***Panel*** - Can show panels for debugging, output, errors and warnings, but most importantly *an integrated terminal* (ooooh, ahhhh).

  **E)** ***Status Bar*** - Shows relevant information about the current open project.

  **E)** ***Status Bar*** - Shows relevant information about the current open project.

![DejaVu](./images/dejavu.gif)


### Features 

  ***State Preservation*** - VS Code will always open in the same state you left it in.  This is an extremely handy feature. Let's try opening a directory or something and then completely closing out of VS Code. Now let's reopen the project, and look! Everything is right how we left it! (If this didn't work for you, don't worry, it will later on.)

  ***Side by Side Editing*** - You can rearrange your editor windows so that you can view several at once. This can be *super* handy. Let's try that! Click on a file in the side bar and hold and drag it to one side of the Editor Group section. You should see a highlighted section where the file will be opened.

  ***MiniMap*** - You can also display a code outline or "minimap" for quick navigation through a lot of code. Try View -> Show Minimap. There's a bunch of fake code in ` code.js ` that we can jump around in with the minimap (don't worry it's all fake and non-working). Let's try! With the minimap enabled, you can see a miniature layout of your entire file displayed to the right of your code. Click anywhere on that display and you will jump to that section of the code.

  ***Breadcrumbs*** - Above each open file is a path to help you keep track of the file locations. This can be a nice reference.

![Red Pill](./images/pills.png)

  
### Hot Keys and Shortcuts

  ***Open Terminal*** - Quickly open your built-in terminal by hitting <kbd>Ctrl</kbd> + <kbd>`</kbd>
  
  ***Wrap Your Code*** - Quickly enable word wrap on your code by hitting <kbd>Opt</kbd> + <kbd>z</kbd>

  ***Save*** - Save the file you're working on with <kbd>Cmd</kbd> + <kbd>S</kbd> (sub <kbd>Ctrl</kbd> for <kbd>Cmd</kbd> if using Windows going forward)

  ***Open/Close Sidebar*** - Quickly hide/show the sidebar with <kbd>Cmd</kbd> + <kbd>B</kbd>

  ***Command Palette*** - Quickly open the Command Palette by hitting <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>. From here, you can perform a whole bunch of tasks:
  - Find any file or project by simply typing it's name.
  - Cycle through recent files you've opened.
  - Search for specific Settings.
  - Type <kbd>?</kbd> to bring up a list of everything you can do from the Command Palette.

Using this feature can save you time and make you a more productive dev.

Let's hit <kbd>Cmd</kbd> + <kbd>,</kbd> to quickly open *Settings*...

![Spoon](./images/spoon.gif)


### Settings
Settings can be set for the User overall, or for a specific workspace/project.  For the most part, you'll want to configure the Settings for the User.

There are ***tons*** of settings that you can adjust and change to customize your editor. But beware, don't change something if you aren't sure what it does. VS Code gives us access to a lot more settings than a standard program. It assumes you know what you're doing since the primary users are programmers. So just be careful.

Let's hit <kbd>Shft</kbd> + <kbd>Cmd</kbd> + <kbd>X</kbd> and look at some helpful *Extensions* we can add to VS Code...

![Upgrade](./images/kung-fu.gif)


### Extensions

VS Code allows for user-created extensions to be installed to add features, theming, and useful shortcuts and bonuses not provided by the base program. Here are some common, useful extensions - these have already been installed for you:

  ***indent-rainbow*** - Colorizes your indentations to make it easy to tell which section you're in while coding.

  ***Code Spell Checker*** - A basic spell checker that works well with code and documents.

  ***Python*** - An extension that helps VS Code operate normally when using the Python coding language (that we'll learn and use in Unit 4).

  ***Prettier - Code formatter*** - Enforces a built-in style guide on your code to ensure tabulation, spacing, indents, etc. are all uniform.  

  ***Auto Rename Tag*** - Automatically renames a closing HTML tag when you rename the opening tag.

  ***Path Intellisense*** - Automatically fills in pathnames for you to help you prevent pathing issues due to typos.

There are ***myriad*** other extensions available for VS Code, but much like Settings, be careful what you install/change. Not all have been properly vetted and most make *core changes* to your VS Code environment that could directly influence your ability to code properly.

A general rule of thumb is: ***do not*** install an extension unless you **a)** have read the documentation for it, **b)** know what the extension does, **c)** have a specific need for it, and **d)** will actually use it.  But if you find one you want to use, don't be afraid to try it! If it's no good, just uninstall afterward.


![ShowMe](https://i.redd.it/78dk3c2okkzd1.gif)


## Lesson Recap

Hopefully you feel a little more comfortable using VS Code after this walkthrough.  This is ***the primary tool*** you will use over the next 12 weeks (and beyond) as a web developer.  The more comfortable you are with using it, the better and more efficient you will be!
  
![Believe](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F66.media.tumblr.com%2F33180dc3803c4d95c8c83b3727db4727%2Ftumblr_ozhuufZkjW1tu7563o1_500.gif&f=1&nofb=1)

  
## Resources
 - [Official VS Code Docs](https://code.visualstudio.com/docs)
 - [YouTube Video Tutorials](https://www.youtube.com/watch?v=4q1tD39Mk_A&list=PLLnpHn493BHHkdpK8E37x_d5cOZBr4GlL&ab_channel=LevelUpTuts)
 - [White Rabbit](https://youtu.be/Vy7RaQUmOzE)
