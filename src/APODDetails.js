import React from 'react';

import { Link } from 'react-router-dom';

const API_KEY = "ZycdMl8Qjd3c5c7HAn9TDHe7cke9lMbl27JDPeT0";

class APODDetails extends React.Component {

    state = {
        currentAPOD: []
    }

    componentDidMount = async () => {
        const date = this.props.location.state.currentAPOD;
    
        let req = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`);
        const res = await req.json();
        this.setState({currentAPOD: res});
        console.log(this.state.currentAPOD)
    }

    render() {
        const apod = this.state.currentAPOD;
        console.log(apod);
        return (
            <div className="mainDiv">
            <div className="container" style={{maxHeight: '75%'}}>
            <Link to={{pathname: "/"}}>
                        <button className="btn btn-primary mt-4 mb-4" style={{backgroundColor: '#a34199', borderColor: '#85357c', borderWidth: '3px'}}>
                            Back
                        </button>
                    </Link>
            <div class="card  ">
            <div class="card-header">
            <h2 style={{textAlign: 'center'}}>{apod.title}</h2>
            </div>
            
            {(() => { 
                    if (apod.media_type === "video") {
                    return (<div className="embed-responsive embed-responsive-4by3">
                            <iframe className="embed-responsive-item" title={apod.title} src={apod.url}></iframe>
                            </div>)
                    }
                    else if (apod.media_type === "image") {
                        return (<img src={apod.hdurl} className="img-fluid rounded" alt="..."/>)
                    }
            })()}
            
            <div class="card-body">
                    <div className="card-text">{apod.explanation}</div>
                    </div>
                </div>
                    
                    <br className="mt-4"></br>
                    </div>
            </div>
            
        );
    }
};

export default APODDetails;