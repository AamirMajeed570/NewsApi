import React, { Component } from 'react'

export default class NewsItem extends Component {
  render () {
    let { title, description ,imageUrl,newsUrl,author,date} = this.props
    return (
      <div>
        <div className='card' style={{ width: '18rem' }}>
          <img
          src={imageUrl}
            className='card-img-top'
            alt='...'
          />
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
            <p class="card-text"><small className="text-muted"><strong>{author}</strong> updated at {date} {    }</small></p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className='btn btn-sm btn-primary'>
              Read More
            </a>
          </div>
        </div>
      </div>
    )
  }
}
