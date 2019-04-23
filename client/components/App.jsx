import React from 'react'
import PostList from './PostList'
import Navigation from './navigation';
import FormRecipe from'./FormRecipe'

import recipeFile from '../../server/public/recipes.json'


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      recipes: recipeFile.recipes
    }
    this.handleAddRecipe = this.handleAddRecipe.bind(this) 
  }
  

  handleAddRecipe(recipes){
    this.setState({
      recipes: [...this.state.recipes, recipes]
    })
  }

  render(){
  return (
    <div>
      <Navigation /><br/>

      <div>
        <FormRecipe onAddRecipe={this.handleAddRecipe} />
      </div>

      <div>
        <PostList recipes={this.state.recipes}/>
      </div>
  
  
      
      
    </div>
    )
  }
}

export default App

