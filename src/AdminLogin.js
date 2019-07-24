import React , {Component} from 'react';
import image from './images/add_record.jpg'
import image2 from './images/search.jpg'

class AdminLogin extends Component{


    render() {
        const setty= {
            margin: 50,
            display: 'inline-block'
            // border:'solid 2px black'
    };
        const damn={
            float: 'center',
            // border:'solid 2px black',
            margin: 'auto',


    }
        return (
          <div style={damn}>
              <div style={setty} >
                 <img src={image} className="img-fluid"/>
                 <h1>Add records</h1>
              </div>
              <div style={setty}>
                  <img src={image2} className='img-fluid'/>
                <h1>Search record</h1>
              </div>
          </div>
        );
    }
}
export default AdminLogin;