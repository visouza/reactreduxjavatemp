import React from "react";
import Header from "./../components/Header"
import Footer from "./../components/Footer"

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

    return (
      <div>
        <Header title = {this.state.Title} changeTitle = {this.changeTitle.bind(this)}/>

        {this.state.name}
        <Footer/>
      </div>
    );
  }
}
