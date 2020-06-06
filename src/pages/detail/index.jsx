import React, { Component } from "react";
import { connect } from "react-redux";
import {
  DetailWrapper,
  DetailText,
  TextSection,
  DetailAside,
  AuthorBar,
} from "./style";

class Detail extends Component {
  render() {
    const detailList = this.props.detailList.toJS();
    console.warn(detailList);
    return (
      <DetailWrapper>
        <DetailText>
          <TextSection>
            <h1 className="title">{detailList.title}</h1>
            <AuthorBar>
              <img className="pic" src={detailList.pic} alt="" />
            </AuthorBar>
            <p>
              <b>
                房子卖了1080000后，很久没回来的小姑子回来了。做饭时，听到了婆婆说，“你和哥哥一人一半。”我心里凉飕飕的。
              </b>
            </p>
            <p>
              房子卖了1080000后，很久没回来的小姑子回来了。做饭时，听到了婆婆说，“你和哥哥一人一半。”我心里凉飕飕的。
            </p>
            <p>
              房子卖了1080000后，很久没回来的小姑子回来了。做饭时，听到了婆婆说，“你和哥哥一人一半。”我心里凉飕飕的。
            </p>
            <p>
              房子卖了1080000后，很久没回来的小姑子回来了。做饭时，听到了婆婆说，“你和哥哥一人一半。”我心里凉飕飕的。
            </p>
            <p>
              房子卖了1080000后，很久没回来的小姑子回来了。做饭时，听到了婆婆说，“你和哥哥一人一半。”我心里凉飕飕的。
            </p>
            <p>
              房子卖了1080000后，很久没回来的小姑子回来了。做饭时，听到了婆婆说，“你和哥哥一人一半。”我心里凉飕飕的。
            </p>
          </TextSection>
        </DetailText>
        <DetailAside>右边</DetailAside>
      </DetailWrapper>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    detailList: state.getIn(["detail", "detailList"]),
  };
};

export default connect(mapStateToProps, null)(Detail);
