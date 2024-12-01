import React from 'react';
import { Link } from 'react-router-dom';
import Usernav from "../components/user/usernav";

const RecipePage = () => {
  // Dummy recipe data with image URLs
  const recipes = [
    { id: 1, title: 'Millet Pancakes', imageUrl: 'path_to_millet_pancakes_image.jpg' },
    { id: 2, title: 'Millet Salad', imageUrl: 'path_to_millet_salad_image.jpg' },
    { id: 3, title: 'Millet Khichdi', imageUrl: 'https://i2.wp.com/bengali.recipeonplate.com/wp-content/uploads/2021/08/millet-khichdi5.jpg?w=1485&ssl=1' },
  ];

  return (
    <>
      <Usernav />
      <div className="container-fluid">
        <div className="container my-5">
          <h1 className="text-center mb-4">Recipe Page</h1>
          
          <div className="text-center mb-4">
            <Link to="/add-recipe" className="btn btn-primary">Add New Recipe</Link>
          </div>
          
          <h3 className="mb-3">Available Recipes</h3>
          <ul className="list-group">
            {recipes.map((recipe) => (
              <li key={recipe.id} className="list-group-item d-flex align-items-center">
                <img 
                  src={recipe.imageUrl} 
                  alt={recipe.title} 
                  className="img-thumbnail" 
                  style={{ width: '100px', height: '100px', marginRight: '20px' }} 
                />
                <Link to={`/view-recipe/${recipe.id}`} className="text-decoration-none">
                  {recipe.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RecipePage;
