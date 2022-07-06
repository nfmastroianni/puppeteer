# How to Use Puppeteer

If you've been looking for a way to automate grabing screenshots of websites, then puppeteer might just be for you.

## How to Run this 'App'

After cloning/forking, simply run

```
cd puppeteer
yarn
node index.js
```

This script will check to see if there is an images directory and create one if necessary. It will then look for a directory with today's date year-month-date. If none exists, it will create it and put screenshots in the dated directory.

## How to specify which sites to grab

Open the sites.js file. You will see that it is an array of objects. Each object specifies the url and the name of the site. Adjust this array by adding your desired sites to grab.

Once this file is saved, see the section above on how to run the grabs.
