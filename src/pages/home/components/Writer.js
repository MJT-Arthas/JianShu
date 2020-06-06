import React, { Component, Fragment } from 'react';
import {
  WriterWrapper,
  WriterTitle,
  TitleImg,
  Change,
  Author,
  RecommendList,
  RecommendListWrapper
} from "../style";
import { actionCreators } from "../store"
import { connect } from "react-redux";
class Writer extends Component {
  getChangeArea() {
    const { WriterList, page,totalPage,handleClickChange } = this.props
    const pageList = []
    const jsList = WriterList.toJS()
    if(jsList.length!==0){
    for (let i = (page - 1) * 3; i < page * 3; i++) {
      pageList.push(
        <RecommendList
          key={jsList[i].id}
        >
          <img
            className="pic"
            src={jsList[i].imgUrl}
            alt=""
          />
          <a href="./abc.html" className="look">{"+关注"}</a>
          <p className="title">{jsList[i].title}</p>
          <p className="desc">{jsList[i].desc}</p>
        </RecommendList>
      )
    }
    return (
      <RecommendListWrapper>
        <Author>推荐作者</Author>
        <Change
        onClick={() => handleClickChange(page, totalPage, this.spinIcon)}
        >
          <span
            ref={(icon) => {
              this.spinIcon = icon;
            }}
            className="iconfont spin"
          >
            &#xe664;
              </span>
            换一批
            </Change>
        {pageList}
      </RecommendListWrapper>
    )}else{
      return <div></div>
    }
  }
  render() {
    return (
      <Fragment>
        <WriterWrapper>
          <WriterTitle>
            <TitleImg>
              <img
                className="pic"
                src="http://i1.mifile.cn/f/i/17/appdownload/download.png?"
                alt=""
              />
              <h3 className="title">下载简书手机App</h3>
              <p className="desc">随时随地发现和创作内容</p>
            </TitleImg>
          </WriterTitle>
        </WriterWrapper>

        {
          this.getChangeArea()
        }

      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    WriterList: state.getIn(["home", "WriterList"]),
    page: state.getIn(["home", "page"]),
    totalPage: state.getIn(["home", "totalPage"]),
  };
};

const mapStateDispatchProps = (dispatch) => {
  let deg = 0;
  return{
    handleClickChange(page, totalPage, spin) {
      deg += 360;
      spin.style.transform = `rotate(${deg}deg)`;

      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
        // console.log(page + 1);
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
  }
}


export default connect(mapStateToProps, mapStateDispatchProps)(Writer);

