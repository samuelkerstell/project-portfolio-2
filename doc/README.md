# Premier League Quiz

## Welcome!
[View the live project here]()

This website is designed to showcase up-and-coming producers and artists and provide a platform for them to promote their music to a wider audience.

![Different screen sizes]()

# Features

## Existing Features

* ### Header
  * Shows the name of the site
  * When clicked you get back to the home page.
  * The header is valuable for users because it makes it obvious for the user what the site is about.

![Screenshot of the navigation bar.](readme-doc/navigation-bar.jpg)

* ### How to play container
  * 
  * 
  * 

![Screenshot of the How to play section](readme-doc/landing-page-image.jpg)

* ### Quiz Container
  * An obvious button to start the quiz.
  * This is valuable for artist looking for new ways to showcase their work.
  * This is valuable for visitors searching for new music.

![Screenshot of quiz container](readme-doc/music-gallery.jpg)

* ### The Quiz Options
  * 
  * 

![Screenshot of The game result](readme-doc/send-music.jpg)

* ### The game result
  * 
  * 

![Screenshot of The game result](readme-doc/send-music.jpg)

* ### Background Image
  * 

  ![Screenshot of the Background image](readme-doc/confirmation.png)


## Future Features
 ### High Score System.
 * In the future I would like to add a system that would save the users high score.

# Testing


## Testing User Stories

| `Goals` | `How Are They Achieved?` |
| ----- | ---------------------- |
| `First time visitors` | |
| Understand what the site is and how to play the quiz. | The How to play container gives the user a good understanding of what the site is about. |
| Learn more about the Premier League  | By listening to music in the music gallery. |
| Send in their music.       | The "Send In Your Music!" encourages users to send in their own music. |
| `Returning Visitors`   |
| To come back and find new music in the music gallery. | By updating the music gallery regularly. |
| Send in their latest music. | By promoting their past work in the music gallery. |
| `Admin User`           |
| Review music sent in | Listening to the sent in music |
| Updating the music gallery | By adding the new music sent in from visitors to the music gallery. |

## Full Testing
Full testing was performed on the following devices:
* PC:
  * Desktop PC
* Laptop:
  * Macbook Air 2021 13.6-inch screen
* Mobile Devices:
  * iPhone 13.

Desktop PC tested the site using the following browsers:
* Google Chrome
* Opera
* Firefox

The Apple devices tested the site using the following browsers:
* Safari
* Google Chrome


I've confirmed that the site is responsive and looks good on different screen sizes.

| `Feature` | `Expected Outcome` | `Testing Performance` | `Result` | `Pass/Fail`|
| ----------|--------------------|-----------------------|----------|------------|
| `Navbar`  | |
| Logo               | When clicked the user will be redirected to the Home Page  | Clicked link  |  Redirected to the Home Page  | Pass |
| Music Gallery      | When clicked the user will be redirected to the Music Gallery  | Clicked link  | Redirected to the Music Gallery  | Pass |
| About Us           | When clicked the user will be redirected to the About Us  | Clicked link  | Redirected to the About Us  | Pass |
| Contact Us         | When clicked the user will be redirected to the Contact Us  | Clicked link  | Redirected to the Contact Us  | Pass |
|  | | | | |
| `Music Gallery` |  |
| Press Play Button  | When clicked user will be able to hear the song  | Clicked on play button   | Song starts playing  | Pass |
| Press Pause Button | When clicked user will be able to pause song     | Clicked on pause button  | Song pauses          | Pass |
| Press Mute Button  | When clicked user will be able to mute the song  | Clicked on mute button   | Audio is muted       | Pass |
| | | | | |
| `Send In Your Music!`
| Email Input Empty       | The Email is a required field, so should not submit with no value       | Tried to submit form with no value entered    | Tooltip lets user know this value is required      | Pass |
| Email Input             | Entered plain text                                                     | Tried to submit form with no @ symbol entered | Tooltip lets user know an email address is required here | Pass |
| Name Input Empty        | The Name is a required field, so should not submit with no value        | Tried to submit form with no value entered    | Tooltip lets user know this value is required      | Pass |
| Song Name Input Empty   | The Song Name is a required field, so should not submit with no value   | Tried to submit form with no value entered    | Tooltip lets user know this value is required      | Pass |
| No File Choosen         | The choose file button is a required field, so should not submit with no value | Tried to submit form with no value entered | Tooltip lets user know selecting a file is required | Pass|
| Choose File Button      | User chooses file and will get a visual confirmation file is choosen    | Press choose file button and chooses file     | File name shows up to the right of the button      | Pass |
| Submit Button           | Redirected to a new page with confirmation that the song has been sent  | Tried to submit form with correct values entered | Redirected to the confirmation page with confirmation message | Pass |
| | | | | |
| `Confirmation Page` |
| Home Page Link | When clicked user will be redirected to the Home Page | Clicked on link | Redirected to the Home Page  | Pass |
| | | | | |
| `Footer` |
| Spotify Icon | When clicked user will be redirected to https://open.spotify.com/? in a new tab          | Clicked Spotify icon    | https://open.spotify.com/? opened in a new tab       | Pass |
| Soundcloud Icon | When clicked user will be redirected to https://soundcloud.com/skerstell in a new tab | Clicked Soundcloud icon | https://soundcloud.com/skerstell opened in a new tab | Pass |
| YouTube Icon | When clicked user will be redirected to https://www.youtube.com in a new tab             | Clicked YouTube icon    | https://www.youtube.com opened in a new tab          | Pass |
| Instagram Icon | When clicked user will be redirected to https://instagram.com/ in a new tab            | Clicked Instagram icon  | https://instagram.com/ opened in a new tab           | Pass |

