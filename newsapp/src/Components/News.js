import React, { useEffect, useState } from 'react'
import Newitem from './Newitem'
import Spinner from './Jpinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  const update = async () => {
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b7de039e294740bb84d8dff8c2bbf97d&page=${page}&pageSize=${props.pageSize}  `
    
    setloading(true)
    let data = await fetch(url);
    props.setProgress(30)
    let parsedata = await data.json();
    props.setProgress(70)
    console.log(parsedata)
    setarticles(parsedata.articles);
    setloading(false)
    settotalResults(parsedata.totalResults)
    props.setProgress(100)
  }
  
  useEffect(() => {
    document.title = `${capitalize(props.category)}-NewsMonkey`
    update();
    /* eslint-disable */ 
  }, [])



  // const handleprevbtn = async () => {
  //   console.log("previous")
  //   setPage(page - 1)

  //   update();

  // }

  // const handlenextbtn = async () => {
  //   console.log("next")
  //   setPage(page + 1)
  //   update()
  // }

  const fetchMoreData = async () => {
    // this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}  `
    // setPage(page + 1)
console.log(url+"i am mad")
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata)
   console.log( setarticles(articles.concat(parsedata.articles)))
    settotalResults(parsedata.totalResults);
    


  };


  return (
    <>
      <h1 className="text-center" style={{ margin: "35px 0px",marginTop:'90px' }}>NewsMonkey-Top on {capitalize(props.category)} Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner/>}
      >
        <div className="container ">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-3" key={element.url}>
                <Newitem title={element.title ? element.title.slice(0, 54) : " "} discription={element.description ? element.description.slice(0, 194) : " "} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} sourcename={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprevbtn}>&larr;Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextbtn}>Next &rarr;</button>
        </div> */}
    </>
  )
}

News.defaultProps = {
  pageSize: 10,
  category: 'general'
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
};
export default News;