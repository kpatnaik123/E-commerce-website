import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
background-color:teal;
display:flex;
align-items:center;
justify-content:center;
height:30px;
color:white;
font-size:14px;
font-weight:500;`
const Announcements = () => {
    return (
        <div>
             <Container>Super Deal! Free Shipping on Orders Over $50</Container>
        </div>
    );
}

export default Announcements;
