import React, { Component, Fragment } from 'react';
import { ListItem, ListInfo,LoadMore } from "../style";
import { connect } from "react-redux";
import {actionCreators} from "../store"

class List extends Component {
  render() {
    const { articleList,getMoreList,page } = this.props
    return (
      <Fragment>
        {
          articleList.map((item) =>
            <ListItem key={item.get('id')}>
              <img
                className='pic'
                src={item.get('imgUrl')}
                alt="" />
              <ListInfo>
                <h3 className='title'>{item.get('title')}</h3>
                <p className='desc'>{item.get('text')}</p>
              </ListInfo>
            </ListItem>
          )
        }
        <LoadMore 
        onClick={()=>getMoreList(page)}
        >更多文字</LoadMore>
      </Fragment>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(["home", "articleList"]),
    page:state.getIn(["home", "articlePage"])
  };
};

const mapStateDispatchProps = (dispatch) => {
  return {
    getMoreList(page){
      dispatch(actionCreators.getMoreList(page)) 
    },
  };
};

export default connect(mapStateToProps, mapStateDispatchProps)(List);