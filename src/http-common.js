import axios from "axios";

export default axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  headers: {
    "Content-type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE4ODA2MTE5LCJpYXQiOjE3MTg3MTk3MTksImp0aSI6IjBlMjY2ZDhjYmI3MTQyNmY5MzEwNTA5NWFlNjZkYTI5IiwidXNlcl9pZCI6Mn0.AM8Sr02qnLu5Aqdj2zH-gQVz20udS8Sxynr-lXCWuJ4",
  }
});