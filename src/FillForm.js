import React , {Component} from 'react';

class FillForm extends Component{

    render(){

        const blockDisplay= {
            display: 'block',
        };

        const placeInCenter={
            textAlign: 'center',
            backgroundColor: 'rgba(0, 128, 128, 0.4)',
            width: 'fit-content',
            margin: 'auto',
        };
        return(
            <div style={placeInCenter} className="container">
                <h3>Fill up the information</h3>
                <form id="shiftForm">
                    <label style={blockDisplay} for="examDate">Date</label>
                    <input style={blockDisplay} className="form-control" type= "date" name= "Date" id="examDate"/>

                    <label style={blockDisplay} for="examTime">Time</label>
                    <input style={blockDisplay} className="form-control" id="examTime" type= "time" name= "Time"/>

                    <label style={blockDisplay} for="NoOfRooms">No of rooms used</label>
                    <input style={blockDisplay} className="form-control" type= "number"  id="NoOfRooms" name= "NoOfRooms"/>

                    <label style={blockDisplay} for="NoOfColleges">No of Colleges</label>
                    <input style={blockDisplay} className="form-control" type="number" id="NoOfColleges" name="NoOfColleges"/>

                    <button type="reset" value="Submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        )
    }
}

export default FillForm;