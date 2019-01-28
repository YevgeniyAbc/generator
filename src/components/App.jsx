import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getCat } from '../actions/getCat';
import styled from 'styled-components';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';

const override = css`
    display: block !important;
    margin: 80px auto;
    border-color: red;
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <Button onClick={this.props.getCat}>Get Kosha</Button>
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={100}
          color={'#123abc'}
          loading={this.props.fetching}/>
        {this.props.cat ? <Img src={this.props.cat} alt="cat"/> : null}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state.cat;
};

const mapDispatchToProps = dispatch => {
  return {
    getCat: bindActionCreators(getCat, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

const Button = styled.button`
  display: block;
  position: relative;
  bottom: 0;
  width: 300px;
  height: 60px;
  border: none;
  border-radius: 20px;
  margin: 0 auto;
  cursor: pointer;
  background: #123abc;
  color: #fff;
  font-size: 20px;
  transition: all .3s;
  &:hover {
    width: 320px;
    bottom: 4px;
    box-shadow: 0 6px 6px 0 #07237f;
  }
  &:focus {
    outline: none;
    bottom: 4px;
    box-shadow: 0 6px 6px 0 #07237f;
  }
  &:active {
    bottom: 0;
    box-shadow: none;
  }
`;

const Img = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 40px;
  max-height: calc(100vh - 120px);
`;