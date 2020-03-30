import React, { Component } from 'react';

class ImagesPagination extends Component {

  render() {
    const imagesPerPage = this.props.imagesPerPage;
    const totalImages = this.props.totalImages;
    
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
      pageNumbers.push(i)
    };
   
    return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <a onClick={() => this.props.paginate(number)} href="!#" className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
};

export default ImagesPagination;