import styled from "styled-components";


export const MainWrapper = styled.div`
height: 105vh;
background: linear-gradient(to right, #c7c7eb, #ccf2dd);
padding:0;
margin:0;
.container {
max-height:600px;
background-color: #ffffff7d;
border-radius: 12px;
padding: 1rem;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
box-sizing: border-box;
color: rgba(0, 0, 0, 0.8);
background-blend-mode: overlay;
justify-content: space-between;
align-items: center;
flex-direction: column;
margin-top:10px;
}


.searchArea {
margin-top: 10px;
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
}


.searchArea > input {
outline: none;
border: none;
border: 1px solid grey;
padding: 8px;
border-radius: 20px;
text-align: center;
width: 80%;
background: transparent;
}
.searchCircle {
border: 1px solid grey;
width: 30px; /* Adjust the width of the circle as needed */
height: 30px; /* Ensure the height matches the width for a perfect circle */
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;


> .searchIcon {
font-size: 20px;
color: grey;
}
}


.weatherArea {
display: flex;
align-items: center;
flex-direction: column;
margin: 30px 0;


> .icon {
font-size: 4rem;


/* DO LATER NOT WHEN CREATING UI */
}


> h1 {
  margin-top:0px;
font-size: 2rem;


font-family: "Bebas Neue", sans-serif;
}


> span {
margin-top:-19px;
font-family: "Inter", sans-serif;

}


> h2 {
font-size: 1rem;
font-family: "Inter", sans-serif;
font-weight: 600;
}
}


.bottomInfoArea {
display: flex;
align-items: center;
justify-content: space-around;
font-family: "Josefin Sans", sans-serif;
margin: 10px;
background: linear-gradient(
90deg,
rgba(243, 255, 253, 1) 0%,
rgba(253, 255, 232, 1) 100%
);
border-radius: 12px;
padding: 5px;
}

.humidityLevel,
.wind {
display: flex;
align-items: center;
margin: 0 20px;


> .humidIcon {
font-size: 3rem;
}
}


.windIcon {
font-size: 2rem;
margin-right: 10px;
}


.loading {
height: 400px;
width: 300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 9999;


.loadingIcon {
font-size: 3rem;
/* DO LATER NOT WHEN CREATING UI */
animation: spin 2s linear infinite;
}
p {
font-size: 40px;
margin-top: 10px;
font-family: "Josefin Sans", sans-serif;
}
}


/* DO LATER NOT WHEN CREATING UI */
@keyframes spin {
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
}
`;



