import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MemberList2 from '../components/member/MemberList2';
import{ connect } from "react-redux";
import { membersFetch } from "../actions";


class Home extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.membersFetch();
  }


  render () {
    return (
      <div className='bg-1'>
        <Header/>
        {this.props.members && Array.isArray(this.props.members) &&
        (<MemberList2 members={this.props.members}/>)
        }
        <Footer Company = "Kasetsart University" Email="montha.a@ku.th"/> 
    </div>
    )  
  }
}

function mapStateToProps({members}){
  return { members };
}

export default connect(mapStateToProps, { membersFetch }) (Home);