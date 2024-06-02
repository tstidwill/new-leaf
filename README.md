# new leaf

BrainStation Software Engineering Bootcamp Capstone Project

## Overview

Your ultimate companion for sustainable living. Discover nearby community gardens, zero-waste shops and thrift stores with our interactive map. Stay informed and spread awareness on upcoming volunteering opportunities, protests and other green events. Turn over a new leaf for a greener tomorrow.

### Problem

The existential climate crisis is overwhelming. This app aims to make sustainable living more accessible, convenient and aims to raise awareness by bringing community together.

### User Profile

Those interested in living more sustainably looking for shops & resources near them or near a certain location. Individuals wanting to discover community events.

### Features

- As a user, I want to be able to find the closest community garden(s), thrift store(s) recycling/compost centers and/or zero-waste grocer(s) to a location
- As a user I want to be able to find events near me
- As a logged in user, I want to be able to create an account to RSVP to events \*time permitting
- As a logged in user, I want to be able to create new Events \*time permittin

## Implementation

### Tech Stack

- Vite + React
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
  - @react-google-maps/api
- Server libraries:
  - knex
  - express
  - bycrypt for password hashing

### APIs

- Google Maps JavaScript API to display map
- Google Maps Geocoding API to convert postal codes to coordinates
- Google Maps Distance Matrix API to find nearest spots?
- Google Calendar API/ Apple EventKit?
- Ottawa Community Gardens API

### Sitemap

- Landing Page: user input for location
- Home page/mission page
- Discover Page: Map with list of shops & events based on postal code
- Register \*time permitting
- Login \*time permittin
- Calendar events \*time permitting

### Mockups

- Mobile first design, responsive if time permits

#### Landing Page

![](/assets/mockups/landing-page.png)

#### Map locations & events

![](/assets/mockups/discover-page.png)
![](/assets/mockups/discover-list.png)

#### Calendar events

\*time permitting

#### Register

\*time permitting

![](/assets/mockups/register.png)

#### Login

\*time permitting

![](/assets/mockups/login.png)

### Data

![](/assets/mockups/draw-sql.png)

### Endpoints

**GET /locations**

- Get all locations within a distance of a location

Parameters:

- Postal code: User-provided as a string
- Distance from: User provided as a number of km

Response:

```
[
    {
        "id": 1,
        "name": "Nu Grocery",
        "address": "143 Main St, Ottawa"
        "distance": 0.25,
        "type": "Grocery Store"
        "description": "Ontario's first fero waste grocery store."
        "hours": "M-F: 9-5" **maybe**
    },
    ...
]
```

**GET /events**

- Get all upcoming events in a city

Parameters:

- City: User-provided (drop-down) string

Response:

```
[
    {
        "id": 1,
        "name": "Glebe Community Association's Aannual Park Clean-Up 2024",
        "location": "Capital Park"
        "date": 04-05-2024
        "type": "Park Cleanup"
        "description": "Come together with your friends, family, and neighbours to the park clean-up near you, make some new acquaintances  – and create some more wonderful neighbourhood moments and memories! "

    },
    ...
]
```

**POST /register**

- Create an account

Parameters:

- Name: User inputted string
- Email:User inputted string
- Password: User inputted string

Response:

```
[
    {
      "name": "Tara Stidwill",
      "email": "tara.stidwill@gmail.com"
      "password": "encryptedpassword"
    },
    ...
]
```

**POST /login**

- Create an account

Parameters:

- Email:User inputted string
- Password: User inputted string

Response:

```
[
    {
    "token": "sdlksjda..."
    },
    ...
]
```

**POST /event/add**
\*time permitting

- As a logged in user, add an event with validation

Req body:

```
[
    {
        "id": 1,
        "name": "Glebe Community Association's Aannual Park Clean-Up 2024",
        "location": "Capital Park"
        "date": 04-05-2024
        "type": "Park Cleanup"
        "description": "Come together with your friends, family, and neighbours to the park clean-up near you, make some new acquaintances  – and create some more wonderful neighbourhood moments and memories! "
    },
    ...
]
```

Resp body:

```
[
    {
        success /fail
    },
    ...
]
```

### Auth

- JWT auth
  - Before adding auth, all API requests will be using a fake user with id 1
  - Added after core features have first been implemented
  - Store JWT in localStorage, remove when a user logs out
  - Add states for logged in showing different UI in places listed in mockups

## Roadmap

- Create client

  - react project with routes and boilerplate pages

- Create server

  - express project with routing, with placeholder 200 responses

- Create migrations

- Gather 15 locations of gardens, zero-waste stores, recycling/compost locations and thrift shops in 2 different cities

- Create seeds with sample data

- Deploy client and server projects so all commits will be reflected in production

- Feature: Home page

- Feature: Map locations near a given postal code

  - Implement maps page including postal code and distance form
  - Store given location in sessionStorage
  - Create GET /locations endpoint and plot on map
  - Create GET /events endpoint and plot on map
  - Customize map to show locations as leaves
  - Make locations clickable to show more details as popup?

- Feature: Create calendar with events _time permitting_

  - Implement calendar page to show all events in a city
  - possibility of adding events?

- Feature: Create account

  - Implement register page + form
  - Create POST /users/register endpoint

- Feature: Login

  - Implement login page + form
  - Create POST /users/login endpoint

- Feature: Implement JWT tokens

  - Server: Update expected requests / responses on protected endpoints
  - Client: Store JWT in local storage, include JWT on axios calls

- Bug fixes

- DEMO DAY

## Nice-to-haves

- Maps
  - Visual radius functionality
- Forgot password functionality
- Ability to add events
- Ability to add new stores
- Ability to save favorite store
-
