import styled from "styled-components";
import LogoPic from '../../statics/Logo.png'

export const HeaderWrapper = styled.div`
position:relative;
height:56px;
border-bottom:1px solid #f0f0f0;
`;

export const Logo = styled.a`
height:56px;
position:absolute;
display:block;
top:0;
left:0;
width:100px;
background:url(${LogoPic});
background-size:contain;
`;
export const Nav = styled.div`
width:960px;
margin: 0 auto;
height:56px;
padding-right:70px;
box-sizing:border-box;
`;
export const NavItem = styled.div`
&.left{
  float:left
}
&.right{
  float:right;
  color:#969696;
}
&.active{
  color:#ea6f5a;
}
line-height:56px;
font-size:17px;
padding:0 15px;
color:#333
`;

export const SearchWrapper = styled.div`
float:left;
position:relative;

.slide-enter {
  width:160px;
  transition:all .2s ease-out;
}
.slide-enter-active {
  width:240px;
}
.slide-exit {
  transition:all .2s ease-out;
}
.slide-exit-active {
  width:160px;
}
.zoom{
  position:absolute;
  right:5px;
  bottom:5px;
  width:30px;
  line-height:30px;
  text-align:center;
  border-radius:15px;

  &.focused {
      background:#777;
      color:#fff;
  }
}
`


export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
width:160px;
height:38px;
margin-top:9px;
margin-left:20px;
padding:0 35px 0 20px;
box-sizing:border-box;
border:none;
outline:none;
border-radius:19px;
background:#eee;
font-size:14px;
color:#666;
&::placeholder{
  color:#999
}
&.focused{
  width:240px;

}
`
export const SearchInfo = styled.div`
position:absolute;
left:0;
top:56px;
width:240px;
padding:0 20px;
background-color: #fff;
/* background-color: #fff; */
box-shadow:0 0 8px rgba(0,0,0,.2);
&::before {
		float: left;
		position: absolute;
    content: "";
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-top: none;
    border-bottom-color:white;
    top:-8px;
		left: 46px;
		z-index: 20;
}
`

export const SearchInfoTitle = styled.div`
margin-top:20px;
margin-bottom:15px ;
line-height:20px;
font-size:14px;
color:#969696;
`
export const SearchInfoSwitch = styled.span`
float:right;
font-size:13px;
cursor: pointer;
.spin {
  display:block;
  float:left;
  font-size:12px;
  margin-right:6px;
  transition: all .25s ease-in;
  transform-origin:center center;


}
`
export const SearchInfoList = styled.div`
overflow:hidden;
`
export const GetListError = styled.div`
margin: 0 auto;
width:100px;
height:50px;
padding-top:10px;
color:#969696;
`



export const SearchInfoItem = styled.a`
display:block;
float:left;
font-size:12px;
padding:0 5px;
margin-right:10px;
margin-bottom:10px;
line-height:20px;
border: 1px solid #ddd;
color:#787878;
border-radius:3px;
`

export const Addition = styled.div`
position:absolute;
right:0;
top:0;
height:56px;
`

export const Button = styled.div`
float:right;
margin-top: 7px;
margin-right: 20px;
padding:0 20px;
line-height:38px;
cursor: pointer;
font-size:14px;
border: 1px solid #ec6149;
border-radius: 19px;
&.sign{
  
  color: #ea6f5a;

}
&.write{
  color: #fff;
  background:#ec6149;
}
`
