import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    category: 'Business'
  

  };

  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string

  };

  constructor() {
    super();
    this.state = {
      articles: [],
    
      page: 1,
      totalResults: 0
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&catagory=${this.props.catagory}&apiKey=6f2e5be4ade64fb9adea100246a534a0&page=1&pageSize=10`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }

  returnToPreviousPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&catagory=${this.props.catagory}&apiKey=6f2e5be4ade64fb9adea100246a534a0&page=1&pageSize=10`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
  };

  moveToNextPage = async () => {
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 10)) {
      let url = `https://newsapi.org/v2/top-headlines?country=us&catagory=${this.props.catagory}&apiKey=6f2e5be4ade64fb9adea100246a534a0&page=1&pageSize=10`;
      const data = await fetch(url);
      const parsedData = await data.json();
      this.setState({ articles: parsedData.articles, page: this.state.page + 1 });
    }
  };

  render() {
    return (
      <div className='container my-5'>
        <h1 style={{ textAlign: 'center' }}>News Application</h1>
        <div className='row'>
          {this.state.articles.map(element => (
            <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author = {element.author} />
            </div>
          ))}

          <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.returnToPreviousPage}>
              &larr; Previous
            </button>
            <button
              disabled={this.state.page + 1 > Math.ceil(this.state.totalResults /10)}
              type='button'
              className='btn btn-dark'
              onClick={this.moveToNextPage}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
