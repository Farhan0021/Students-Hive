import React, { useEffect} from 'react'
import OwnerSideBar from '../../components/OwnerSideBar'
import axios from 'axios'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const MyProperty =() => {
    let [allProp, setAllProp] = useState([]);

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/property/owner`,{
            headers : {Authorization : localStorage.getItem("owner-access-token")}
        }).then(response=>{
            setAllProp(response.data);
        })
    },[])


    return (
         <div className='container my-4' style={{minHeight : "700px", paddingTop : "120px" }}>
      <div className="row">

        <OwnerSideBar/>
        
        <div className="col-md-9">
          <h4>My Properties</h4>

          {
            allProp.length==0
            ?
            <div className="alert alert-danger">No Data Found</div>
            :
            <table className='table table-bordered table-hover table-secondary'>

            <thead>
             <tr>
                <th>S.No</th>
                <th>Tittle</th>
                <th>Rent</th>
                <th>Type</th>
                <th>Messages</th>
             </tr>
            </thead>
            <tbody>
                {
                    allProp.map((item, index)=><tr>
                        <td>{index+1}</td>
                        <td>{item.tittle}</td>
                        <td>{item.rent}</td>
                        <td>{item.property_type}</td>
                        <td><NavLink to={`/owner/messages/${item._id}`} className='btn btn-sm btn-info'>Messages</NavLink> </td>
                    </tr>)
                }
            </tbody>
          </table>
          }

          

        </div>
      </div>
    </div>
    )
}

export default MyProperty