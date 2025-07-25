import React, { useEffect, useState} from 'react' 
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ViewProperty = () =>{
    let [allProp, setAllProp] = useState([]);
    let param = useParams();
    let id = param.id;
    useEffect(()=>{
        axios.get(`http://localhost:3000/api/v1/property/admin/${id}`)
        .then(response=>{
            setAllProp(response.data);
        })
    },[])

    return (
         <div className="container">
          <div className="page-inner">
            <div className="row">
             <div className="col-md-12">
             <h3> View Property </h3>
             <table className='table table-dark'>
                <thead>
                    <tr>
                    <th>S.No</th>
                    <th>Title</th>
                    <th>Rent</th>
                    <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allProp.map((item, index)=><tr>
                            <td>{index+1}</td>
                            <td>{item.tittle}</td>
                            <td>{item.rent}</td>
                            <td>{item.property_type}</td>
                        </tr>)
                    }
                </tbody>
             </table>
             </div>
            </div>
         </div>
        </div>
    )
}

export default ViewProperty