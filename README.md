<h1 align="center">
  <img alt="RIVPR" src="https://res.cloudinary.com/viniciusalvesdefaria/image/upload/v1613257601/RIVPRLogoRounded_dxtja6.png" width="250px" />
</h1>
<p align= "center">:earth_americas: An application visioning a better administration for local governmental entities in their cities. :earth_americas:</p>

<h4 align="center"> 
	:globe_with_meridians:  RIVPR(Regional Issue Vizualizer and Problemns Report) | | In Development  :globe_with_meridians:
</h4>

<p align="center">
  <a href="#iphone-about-the-project">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#art-layout-of-the-applicaiton">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-launching-the-project">Lauching the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#man_technologist-used-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#raising_hand_man-author">Author</a> 
</p>

</br>
</br>

## :iphone: About the project:

:earth_americas: RIVPR - Is an application that allows the users report problems in their region, so the governmental entities will be able to see easier the problems with the city and solve them quickly.

:mortar_board: The project was developed with the main purpose of became the undergraduate thesis in the technician course of IT from the Federal University of Viçosa.

:chart_with_upwards_trend:The project was an essential opportunity to develop skills with [React Native](https://reactnative.dev/), [NodeJS](https://nodejs.org/en/) and others technologies, like the Geocoding API's and Maps libraries.

#### :mag_right: More informations:

This repository contains an REST API developed with NodeJs as backend and a mobile application developed in React Native, every of them in JavaScript.

**Node.js**: is an REST API that does all the CRUD of the application, data persistence, exception management and gives data to the mobile part of the project.

**React Native**: is the app part that contains the User Interface, and also has the map display with some functions that are essential for the well working.

</br>
</br>

## :art: Layout of the Application:

### LogIn and SignUp Screens:

 <img alt="RIVPR-LoginAndSignUp" src="https://res.cloudinary.com/viniciusalvesdefaria/image/upload/v1613256274/RIVPR/LoginAndSignUpgif_bodvi8.gif">
 
### Main Screen:
 <img alt="RIVPR-MainScreen" src="https://res.cloudinary.com/viniciusalvesdefaria/image/upload/v1613256301/RIVPR/MainScreengif_ayhxns.gif">
 
### Report Inspect Screen:
 <img alt="RIVPR-ReportInspect" src="https://res.cloudinary.com/viniciusalvesdefaria/image/upload/v1613256371/RIVPR/ReportInspectgif_vuon5e.gif">
 
### Profile and Profile Options Screens:
 <img alt="RIVPR-ProfileAndProfileOptions" src="https://res.cloudinary.com/viniciusalvesdefaria/image/upload/v1613256515/RIVPR/Profilegif_ia1dqn.gif">
 
### Add Report and Seach Report Screens:
 <img alt="RIVPR-AddReportAndReportSearch" src="https://res.cloudinary.com/viniciusalvesdefaria/image/upload/v1613256764/AddReportAndSearchgif_jhpgl9.gif">

</br>
</br>

## :rocket: Launching the project:

The project is divided in two main parts:

1. Backend (backend folder)
2. Mobile/Frontend (mobile folder)

:bulb: Is required that the backend is in execution to work.

### Pre requirements

#### Before start, you should need have installed in your computer those following tools:

<img align="center" alt="GIT" height="25" width="35" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" style="max-width:100%;"> [Git](https://git-scm.com)</img>
</br>
<img align="center" alt="NodeJS" height="25" width="35" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" style="max-width:100%;"> [Node.js](https://nodejs.org/en/)</img>

#### Adding, you must have an ambient to run mobile applications, you can choose the Expo for that:

<img align="center" alt="Expo" height="25" width="25" src="https://cdn.icon-icons.com/icons2/2148/PNG/512/expo_icon_132404.png" style="max-width:100%;"> [Expo](https://expo.io/)</img>

#### It is also recommended a good code editor, for example:

<img align="center" alt="VisualStudioCode" height="25" width="35" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg" style="max-width:100%;"> [VSCode](https://code.visualstudio.com/)</img>

#### Ending, is necessary to have an SQL database, preferentially:

<img align="center" alt="SQLite3" height="25" width="35" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/1200px-Sqlite-square-icon.svg.png" style="max-width:100%;"> [SQLite3](https://www.sqlite.org/index.html)</img>

</br>

### :gear: Starting the Backend (Server API):

```bash

# Clone the Repository
$ git clone https://github.com/ViniciusResende/RIVPR.git

# Enter the poject folder in the Terminal
$ cd RIVPR

# Go to the server folder
$ cd backend

# Install all the dependencies
$ npm install

# Execute the following code to construct the migrations
$ npx knex migrate:latest

# Execute the appliction with this command
$ npm start

# The server will start in the port:3333

```

---

### :vibration_mode: Starting the Frontend (Mobile):

```bash

# Clone this Repository
$ git clone https://github.com/ViniciusResende/RIVPR.git

# Enter the poject folder in the Terminal
$ cd RIVPR

# Go to the mobile folder
$ cd mobile

# Install all the dependencies
$ npm install

# Execute the appliction with this command
$ yarn start

# With this done, a QR Code will be displayed, you can scan it with the Expo App or you can take the route link and use in a Cell Phone Emulator

```

---

## :man_technologist: Used Technologies:

Those following tools were used in the project development:

### **Mobile** ([React Native](https://reactnative.dev/) + [JavaScript](https://www.javascript.com/))

- **[Axios](https://github.com/axios/axios)**
- **[Expo Location](https://docs.expo.io/versions/latest/sdk/location/)**
- **[Feather](https://icons.expo.fyi/)**
- **[React Native Maps](https://github.com/react-native-maps/react-native-maps)**
- **[React Native Picker](https://github.com/react-native-picker/picker)**
- **[React Navigation](https://reactnavigation.org/)**
- **[React WebView](https://github.com/react-native-webview/react-native-webview)**

### **Server** ([NodeJS](https://nodejs.org/en/) + [JavaScript](https://www.javascript.com/))

- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[Crypto](https://nodejs.org/api/crypto.html)**
- **[Express](https://expressjs.com/)**
- **[SQLite3](https://www.sqlite.org/index.html)**

</br>

## :raising_hand_man: Author

<a href="https://github.com/ViniciusResende">
 	<img src="https://res.cloudinary.com/viniciusalvesdefaria/image/upload/v1613257612/foto_perfil_rounded_mv1cpi.png" width="100px;" alt=""/>
 <br />
 	<b>Vinícius Alves</b></a> <a href="https://github.com/ViniciusResende" title="Vinícius Alves"></a>
 <br />
