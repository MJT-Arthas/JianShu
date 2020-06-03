import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from "../style";
import { connect } from "react-redux";

class Topic extends Component {
  render() {
    const {topicList} = this.props
    return (
      <TopicWrapper>
        {
          topicList.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                {/* <div className="topic-pic">图</div> */}
                <img  className="topic-pic"
                src={item.get('imgUrl')}
                alt=""
                />
                {item.get('title')}
              </TopicItem>
            )
          })
        }

      </TopicWrapper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(["home", "topicList"]),
  };
};


export default connect(mapStateToProps, null)(Topic);
