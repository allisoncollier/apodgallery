import React from 'react';

/*const buttonClick = (props, bttn) => {
    props.getAPOD;
    //bttn.
}*/

const APODCard = props => (
    <div className="container" style={{padding: '3rem'}}>
        <div className="row justify-content-center">
            <div className="col-6 text-center">
                <button id='btnAnimate' className="btn btn-primary btn-lg" style={{backgroundColor: '#02169c',  borderColor: '#02169c'}}onClick={props.getAPOD}>Load Gallery</button>
            </div>
        </div>
    </div>
);

export default APODCard;