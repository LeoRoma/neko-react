import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import DropdownBreed from './Dropdowns/DropdownBreed';
import DropdownCategory from './Dropdowns/DropdownCategory';
import DropdownFormat from './Dropdowns/DropdownFormat';
import DropdownTypes from './Dropdowns/DropdownTypes';

class DropdownBreedImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selector: '',
      imageId: '',
      type: '',
      dropdownCategoryActive: false,
      dropdwonBreedActive: false
    }
  };

  handleDropdowns = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state)
    this.dropdownActivator(event);
  };

  dropdownActivator(event) {
    if (event.target.value === "breed") {
      this.setState({
        dropdownBreedActive: true,
        dropdownCategoryActive: false
      })
    };
    if (event.target.value === "category") {
      this.setState({
        dropdownCategoryActive: true,
        dropdownBreedActive: false
      })
    }
  };

  handleSubmit = event => {
    let selector = this.state.selector;
    let imageId = this.state.imageId;
    let type = this.state.type;
    console.log(type)
    event.preventDefault();
    this.props.getImages(selector, imageId, type);
  };

  render() {

    const dropdwonBreed =
      <DropdownBreed
        handleDropdowns={this.handleDropdowns.bind(this)}
        breeds={this.props.breeds}
      />

    const dropdownCategory =
      <DropdownCategory
        handleDropdowns={this.handleDropdowns.bind(this)}
        categories={this.props.categories}
      />

    const dropdownFormat =
      <DropdownFormat
        handleDropdowns={this.handleDropdowns.bind(this)}
      />

    return (
      <div>
        <div className="row">
          <div className="col">
            <DropdownTypes
              handleDropdowns={this.handleDropdowns.bind(this)}
            />
          </div>
          <div className="col">
            {this.state.dropdownBreedActive ? dropdwonBreed : null}
          </div>
        </div>
        <div className="row row-dropdown-category">
          <div className="col">
            {this.state.dropdownCategoryActive ? dropdownCategory : null}
          </div>

          <div className="col">
            {this.state.dropdownCategoryActive ? dropdownFormat : null}
          </div>
        </div>


        <div className="row row-search" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
          <Button
            style={{ color: "#2196F3" }}
            onClick={this.handleSubmit.bind(this)}
          >Search</Button>
        </div>
      </div>
    )
  }
};

export default DropdownBreedImg;