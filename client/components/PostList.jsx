import React from 'react'
import PostData from '../../server/public/recipes.json'

class PostList extends React.Component{
    render(){
        console.log(PostData)
    return (
      <div>
        <h1>Hello!!</h1>
        {PostData.recipes.map((postDetail, index) =>
        <div>
            <h1>
                {postDetail.cocktail}
            </h1>
            <p>
                {postDetail.ingredients}
            </p>
        </div>    
            )
        }
    
    
        
        
      </div>
      )
    }
  }
  
  export default PostList