import React from 'react'

const Newitem=(props)=>  {
  
        // let { title, discription, imgurl, newsurl, author, date, sourcename } = this.props
        let { title, discription, imgurl, newsurl, author, date, sourcename } = props
        return (
            <div>
                    
                    <span className="badge  text-bg-danger">{sourcename}</span>

                <div className="card" >
                    <img src={!imgurl ? "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg" : imgurl} className="card-img-top" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title">{title}
                        </h5>
                        <p className="card-text">{discription}</p>
                        <small className=" text-danger">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small>
                        <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    
}
export default Newitem