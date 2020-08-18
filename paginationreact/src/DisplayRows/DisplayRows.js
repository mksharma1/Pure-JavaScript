import React from 'react';
import '../App.css'
const DisplayRows = (props) => {
   

    const generaterows = (props) => {
        let currentPage=props.record.currentpage;
        let PageSize= props.record.pagesize
        let indexArray = []
        indexArray = (((currentPage - 1) * PageSize) > props.record.data.length) ?
            (props.record.data.slice((currentPage - 1) * PageSize,)) :
            (props.record.data.slice(((currentPage - 1) * PageSize), ((PageSize + ((currentPage - 1) * (PageSize))))))



        return (
            indexArray.map(item => (
                <tr > <td>{item.roll}
                </td>
                    <td className="td">{item.adName}
                    </td>
                    <td className="td">{item.emailid}
                    </td>
                </tr>)
            )
        )

    }







    return (
        <div>


            <table className="innertable">
               
                <tbody>
                    {generaterows(props)}


                </tbody>
            </table>





        </div>
    )
}
export default DisplayRows;