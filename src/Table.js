
import React, { Component } from 'react'

const TableHeader= ()=>{
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
};

const Tablebody= tab=>{
         const rows= tab.tableRowList.map((row, index)=>{
            return(
                <tr key={index}>
                    <td>{row.Name}</td>
                    <td>{row.Job}</td>
                    <td>
                        <button onClick={()=> tab.removeRow(index)}>Delete</button>
                    </td>
                </tr>
            );
            });
         return(
             <tbody>{rows}</tbody>
             );
};

class Table extends Component {
  render() {
      const {myRowList, removeRow}= this.props;
    return (
      <table>
            <TableHeader/>
            <Tablebody tableRowList={myRowList} removeRow={removeRow}/>
      </table>
    )
  }
}

export default Table