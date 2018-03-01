import React from 'react';
import CategoryForm from '../category-form/category-form';
import {connect} from 'react-redux';
import {categoryUpdate, categoryDelete} from '../../actions/category-actions';

class CategoryItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      category: this.props.category ?
      this.props.category :
      {},
      editing: false,
    };

    this.handleEditing = this.handleEditing.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleEditing() {
    this.setState({editing: [this.state.editing]})
  }

  handleDelete() {
    this.props.handleDelete(this.state.category);
  }

  render () {
    return( //might change name to category-list
      <li className="category-item"

      onDoubleClick={this.handleEditing}>
        <p>{this.props.category.title}</p>
        <p>{this.props.category.budget}</p>
        <button onClick={this.handleDelete}>Delete</button>
        {this.state.editing ?
        <CategoryForm
          buttonText="update"
          onComplete={this.props.handleUpdate}
          category={this.state.category}
          toggleEdit={this.handleEditing}
          />
          :
          undefined
        }
      </li>
    )
  }
}

export default CategoryItem;