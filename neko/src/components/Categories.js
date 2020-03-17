import React, { Component } from 'react';
import createTypography from '@material-ui/core/styles/createTypography';

class Categories extends Component {
  render() {
    const categories = this.props.categories
    this.props.categories.map((category) => {
      console.log(category.url)
    })
    console.log(this.props.categories)
    return (
      <div>
        {
          categories.map((category) =>
            <div>
              <img
                src={category.url}
                width="620"
                height="430">
              </img>
            </div>)
        }

      </div>
    )
  }
}

export default Categories;