### Bugs
Fieldset styling is not working properly in firefox.

#### Solved Bugs
* Whenever I tried to send in a file I would just get the "Error code: 501".
 To resolve this I made a new html file and added confirmation.html to the form action.

* The site was experiencing horizontal scrolling on devices with a width of less than 305px. To resolve this, I applied the following code:

![Bug Fix](readme-doc/bug2.jpg)

## Validation Testing
* HTML
  * No errors were returned when passing through the official [W3C validator](https://validator.w3.org)
* CSS
  * No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)
* Accessibility

![Screenshot of the Lighthouse Pagespeed](readme-doc/lighthouse22.png)

# Technologies Used

## Frameworks, Libaries & Progams Used
  * Hover:css was used on the navigation bar and the submit button to show a transition when hovered over.
  * [Google Fonts](https://fonts.google.com) was used to import the 'Prompt' font in the style.css file which is used on all text of the website.
  * [Font awesome](https://fontawesome.com) was used for the icons in the footer.
  * [Git](https://gitpod.io) was used for version control system to manage code changes, and the Gitpod terminal to commit those changes to Git and push them to GitHub.
  * [GitHub](https://github.com) was used to store the project code after being pushed from gitpod.
  * [Balsamiq](https://balsamiq.cloud) was used for wireframe.
  * [compressor.io](https://compressor.io) was used to compress the landing page image.
  * [ChatGPT](https://chat.openai.com) was used to improve copyright.
 ## Languages Used
 * HTML5
 * CSS3

# Deployment
* The site was deployed to GitHub pages. The steps to deploy are as follows:
  * In the GitHub repository, navigate to the Settings tab
  * From the source section drop-down menu, select the Master Branch
  * Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
The live link can be found here - [Sam's Music Blog](https://samuelkerstell.github.io/portfolio-project-1/index.html)

# Credits
## Code Used
 * The CSS on the footer was taken from the [Love Running Project](https://github.com/samuelkerstell/love-running)

## Content
* Instructions on how stick the footer to the bottom of the page was taken form this [page](https://dev.to/nehalahmadkhan/how-to-make-footer-stick-to-bottom-of-web-page-3i14)
* Instructions on how to style audio elements was taken from this [blog page](https://blog.shahednasser.com/how-to-style-an-audio-element/)
* Instructions on how to center an audio element was take from this [page](https://stackoverflow.com/questions/16823868/center-html-5-audio-players-for-all-browsers)
## Media
* The landing page image was taken from [Pexels](https://www.pexels.com/photo/grayscale-photography-of-person-using-dj-controller-860707/)