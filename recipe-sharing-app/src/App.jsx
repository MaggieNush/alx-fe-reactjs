import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import AddRecipeForm from './components/AddRecipeForm'
import EditRecipeForm from './components/EditRecipeForm'
import RecommendationsList from './components/RecommendationsList'
import FavoritesList from './components/FavoritesList'

function App() {
  return(
    <Router>
    <div>
      <Routes>
        <Route path='/' element={<AddRecipeForm />} />
        <Route path='/recipes/:recipeList' element={<RecipeList />} />
        <Route path='/recipes/:recipeId' element={<RecipeDetails />} />
        <Route path='/recipes/add' element={<AddRecipeForm />} />
        <Route path='/recipes/:recipeId/edit' element={<EditRecipeForm />} />
        <Route path='/recipes/FavoritesList' element={<FavoritesList />}/>
        <Route path='/recipes/RecommendationsList' element={<RecommendationsList />}/>
      </Routes>
    </div>
    </Router>
  );
};

export default App;
