import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
import { actionCreators as loginActionCreators } from "../../pages/login/store";
import { Link } from "react-router-dom";
import {
  HeaderFixed,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  GetListError,
  Addition,
  Button,
} from "./style";

class Header extends Component {
  getListArea() {
    const {
      focused,
      mouseIn,
      list,
      getList,
      page,
      totalPage,
      handleMouseEnter,
      handleMouseLeave,
      handleClickChange,
    } = this.props;
    const pageList = [];
    const newList = list.toJS();
    if (newList.length) {
      for (let index = (page - 1) * 10; index < page * 10; index++) {
        pageList.push(
          <SearchInfoItem key={newList[index]}>{newList[index]}</SearchInfoItem>
        );
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
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
            </SearchInfoSwitch>
          </SearchInfoTitle>
          {(() => {
            if (getList) {
              return <SearchInfoList>{pageList}</SearchInfoList>;
            } else {
              return <GetListError>页面走丢了...</GetListError>;
            }
          })()}
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
  render() {
    const {
      focused,
      handleInputFocus,
      handleInputBlur,
      mouseIn,
      list,
      loginState,
      logout,
    } = this.props;
    return (
      <HeaderFixed>
        <HeaderWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>

            {loginState ? (
              <Link to="/">
                <NavItem onClick={logout} className="right">
                  退出
                </NavItem>
              </Link>
            ) : (
              <Link to="/login">
                <NavItem className="right">登录</NavItem>
              </Link>
            )}

            <NavItem className="right">
              <span className="iconfont">&#xe636;</span>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                timeout={200}
                in={focused || mouseIn}
                classNames="slide"
              >
                <NavSearch
                  className={focused || mouseIn ? "focused" : ""}
                  onFocus={() => handleInputFocus(list)}
                  onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <span
                className={
                  focused || mouseIn ? "focused iconfont zoom" : "iconfont zoom"
                }
              >
                &#xe623;
              </span>
              {this.getListArea()}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className="write">
              <span className="iconfont">&#xe6e5;</span> 写文章
            </Button>
            <Button className="sign">注册</Button>
          </Addition>
        </HeaderWrapper>
      </HeaderFixed>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.get("header").get("focused"),
    list: state.getIn(["header", "list"]),
    getList: state.getIn(["header", "getList"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    loginState: state.getIn(["login", "loginState"]),
  };
};

const mapStateDispatchProps = (dispatch) => {
  let deg = 0;
  return {
    handleInputFocus(list) {
      console.log(list);
      dispatch(actionCreators.searchFocus());
      list.size === 0 && dispatch(actionCreators.searchGet());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleClickChange(page, totalPage, spin) {
      deg += 360;
      spin.style.transform = `rotate(${deg}deg)`;

      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
        console.log(page + 1);
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.changeLogout());
    },
  };
};

export default connect(mapStateToProps, mapStateDispatchProps)(Header);
