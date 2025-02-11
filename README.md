# React + Vite

Project OverView:

-Property listing page with search functionality.
-Property detail page with detailed information.

Technology:
ReactJS

Setup:
npm create vite@latest real_estate_fe
npm install
npm install axios bootstrap react-router-dom

Folder:
App.jsx : In this app file handled routing and lazy loads for better performance

API endpoint: http://localhost:8000

API endpoint for properties list: http://localhost:8000/properties

API endpoint for single property list: http://localhost:8000/properties/${id}

Backend Deployed Link : https://realestate-propertylist-be.onrender.com


Components :
1.PropertyList: List the properties from backend using axios.
2.PropertyCard: properties shows single property like card(Bootstrap Grid and card used)
3.PropertyDetails: Once click using link detailed properties it displays information like contact,description and at all.
4.SearchBar: For search by location or title I mean use for filtering.

npm run dev - For start the frontend development server.