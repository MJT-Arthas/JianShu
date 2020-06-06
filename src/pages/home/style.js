import styled from "styled-components";
export const HomeWrapper = styled.div`
width:960px;
margin: 0 auto;
overflow:hidden;
`;

export const HomeLeft = styled.div`
width:625px;
margin-left: 15px;
padding-top:30px;
float:left;

.banner-img {
  width:625px;
  height:270px;
}
`;

export const HomeRight = styled.div`
width:280px;
float:right;
`;

export const TopicWrapper = styled.div`
overflow:hidden;
padding:20px 0 10px 0 ;
margin-left:-18px;
border-bottom:1px solid #dcdcdc;

`;
export const TopicItem = styled.div`
float:left;
height:32px;
line-height:32px;
padding-right:4px;
margin-left:18px;
margin-bottom:10px;
text-align:center;
font-size:14px;
border:1px solid #dcdcdc;
color:#000;
border-radius:4px;
background:#f7f7f7;
.topic-pic{
  float:left;
  width:32px;
  height:32px;
  background:green;
  margin-right:4px;
}
`;

export const ListItem = styled.div`
overflow:hidden;
padding: 20px 0;
border-bottom:1px solid #dcdcdc;
.pic {
  display:block;
  width:125px;
  height:100px;
  float:right;
  border-radius:10px;
}
`

export const ListInfo = styled.div`
width:500px;
float:left;
.title {
  line-height:27px;
  font-size:18px;
  font-weight:bold;
  color:#333;
}
.desc {
  line-height:24px;
  font-size:13px;
  color:#999;
}
`;

export const LoadMore = styled.div`
width:100%;
height:40px;
margin:30px 0;
line-height:40px;
background:#a5a5a5;
text-align:center;
border-radius:20px;
color:#fff;
cursor: pointer;
`

export const RecommendWrapper = styled.div`
margin:30px 0;
width:280px;
`
export const RecommendItem = styled.div`
width:280px;
height:50px;
margin-bottom:10px;
background:url(${(props) => props.imgUrl});
background-size:contain;
border-radius:10px;
`
export const WriterWrapper = styled.div`
width:280px;
line-height:300px;
/* text-align:center; */
/* background:white; */
/* border:1px solid #dcdcdc; */
border-radius:3px;
:after{
  content:"";
  display:table;  
  clear:both;
  }
`

export const WriterTitle = styled.div`
margin-bottom: 30px;
overflow:hidden;
box-sizing:border-box;
padding: 10px 22px;
width: 280px;
border: 1px solid #f0f0f0;
border-radius: 6px;
/* background-color: #fff; */
`
export const TitleImg = styled.div`
overflow:hidden;
.pic {
  width:60px;
  height:60px;
  float:left;
  margin-right:10px;
}
.title {
  line-height:30px;
}
.desc {
  line-height:30px;
  font-size:13px;
  color:#999;
}
`
export const Author = styled.div`
position:relative;
top:0;
width:80px;
  line-height:30px;
  font-size:13px;
  color:#999;
`

export const Change = styled.div`
position:absolute;
top:0;
right:0;
line-height:30px;
font-size:13px;
color:#999;
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

export const RecommendListWrapper = styled.div`
position:relative;
`

export const RecommendList = styled.div`
/* float:left; */
padding-top:15px;
overflow:hidden;
/* background:red; */
.pic{
  float:left;
  width:48px;
  height:48px;
  border: 1px solid #ddd;
  border-radius: 50%;
  margin-right:25px;
}
.title {
  line-height:25px;
  font-size:14px;
  color: #2f2f2f;
}
.desc {
  margin:2px 0;
  line-height:20px;
  font-size:13px;
  color:#999;
}
.look {
  float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
}


`


