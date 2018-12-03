# Sheltr

Over the years, the process a homeless person has to go through to find, locate, and check into a homeless shelter has not necessarily gotten more difficult, but it definitely hasn't gotten any easier. Even after a homeless person goes through that process and fills out a shelter intake form, there is no guarantee that they have a spot at a shelter to sleep at night. Even if they do find a shelter to stay at, they have to repeat that process over and over, night after night.

This complex process has led to a rise in people sleeping on the streets, a rise in homeless camps along Minneapolis highways, and people dying from being denied a warm place to sleep at night. One of the fastest growing homeless demographic is youth. Many youth are turning to the streets for a variety of reasons and even using the light rail service in Minneapolis at night to keep warm.

This project hopes to solve and slow down the rapidly growing homeless crisis in Minneapolis. The project is a mobile and web based app intended for homeless people to use as a resource and intended to help streamline the process of checking into a shelter. The short term goal of this app is to get homeless people into a shelter easily and quickly each night. The long term goal of this app is to provide an opportunity for homeless people to rebuild their lives and get off the streets for good.

## Table of contents

* [Live](#live)
* [Screenshots](#screenshots)
* [About this project](#about-this-project)
  * [Business pitch](#pitch)
  * [How the app is built](#how-the-app-is-built)
  * [App workflow](#workflow)
  * [Structure of the project](#project-structure)
* [Getting started](#getting-started)
* [Deploying the site](#deployment)
* [Technologies used to create the app](#technologies-used)
  * [Back end technologies](#Backend)
  * [Front end technologies](#Frontend)
  * [Other technologies](#Other)
* [Direction for future development](#future)
* [Issues](#Issues)

## <a name="live"></a>Live

The app is current live at the following URL:
<https://tcsw-homeless.firebaseapp.com/>

## <a name="screenshots"></a> Screenshots

### Login page

<img src="./readme_images/login.png">

### Sign up page

<img src="./readme_images/signup.png">

### My profile page

<img src="./readme_images/profile.png">

### Shelters page - list view

<img src="./readme_images/shelters_list.PNG">

### Shelters page - map view

<img src="./readme_images/shelters_map.PNG">

### Shelter information page

<img src="./readme_images/shelterinfo.png">

### Check in page

<img src="./readme_images/checkin.png">

### Help page

<img src="./readme_images/help.png">

### About page

<img src="./readme_images/about.png">

### Report error page

<img src="./readme_images/reporterror.png">

### Delete account page

<img src="./readme_images/delete.png">

## <a name="about-this-project"></a> About this project

This project was a group project I worked on with two other individuals as part of Twin Cities Startup Weekend 2018. Startup Weekend is an event where you have 54 hours to come up with an idea for a startup,form a team, validate the idea by doing user research and talking to customers, create a prototype of the idea, and do a business pitch of that idea to a panel of entreprenuers at the end. The whole point of startup weekend is not to have a startup company by the end of it but to better understand the process of what it takes to work with a team to build a startup.

For more information about the event, see <http://communities.techstars.com/usa/twincities/startup-weekend/13367>.

Whether you have an idea for a startup or are just looking improve your coding skills in building a prototype, I would highly recommend participating in startup weekend at least once. It is truly an eye opening experience into the constant challenges, obstacles, and grind of the startup world. 

For me, I participated in this event as the lead developer on my team and was the one primarily responsible for building the prototype of the app. Because of the time constraint to get something built for demo purposes, I built the prototype using React. React is a JavaScript user interface framework that Facebook developed/is developing to build component-based applications. React made it very easy to get a working demo app in less than 12 hours.

At the conclusion of startup weekend, our team and app idea ended up winning 1st place. If you have any questions or comments regarding my experience at startup weekend or regarding the app I build, feel free to send me an email at philipstubbs13@gmail.com. I'm also looking for developers to help me fully develop and build out the app. So, if you are a developer still reading this and interested in contributing, please reach out.

### <a name="pitch"></a> Business pitch

At the end of Twin Cities Startup Weekend 2018, our team had to pitch our idea to a panel of 3 entrepreneurs. The slides for the pitch are located here: <https://docs.google.com/presentation/d/1kuuWJGiohRupLT7kvaxcuI-vByM5n4nbDSzPFsdsHqY/edit?usp=sharing>

### <a name="how-the-app-is-built"></a> How the app is built

On the front end side, this project is built using React, which is an open-source JavaScript library developed at Facebook specifically for the task of developing user interfaces. React relies on a component-based architecture where elements of the user interface are broken into small chunks of code called components. To design and build the user interface, I used the Material UI user interface React component library.

On the backend, this project uses Firebase for real-time data storage in a database. It also uses email-based and Google authentication for signing up and logging in users (which is also  a part of Firebase). This project also takes advantage of using node, express, and the Twilio API to create a voice messaging system. The voice messaging system allows homeless people who don't have smart phones to still be able to check into a shelter. Finally, Firebase Hosting is used to deploy and host the site.




