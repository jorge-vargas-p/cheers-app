import React from 'react';

class FormRecipe extends React.Component {
  constructor () {
    super();
    this.state = {
      name: '',
      ingredients: '',
      description: '',
      
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddRecipe(this.state);
    this.setState({
      name: '',
      ingredients: '',
      description: '',
      
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Cocktail-Name"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="ingredients"
              className="form-control"
              value={this.state.ingredients}
              onChange={this.handleInputChange}
              placeholder="Ingredients"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Preparation"
              />
          </div>
          
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }

}

export default FormRecipe;