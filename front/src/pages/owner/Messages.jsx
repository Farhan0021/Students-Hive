import React, {useEffect, useState} from 'react'
import OwnerSideBar from '../../components/OwnerSideBar'
import {useParams} from 'react-router-dom'
import axios from 'axios'
const Messages = () => {
  let [allMsg, setAllMsg] = useState([]);
    let param = useParams();
    let id = param.id;
    useEffect(()=>{
      axios.get(`${import.meta.env.VITE_API_URL}/message/getmessages/${id}`)
      .then(response=>{
        console.log(response.data);
        setAllMsg(response.data);
      })
    },[])


  return (
    <div className="container my-4" style={{minHeight : "750px", paddingTop : "120px"}}>
      <div className='row'>
       <OwnerSideBar />
        <div className="col-md-9">
          <h4>My Messages</h4>
          
            <table className='table table-bordered table-hover table-secondary'>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {
                allMsg.map((item, index)=>{
                  return(
                    <tr>
                    <td>{index+1}</td>
                    <td>{item.seeker_id ? item.seeker_id.name : ''}</td>
                    <td>{item.seeker_id ? item.seeker_id.email : ''}</td>
                    <td>{item.seeker_id ? item.seeker_id.contact : ''}</td>
                    <td>{item.message}</td>
                  </tr>
                  )
                })
              }
            </tbody>
        </table>
          
        </div>
       </div>
    </div>
  )
}

export default Messages