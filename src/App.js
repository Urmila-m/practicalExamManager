import React , {Component} from 'react';
import './Table'
import Table from "./Table";
import Form from "./Form";
import Navbar from "./Navbar";
import CarouselImageSlider from "./CarouselImageSlider";

class App extends Component{

    handleSubmit= row => {
            this.setState({
                TableRowList: [...this.state.TableRowList, row]
            })
    }
    state= {
        TableRowList: [
            {
                Name: "Urmila Maharjan",
                Job: "Software Engineer"
            },
            {
                Name: "Pratima Maharjan",
                Job: "Computer Engineer"
            },
        ],
    };

    removeRow= index=>{
        const {TableRowList}= this.state;

        this.setState({
            TableRowList: TableRowList.filter((character, i)=>{
                return i!==index;
            }),
        })
    };

  render(){
    // const {TableRowList}= this.state;
    return(
        /*<div className="container">*/
          /*<Table myRowList={TableRowList} removeRow={this.removeRow}/>*/
          /*<Form handleSubmit={this.handleSubmit}/>*/
        /*</div>*/
        <div id="appRoot">
            <Navbar id="navRoot"/>
            <CarouselImageSlider id="carousalRoot"/>
        </div>
    )
  }

}

export default App;