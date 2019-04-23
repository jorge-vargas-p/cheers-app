import React from 'react'


class PostList extends React.Component{
    render(){
        console.log(this.props)
    return (
        
    <div><h1 align="center"> Your Cocktails!!</h1>
    <br></br>
        
      <div className="col-lg-4">
        
        {this.props.recipes.map((postDetail, index) =>
        <div className="col-mt-3">
        
            <div className="card-header">
                <h1>
                    {postDetail.cocktail}
                </h1>
            </div>
        
            <div className="card-body">
                <p> 
                    {postDetail.ingredients}
                </p>
            </div>
        </div>    
            )
        }      
        
      </div>
      </div>     

      )
    }
  }
  
  export default PostList