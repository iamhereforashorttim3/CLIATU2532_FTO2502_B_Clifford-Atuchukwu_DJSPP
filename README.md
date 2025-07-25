# DJSPP

### Technology Used:

- React
- HTML
- CSS
- Javascript

# How to setup:

- Clone/Download the file
- Open the file within VScode
- In a new terminal enter "npm install"
- Once all files have been downloaded
- In the terminal type in "npm run dev"

## Overview:

- As this being the final part of the DJS, we were tasked with finalizing and adding brand new features onto our app such as;
  Global Audio Player, Carousel that displays recommended Podcasts, A Favourite page and a Theme Toggle.

---

## Initial changes:

- I moved the Dropdown select underneath the Current Season, so it's easier for the user to find
- Created Home and Favourites buttons that will send the user to that specific page
- Fixed the responsiveness for Tablets and Mobile

---

## Audio Playback System

Location: `src/Utility/Audio/`

### Key Components:

**Global Audio Player**

- Fixed position player at bottom of screen
- Shows current track info and playback progress
- Play/pause controls
- Seamless theme switching

## Theme Management

Location: `src/Utility/Theme/`

### Features:

- Light/dark theme toggle
- Preference is stored in localStorage
- Components change with the theme
- Smooth transitions between themes

## Favorites System

Location: `src/Utility/Favorites/`

### Functionality:

- Add/remove shows from favorites
- Persistent storage (localStorage)

## The Carousel

Location: `src\Utility\additional-features\carousel.jsx`

## Functionality:

- Creates a horizontal carousel that recommends the user shows
- When clicked will send the user to a detail page of the show

---

## Limitations:

- The user is not able to save the episodes or seasons. Only shows
