## Skills Assessment

This repository contains three states of a new contacts widget. This widget will be used across multiple sites. Designers will also use this in mocks for usability tests.

Fork the repo and create the HTML, CSS, and JavaScript for the widget as described in the [Contact List image](https://github.com/ff0000/skills-assessment/blob/master/contactListUpdated.jpg).  See how far you can make it in *3 hours*, but you don't need to spend any more than 3 hours on your solution. You will be asked to explain any places where your solution does not match the spec.  Please target modern browsers (FF/Chrome/Safari), try not to use images, and bonus points for graceful degradation and legacy support solutions.

Please code the page according to industry best practices and organize the assets as you would if delivering it to a client to integrate (not necessarily to deploy).

Bonuses: Don't use any images.  Keep it simple, don't overuse JavaScript.  Prioritize modern browsers - graceful degredation is our friend.

### Resources

* [Contact List JPEG](https://github.com/ff0000/skills-assessment/blob/master/contactListUpdated.jpg)
* [Contact List PSD](https://github.com/ff0000/skills-assessment/blob/master/contactListUpdated.psd?raw=true) (right click and save)

![Screen](https://github.com/ff0000/skills-assessment/raw/master/contactListUpdated.jpg)

## Solution

https://drewbefore.github.io/skills-assessment/

### Known Bugs

* Background doesn't gray out
    * Solution : Create an opaque div around all lists, default to hidden. When a name item is selected enable the div.
* Selecting multiple names
    * Currently : Each click on a name item will generate a new dropdown div with details, without hiding any other visible dropdowns.
    * Solution : 
        1. Set up with bootstrap Active class allowing only one class to be active at at a time
        2. Loop through javascript and deactive others before Activating the name that was clicked on.