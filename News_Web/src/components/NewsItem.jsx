
const NewsItem =({title, description, src, url})=>{
    return(
        <div className="card bg-dark text-light mb-3 d-inline-block my-4 mx-8 px-4 py-8" style={{maxWidth:"345px"}}>
            <img src={src} style={{height:"200px",width:"360px"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0,50)}</h5>
                    <p className="card-text">{description?description.slice(0,90):"Some"}</p>
                <a href={url} className="btn btn-primary">Read More</a>
                </div>
        </div>
  
    );
  }
  export default NewsItem