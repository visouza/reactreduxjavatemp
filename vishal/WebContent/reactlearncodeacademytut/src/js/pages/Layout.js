import React from "react";
import {Link} from "react-router";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {Title: "will"};
  }
  changeTitle(Title) {
    this.setState({Title});
  }

  render() {
    //setTimeout(()=> {this.setState({Title:"Bob"});},5000);

    //const title = "Title set in Layout file";
    console.log(this.props);

    return (

      <div>
        <Header nav={this.props.children} title = {this.state.Title} changeTitle = {this.changeTitle.bind(this)}/>

        <Link to="archives">Archives</Link>
        <Link to="settings">Settings</Link>
        <Link to="/">Featured</Link>

        {this.props.children}







        {/*this.state.name*/}
        <Footer/>
      </div>
    );
  }
}
