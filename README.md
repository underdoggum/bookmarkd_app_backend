# Bookmark'd (Back-end)
## by Jameson Wang, Nathan Noack & Lucy Liu.

## Explanation of App
This repo includes an API backend that transmits Bookmark model data as JSON for use in the React frontend. Users may create, read, update, or delete data, through this API connected to MongoDB.\
[Deployed frontend](https://bookmarkd-app-frontend.netlify.app/)\
[Frontend repo](https://github.com/underdoggum/bookmarkd_app_frontend)\
[Deployed backend](https://bookmarkd-app-backend.herokuapp.com/)

## Dependencies (NPM modules)
- Dotenv
- Express
- Mongoose
- Morgan
- Cors

## Models
Models implemented into the bookmark app:
- Bookmark:
  - title: String
  - url: String

## CRUD Route Table
| url | method | action |
|-----|--------|--------|
| /bookmark | get | get all books (index)|
| /bookmark | post | get a particular books (create)|
| /bookmark/:id | put | get a particular books (update)|
| /bookmark/:id | delete | get a particular books (destroy)|
