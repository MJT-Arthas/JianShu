import React, { Component } from 'react';
import { RecommendWrapper, RecommendItem } from "../style";
import { connect } from "react-redux";
class Recommend extends Component {
  render() {
    return (
      <RecommendWrapper>
        {
          this.props.RecommendList.map((item) =>
            <RecommendItem 
            key={item.get('id')}
            imgUrl={item.get('imgUrl')} />
          )
        }
      </RecommendWrapper>)
  }
}

const mapStateToProps = (state) => {
  return {
    RecommendList: state.getIn(["home", "RecommendList"]),
  };
};


export default connect(mapStateToProps, null)(Recommend);