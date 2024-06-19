import axios from "axios";

export default axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE4ODQ4NzgxLCJpYXQiOjE3MTg3NjIzODEsImp0aSI6IjlhNzA1ZDNlMTFjMjRhYTRiZDk2YTM2OWQwOWE2YTFjIiwidXNlcl9pZCI6Mn0.bYl6qF5sLj9EXRD2b-piE2Rfm0CDfADmOBCyGDtvqVU",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, Accept, Authorization, X-Request-With",
  }
});