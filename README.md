# Kadet Wallet Extension
This is a repo for the web extension Kadet Wallet.

## Tech stack

- React V18
- TailwindCSS 3
- Webpack 5

## Instructions

Clone down this repo by pasting `git clone https://github.com/techfleetworks/kadet-wallet-web-app.git` into your terminal when inside the directory of your choosing. 

Then `cd kadet-wallet-web-app` to enter the cloned repo's directory.

In here run `npm i` to install the dependencies. 

You should be able to open this in your IDE of choice.

## Deployment 

In the project directory, you can run:

### `npm run build`
This will build out a deployable version of the code you currently have. The bundled files will live in the `dist` folder. We will refer back to this directory when installing this in our browser.


### `npm run dev`
This command will run a local development server for the extension so that you can see your changes in the extension and in a browser tab without having to re-install the extension every time a change is made. 


Essentially, the browser only reads JS, HTML, CSS, image files, etc. and therefore needs React to be built out into a deployed version before it can function. Generally speaking, that would require us to upload/install the extension after every change we make to see our progress. 

This makes for a very difficult and cumbersome development environment so with the help of Webpack as our bundler, we can run a development server and see our changes as we make them. 

Once satisfied with our updates we can run the `npm run build` command mentioned above to get the files to install the extension correctly for production use.

## Installation
In your Chrome browser paste `chrome://extensions/` into the URL field and hit enter. In the top right make sure `Developer mode` is `on`.

![Dev Extensions](/readmeImages/extDev.png)

Then, click on `Load unpacked` and navigate to the `dist` directory in your repo. Once the `dist` folder is selected (not any particular file), hit `Select`

![dist](/readmeImages/dist.png)

You should now see the Kadet Extension as one of your browser extension options.

![dist](/readmeImages/ext.png)

Feel free to pin the Kadet extension to your browser for quick access by making sure the pin next to the extension below is blue. 

![dist](/readmeImages/pin.png)

## More on local development environment

Note that Chrome assigns and ID to the extension on your browser, see below:

![dist](/readmeImages/ext.png)

To access this extension's contents inside of a webpage for full use of Chrome Dev Tools (console, elements, etc.) we need to do the following:

- make sure you are running the dev server, `npm run dev`
- open a new tab in Chrome and go to: `chrome-extension://ID/popup.html` replacing ID with the ID you see for your extension (see photo above). 

You should now be able to see the extension on a normal browser page and inspect elements and check console.logs as you'd like. 