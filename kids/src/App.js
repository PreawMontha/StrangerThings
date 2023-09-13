import React, { Component } from "react";
import './App.css';
import{ BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./containers/Home";
import About from "./containers/About";
import NotFound from './containers/error/NotFound';
import Member from "./containers/member/Member";
import MemberDelete from "./containers/member/MemberDelete";
import MemberEd from "./containers/member/MemberEd"; 
import MemberEdit from "./containers/member/MemberEdit"; 
import DetailMember from "./components/member/DetailMember";

class App extends Component {
 
  renderRouter(){
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/members" component={Member} /> 
        <Route exact path="/membersdelete" component={MemberDelete} />
        <Route exact path="/memberedit" component={MemberEd} />
        <Route exact path="/members/add" component={MemberEdit} />
        <Route exact path="/members/edit/:id" component={MemberEdit} />
        <Route exact path="/show" component={DetailMember} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    )
  }

  render () {
    return (
     <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );  
  }
}


export default App;