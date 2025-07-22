# DJS05

### Technology Used:
* React
* HTML
* CSS
* Javascript
  
# How to setup:
* Clone/Download the file
* Open the file within VScode
* In a new terminal enter "npm install"
* Once all files have been downloaded
* In the terminal type in "npm run dev"

## Overview:
* The objective for this project is to create a seperate page that displays the details of the show
selected including being able to switch the seasons of the show. It will involve dynamic routing, with each
show having it's own unique URL.

---

## Initial changes:
I have turned the features implemented in the previous DJS into it's own seperate components and called within the App.jsx:
- sort = src\components\Sort.jsx
- filter = src\components\Filter.jsx
- pagination = src\components\Pagination.jsx
- Header = src\components\Header.jsx (Contains the search function)
- Podcast-grid = src\components\Podcast-grid.jsx

---
## Major Functions and Use:
* src\Components\detailPageContents.jsx - It's purpose is to render the header of the show clicked by the user.
* src\Components\podcastPreview.jsx - When the user clicks any of the podcasts it sends them to the direct page, because it was wrapped in a <Link> with the destination to the Podcasts.id
* src\Components\SeasonDetail.jsx - Creates and renders the structure of the season/episode details
* src\Components\Utility\seasonSelector.jsx - A select dropdown where the user can click through each season of the podcast and see the information regarding the chosen season.
* src\detailPage.jsx - This is where the detail components are ran and exported to the main.jsx
---

## Limitations:
* Urls are unique to the podcast, but do not show the name of the Podcast rather the ID.
* some of the shows do not feature genres, but are met with an "Unknown"
  
