# Movie Organizer

## About

It's a simple API for a movie organizer made as a POC (proof of concept) in order to practice TypeScript.
There's a CRUD to add, show, delete and update a movie.

---

## API Documentation

### **Create**

Route to create a movie
```
POST: /movies/create
```

`Body Example`
```json
{
  "name": "Avengers: Endgame",
  "platform": "Disney+",
  "genre": "Action"
}
```

### **Read**
Route to list all movies.
```
GET: /movies
```

Route to list a movie by id.
```
GET: /movies/:id
```

`Response example`
```json
{
  "id": 1,
  "name": "Don't Look Up",
  "platform": "Netflix",
  "genre": "Comedy",
  "watched": false,
  "createdAt": "09/11/2022"
}
```

Route to list the movie quantity by platform
```
GET: /movies/platforms
```

`Response example`
```json
[
  {
    "platform": "Netflix",
    "count": "3"
  },
  {
    "platform": "Prime Video",
    "count": "2"
  },
  {
    "platform": "Disney+",
    "count": "1"
  }
]
```

### **Update**
Route to update a movie by id as watched or not.
```
PUT: /movies/:id
```
`Example`
```json
{
  "id": 4,
  "name": "The Manor",
  "platform": "Prime Video",
  "genre": "Horror",
  "watched": true,
  "createdAt": "11/11/2022"
}
```

### **Delete**
Route to delete a movie by id
```
DELETE /movies/:id
```