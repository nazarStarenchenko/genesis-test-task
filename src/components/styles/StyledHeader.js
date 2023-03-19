import styled from 'styled-components';

export const StyledHeader = styled.header`

  height: 100px;
  width: 100%;
  margin-bottom: 40px;
  border-top: 1px solid #D8D8D8;
  background-color: #FAFAFA;

  h1 {
    margin-top: 20px;
    font-size: 40px;
    float: left;
    font-family: 'Lobster Two', cursive;
    margin-left: 20px;
  }

  .logo {
    color: #4c4c4c;
  }

  .logo:hover {
    color: black;
    transition-property: color;
    transition-duration: 0.4s;
  }

  .logo:focus {
    outline: none;
  }

  ul{
    display: flex;
    justify-content: center;
    float: right;
    margin: 30px 50px 0 0;
  } 

  li {
    display: inline-block;
    margin: 0 20px;
    font-size: 25px;
  }

  .socials {
  text-decoration: none;
  color: #696969;
  }

  .socials:hover {
    color: #000;
    border-bottom: 1px solid black;
    transition-property: color, border-bottom;
    transition-duration: 0.4s;
  }

  .socials:focus {
    outline: none;
  }

  @media screen and (max-width: 750px) {
    height: 150px;

    h1 {
      width: 100%;
      text-align: center;
    }

    ul {
      width: 100%;
      margin-right : 0;
    }
  }

`
