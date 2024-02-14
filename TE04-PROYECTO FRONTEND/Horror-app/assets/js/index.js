'use strict'

import { sidebar } from "./sidebar.js";


const pageContent = document.querySelector("[contenido]");

sidebar()

// Home page sections (Top rated, Upcoming, Trending Movies)
const homePageSections = [ /* homeSecciones*/ 
    {
      title: "Estrenos",
      path: "/movie/upcoming",
    },
    {
      title: "Mejor Valorados",
      path: "/movie/top_rated",
    },
  ];

  