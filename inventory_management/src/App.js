import React from 'react';
import AddCategoriesPage from './components/AddCategoriesPage';
import LoginPage from './components/LoginPage';
import AddUsersPage from './components/AddUsersPage';
import AddProductPage from './components/AddProductPage';

function App() {
  return (
    <div className="App">
      <LoginPage />
      <AddUsersPage />
      <AddCategoriesPage/>
      <AddProductPage />
    </div>
  );
}

export default App;
