# JATE-Text-Editor

## Description

A web-based text editor application that can be used for creating and saving notes or code snippets with or without an internet connection. This application uses IndexedDB for data persistence, a lightweight wrapper around the IndexedDB API. It features a number of methods that are useful for storing and retrieving data.

The app is a single-page application that meets the PWA criteria and is capable of running offline. It also features redundancy data persistence techniques in case one of the options is not supported by the browser.

## Table of Contents [TOC]

 -Installation
 -Usage
 -Offline Functionality
 -Deployment
 -Demo
 -Heroku Link
 -Credits

## Installation

To install the application, follow these steps:

1. Clone the repository using git clone https://github.com/HollieSundra/JATE-Text-Editor
2. Navigate to the project directory using cd jate-text-editor.
3. Install the necessary dependencies using npm install.

## Usage

To run the application, follow these steps:

1. Navigate to the project directory using cd jate-text-editor.
2. Run the application using npm run start.
3. Open a web browser and go to http://localhost:3000.
4. You should see the text editor application with a client server folder structure.
5. Enter your content and click off the DOM window. The content in the text editor has been saved with IndexedDB.
6. Close the application and reopen it. The content in the text editor has been retrieved from IndexedDB.

## Offline Functionality

This application is capable of functioning offline. To use the application offline, follow these steps:

1. Open the application in a web browser while online.
2. Click on the Install button to download the application as an icon on your desktop.
3. Close the web browser and disconnect from the internet.
4. Open the application from the desktop icon.
5. The application should still function as expected, with data saved and retrieved from IndexedDB.

## Deployment

To deploy the application to Heroku, follow the steps in the Heroku Deployment Guide on The Full-Stack Blog. Ensure that the proper build scripts for a webpack application are included.

## Demo

[Text Editor.webm](https://user-images.githubusercontent.com/106099150/232259063-71f3ee09-5188-49aa-b198-2f6e78e13e8e.webm)

![Text Editor screenshot 1](https://user-images.githubusercontent.com/106099150/232259078-bf9ce2cd-73af-4e3d-9002-c17533220412.png)

![Text Editor screenshot 2](https://user-images.githubusercontent.com/106099150/232259081-94e50b9a-6d40-4fa2-94b7-e470cbf2ea5a.png)

## Heroku Link

https://afternoon-peak-46239.herokuapp.com/


## Credits

This application uses the following technologies:

 -IndexedDB
 -idb
 -Webpack
 -Workbox
