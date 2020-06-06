import styled from "styled-components";


export const DetailWrapper = styled.div`
display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: calc(100vh - 66px);
    padding-top: 10px;
    font-size: 16px;
    background:#bfc;
`

export const DetailText = styled.div`
flex-shrink: 0;
width: 730px;
margin-bottom: 24px;
margin-right: 10px;
background:red;

`

export const TextSection = styled.div`
background-color: #fff;
    border-radius: 4px;
    /* margin-bottom: 10px; */
    padding: 24px;
    .title {
      font-size: 30px;
    font-weight: 700;
    word-break: break-word;
    }
p{
  font-weight: 400;
    line-height: 1.8;
    margin-bottom: 20px;
}
`
export const DetailAside = styled.div`
flex-shrink: 0;
    width: 260px;
    background:green;
`

export const AuthorBar = styled.div`
display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 32px 0;
    font-size: 13px;
.pic {
  display: block;
    border-radius: 50%;
    border: 1px solid #eee;
    min-width: 48px;
    min-height: 48px;
    width: 48px;
    height: 48px;
}
`

