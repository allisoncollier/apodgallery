import React from 'react';

const headerImg = './header_image.png';

const APODHeading = () => {
    return (
    <div className="container-fluid" style={{padding: 0, borderBottom: '1rem solid #c897bf'}}>
        <img src={headerImg} className="img-fluid" alt="..."/>
    </div>
    );
}

export default APODHeading;