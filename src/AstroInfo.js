import React from 'react';

import { Link } from 'react-router-dom';

const AstroInfo = props => (
    <div className="container">
    <div className="row row-cols-sm-1 row-cols-lg-3 row-cols-md-2">
        {props.astros.map((indvAstro) => {
        return (
        <div className="col-lg-4 col-md-6 mt-4 mb-4" key={indvAstro.title}>
            <div className="card" style={{minwidth: '18rem'}}>
                
                {(() => { 
                    if (indvAstro.media_type === "video") {
                    return (<div className="embed-responsive embed-responsive-4by3">
                            <iframe className="embed-responsive-item" title={indvAstro.title} src={indvAstro.url}></iframe>
                            </div>)
                    }
                    else if (indvAstro.media_type === "image") {
                        return (<img src={indvAstro.url} className="card-img-top" alt="..."/>)
                    }
                })()}
                
                
                <div className="card-body">
                    <h5 className="card-title text-center">{indvAstro.title}</h5>
                    <p className="card-text text-center">Date Posted: {indvAstro.date}</p>
                </div>

                <div className="card-footer text-center">
                    <Link to={{pathname: `/apoddetails/${indvAstro.title}`,
                    state: { currentAPOD: indvAstro.date} }}>
                        <button className="btn btn-primary" style={{backgroundColor: '#a34199', borderColor: '#a34199'}}>
                            View Details
                        </button>
                    </Link>
                </div>

            </div>
        </div>
        );
      })}
    </div>
    </div>
);

export default AstroInfo;