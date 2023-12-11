
# MOVIE TICKET BOOKING MERN APP

The project is simple movie ticket booking site. Here only authorized user can see the movies ,book them.The authorization,session management process is secure.The API is build using Node js and Express js  and the database is mongodb which is atlas mongodb.The frontend is made using React js,react-router-dom ,along with react -redux toolkit .After login or signup user can see movies , book them (can select time and date and seatnumber),no two user can select the same seatnumber for the same movie


## API Reference

#### Sign Up user--post request

```http
  localhost:5000/api/v1/user/sign_up
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username,email,password` | `JSON ` | **Required**.Return  jwt token  |

#### Login User --post request

```http
  localhost:5000/api/v1/user/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email,password`      | `JSON` | **Required**. Returns jwt token |


#### LogOut --get request

```http
  localhost:5000/api/v1/user/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `none`      | `JSON` | **Required**. Clears the cookies |


#### GetAllMovies --get request

```http
  localhost:5000/api/v1/movie/getall
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `none`      | `JSON` | **Required**. sends the list of the movies |


#### CreateMovies --post request

```http
  localhost:5000/api/v1/movie/createmovie
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| ` title,genre,showtimes,availableSeats,url,description,`      | `JSON` | **Required**. Create the movie but user need to be admin and user are Referenced in this movie object|

#### CreateBooking --post request

```http
  localhost:5000/api/v1/movie/booking/:movie_id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| ` showTimes,seatNumber`      | `JSON` | **Required**. create the Booking |user id will be extracted from cookies


## Authors

- [@sammanamgain](https://github.com/sammanamgain)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`CONNECTION_STRING`

`JWT_SECRET_KEY`

`JWT_EXPIRATION`

`COOKIE_EXPIRATION`


## Installation

To run this project,clone the project
then in the frontend , change this URL :https://movie-react-eq03.onrender.com to http://localhost:5000

```bash
  cd MOVIE
```
navigate to frontend

```bash
  cd frontend
  npm install
  npm run dev
```

navigate to root folder

```bash
  cd backend
  npm install
  node server.js or nodemon server.js
```

Setup your mongodb account at atlas and replace connection string with your string
## 🛠 Skills
Javascript, HTML, CSS,React,React-Router-Dom,React-Redux-toolkit,Node.js,Express.js,MongoDb,tailwindCSS


## Screenshots

![image](https://github.com/sammanamgain/Movie_ticket_booking_MERN/assets/78356846/e27394d4-ddfc-48ba-a1b5-ed9ef4b75bf3)
![image](https://github.com/sammanamgain/Movie_ticket_booking_MERN/assets/78356846/04eb20ba-7374-454e-9946-9fc3802de67b)
![image](https://github.com/sammanamgain/Movie_ticket_booking_MERN/assets/78356846/67e19563-0cc6-4691-aab8-1ecb44334191)
![image](https://github.com/sammanamgain/Movie_ticket_booking_MERN/assets/78356846/73c2e908-4d26-402d-9051-bbbef00dca4a)
![image](https://github.com/sammanamgain/Movie_ticket_booking_MERN/assets/78356846/a272910b-4cfe-433b-988a-2470aa5d7da9)



