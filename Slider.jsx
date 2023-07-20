import React,{useState} from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';
import {sliderItems} from './data'

const Container=styled.div`
width:100%;
display:flex;
height:100vh;
position:relative;
`

const Arrow=styled.div`
width:50px;
height:50px;
top:0;
bottom:0;
margin:auto;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
left:${(props)=>props.direction==="left" && "10px"};
right:${(props)=>props.direction==="right" && "10px"};
opacity:0.5;
cursor:pointer;
z-index:2;
`
const Wrapper=styled.div`
height:100%;
display:flex;
transform:translateX(-100vw);
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide =styled.div`
display:flex;
align-items:center;
width:100vw;
height:100vh;
background-color:#${(props)=>props.bg};`

const ImageContainer=styled.div`
height:100%;
flex:1
align-items:center;`

const Image=styled.img`
height:80%;
margin-left:100px;
`
const InfoContainer=styled.div`
flex:1
`

const Title=styled.h1`
height:70px;
`
const Desc=styled.p`
font-weight:500;
letter-spacing:3px;
margin:50px 0px;
font-size:20px;`

const Button=styled.button`
padding:10px;
border:2px solid black;
box-shadow:0 4px rgba(0,0,0,0.3);
cursor:pointer;
background-color:transparent;`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick=(direction)=>{
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={()=>{handleClick("left")}}>
                <ArrowBackIosIcon/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImageContainer>
                            <Image src={item.img} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}

            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowForwardIosIcon/>
            </Arrow>
        </Container>
    );
}

export default Slider;
