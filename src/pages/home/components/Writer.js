import React, { Component, Fragment } from 'react';
import {
  WriterWrapper,
  WriterTitle,
  TitleImg,
  Change,
  Author,
  RecommendList
} from "../style";
import { connect } from "react-redux";
class Writer extends Component {
  render() {
    const { WriterList } = this.props
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
          <Author>推荐作者</Author>
          <Change>
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
        </WriterWrapper>
        {
          WriterList.map((item) =>
            <RecommendList
              key={item.get("id")}
            >
              <img
                className="pic"
                src={item.get("imgUrl")}
                alt=""
              />
              <a href="/" className="look">{"+关注"}</a>
              <p className="title">{item.get("title")}</p>
              <p className="desc">{item.get("desc")}</p>
            </RecommendList>
          )
        }

      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    WriterList: state.getIn(["home", "WriterList"]),
  };
};


export default connect(mapStateToProps, null)(Writer);