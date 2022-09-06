# Covid-19 Vaccination Project

The present repository contains the code of a landing page developed as the final project of the English Bootcamp, at TEAM International. In the site, users can see information about the status of Covid-19 vaccination in the world. The live version can be checked at [Netlify](https://vaccinationproject.netlify.app/).

## Features

The landing page was built with React and Chakra UI, employing a minimalist design. Also, the site includes a dark-mode, that users can toggle according with their preferences. When users enter the site, they can see a home option, that explains the rationale of the page. Moreover, there is a FAQ section, with common question about Covid-19 vaccines.

![Home](https://dl.dropboxusercontent.com/s/3ayvskc0tduck37/Home-computador.png?dl=0)

The most relevant feature is our map. It shows the number of doses of Covid-19 vaccines of each country. On hover, a pop up appears with a country flag and the amount of doses according to the type (Moderna, Pfizer, Sinovac, etc.). Furthermore, a Contact Us section was made, where you can send a message to the development team.

![Map](https://dl.dropboxusercontent.com/s/z69summc5lfqu5v/Mapa%20celular.png?dl=0)

## Future improvements 

Traditional client-side React apps comes with some SEO considerations. Since the entire markup is generated at run-time by JavaScript, browser crawlers could have problems indexing the content on the web. A possible solution could be porting the app to Next.js, taking advantage of its server-side rendering (SSR) and static site generation (SSG) features.

## Running the project locally

You can run the project using the following commands:

```
git clone https://github.com/Dedox-tech/chakra-landing-page.git
cd chakra-landing-page
npm install
npm start
```

