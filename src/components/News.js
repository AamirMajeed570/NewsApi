import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Gif from './Gif'
import PropTypes from 'prop-types'
export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor () {
    super()
    this.state = {
      articles: [],
      loading:false,
      page:1,
      totalResults: 0

    };
  }
  async componentDidMount () {
    console.log('component dis mount')
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({ articles: parsedData.articles ,totalResults:parsedData.totalResults,loading:false})
  }
  handlePrevious = async() => {
    console.log('Previous')
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url)
    this.setState({loading:true});
  let parsedData = await data.json()
  console.log(parsedData)
  this.setState({ articles: parsedData.articles });
  this.setState({
    page: this.state.page - 1,
    articles: parsedData.articles,
    loading:false
  })
  }
  handleNext = async() => {
    console.log('next')
    if(!(this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url)
      let parsedData = await data.json()
      console.log(parsedData)
      this.setState({loading:false});
      this.setState({ articles: parsedData.articles });
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }
  render () {
    return (
      <div className='container my-3'>
        <h2 style={{ textAlign: 'center' }}>Top Headlines from {this.props.category}</h2>
          {this.state.loading && <Gif />}
        <div className='row'>
          {!this.state.loading && this.state.articles && this.state.articles.map(element => {
            return (
              <>
              <div className='col-md-4' key={element.url}>
                <NewsItem
                  title={element.title}
                  // description={element.description.slice(0, 88)}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
              </>
            )
          })}
        </div>
        <div className='d-flex justify-content-between'>
          <button
            disabled={this.state.page <= 1}
            type='button'
            className='btn btn-dark'
            onClick={this.handlePrevious}
          >
            &larr; Previous
          </button>
          <button disabled={this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize)}
           type='button' className='btn btn-dark' onClick={this.handleNext}>
            Next &rarr;
          </button>
        </div>
      </div>
    )
  }
}
