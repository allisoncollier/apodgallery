import React from 'react';

const AstroInfo = props => (
    <div className="container">
    <div className="row row-cols-1 row-cols-md-3">
        {props.astros.map((indvAstro) => {
        return (
        <div className="col-md-4 mt-4 mb-4" key={indvAstro.title}>
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
                    <h5 className="card-title">{indvAstro.title}</h5>
                    <p className="card-text">Date Posted: {indvAstro.date}</p>
                </div>
            </div>
        </div>
        );
      })}
    </div>
    </div>
);

export default AstroInfo;