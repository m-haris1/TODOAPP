// import React, { useEffect, useState } from 'react'
// import Navbar from '../components/Navbar'
// import Card from '../components/Card'
// import { MdAdd } from 'react-icons/md'
// import Modal from 'react-modal'
// import AddEditNotes from '../components/AddEditNotes'
// import axios from 'axios'
// import { Navigate, useNavigate } from 'react-router-dom'
// import apiClient from '../utils/axiosInstance'
// import moment from "moment"

// const Home = ({isLoggedIn,setIsLoggedIn}) => {
//   let navigate=useNavigate();

//   const [openEditModal,setOpenEditModal] = useState({
//     isShown: false,
//     type: "add",
//     data:null,
//   });
//   const [userInfo,setUserInfo]= useState([]);
//   const [allNotes,setAllNotes]=useState([]);




//     const handleEdit = (noteDetails)=>{
//       setOpenEditModal({
//         isShown:true,
//         data:noteDetails,
//         type:"edit"
//       })
//     };
//     const fetchUserInfo = async () => {
//       try {
      
//         const response = await apiClient.get('/getUserInfo');
//         console.log("Response from API:", response);

//         if (response?.data.success) {
//           console.log(response);
//           setUserInfo(response.data.user);
//         } else {
//           console.log("No data found");
//           alert(response.data.message);
//         }
//       } catch (err) {
//         console.log(err);
//         // Optionally clear local storage and navigate to login
//         localStorage.clear();
//         console.log("Was not able to fetch user Information")
//         navigate('/login');
//       }
//     };

//     const getAllNotes= async()=>{
//       try{
//         const response= await apiClient.get("/getAllNotes");
//         // console.log("Response is :",response);
//         if(response?.data.allNotes){
//           setAllNotes(response.data.allNotes);
//           console.log("All notes are",allNotes);
//         }
//       }catch(err){
//         console.log("Error in fetching notes is ",err);
//       }

//     }


//     const deleteNote=async(noteData)=>{
//       try{
//         const noteId = noteData._id;
//         console.log("Note Id is : ",noteId);
//         const response = await apiClient.delete(`/deleteNote/${noteId}`);
//         if(response!==null){
//           console.log(response);
//           getAllNotes();
//         }

//       }catch(err){
//         console.log(err);
//       }
//     }

 


//     useEffect(() => {
//       fetchUserInfo();
//       getAllNotes();
//     },[]);    
  


//   return (
//     <div>

//       <Navbar userInfo={userInfo}
//       ></Navbar>
//       <div className='container'>
//         <div className='grid grid-cols-3 gap-4 mt-8 mx-auto'>
//         {allNotes.length > 0 ? ( // Check if allNotes has items
//             allNotes.map((item, index) => {
//               console.log('Item fetching is ', item);
//               return (
//                 <Card
//                   key={index}
//                   date={moment(item.createdOn).format('DD MM YYYY')}
//                   id={item._id}
//                   title={item.title}
//                   content={item.content}
//                   tags={item.tags}
//                   isPinned={item.isPinned}
//                   onEdit={() => {handleEdit(item)}}
//                   onDelete={() => {deleteNote(item)}}
//                   onPinNote={() => {}}
//                 />
//               );
//             })
//           ) : (
//             <p>No notes available</p> // Fallback UI when there are no notes
//           )}
//         </div>
//         <button className='w-16 h-16 flex justify-center items-center
//          bg-blue-500 hover:bg-blue-700 absolute right-10 bottom-10 rounded'
//          onClick={()=>{
//           setOpenEditModal({
//             isShown:true,
//             type:"add",
//             data:null
//           })
//          }}
//          >
//           <MdAdd className='text-white text-[32px]'/>
//         </button>



//         <Modal
//         isOpen={openEditModal.isShown}
//         onRequestClose={()=>{}}
//         style={{
//           overlay:{
//             backgroundColor: "rgba(0,0,0,0.2)"
//           },
//         }}
//         contentLabel=''
//         className="w-[650px] max-w-11/12  mx-auto my-[100px]"
//         >
//           <AddEditNotes 
//           type={openEditModal.type}
//           getAllNotes={getAllNotes}
//           noteData={openEditModal.data}
//           closeHandler={()=>{
//             setOpenEditModal({
//               isShown:false,
//               type:"add",
//               data:null
//             });
//           }}
//           ></AddEditNotes>
//         </Modal>
        
//       </div>
//     </div>
//   )
// }

// export default Home


import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { MdAdd } from 'react-icons/md'
import Modal from 'react-modal'
import AddEditNotes from '../components/AddEditNotes'
import apiClient from '../utils/axiosInstance'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const Home = ({ isLoggedIn, setIsLoggedIn }) => {
  let navigate = useNavigate();

  const [openEditModal, setOpenEditModal] = useState({
    isShown: false,
    type: 'add',
    data: null,
  });
  const [userInfo, setUserInfo] = useState([]);
  const [allNotes, setAllNotes] = useState([]);

  const handleEdit = (noteDetails) => {
    setOpenEditModal({
      isShown: true,
      data: noteDetails,
      type: 'edit',
    });
  };

  const fetchUserInfo = async () => {
    try {
      const response = await apiClient.get('/getUserInfo');
      if (response?.data.success) {
        setUserInfo(response.data.user);
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.error(err);
      localStorage.clear();
      navigate('/login');
    }
  };

  const getAllNotes = async () => {
    try {
      const response = await apiClient.get('/getAllNotes');
      if (response?.data.allNotes) {
        setAllNotes(response.data.allNotes);
      }
    } catch (err) {
      console.error('Error fetching notes:', err);
    }
  };

  const deleteNote = async (noteData) => {
    try {
      const noteId = noteData._id;
      const response = await apiClient.delete(`/deleteNote/${noteId}`);
      if (response) {
        getAllNotes();
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUserInfo();
    getAllNotes();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <Navbar userInfo={userInfo} />
      <div className="flex flex-col items-center py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg">
          {allNotes.length > 0 ? (
            allNotes.map((item, index) => (
              <Card
                key={index}
                date={moment(item.createdOn).format('DD MMM YYYY')}
                id={item._id}
                title={item.title}
                content={item.content}
                tags={item.tags}
                isPinned={item.isPinned}
                onEdit={() => handleEdit(item)}
                onDelete={() => deleteNote(item)}
                onPinNote={() => {}}
              />
            ))
          ) : (
            <p className="text-gray-600 text-base font-normal">No notes available</p>
          )}
        </div>
        <button
          className="fixed bottom-10 right-10 w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg"
          onClick={() => {
            setOpenEditModal({
              isShown: true,
              type: 'add',
              data: null,
            });
          }}
        >
          <MdAdd className="text-3xl" />
        </button>

        <Modal
          isOpen={openEditModal.isShown}
          onRequestClose={() => {}}
          style={{
            overlay: {
              backgroundColor: 'rgba(0,0,0,0.3)',
            },
            content: {
              backgroundColor: 'white',
              borderRadius: '8px',
              maxWidth: '90%',
              margin: 'auto',
              padding: '20px',
            },
          }}
          contentLabel=""
        >
          <AddEditNotes
            type={openEditModal.type}
            getAllNotes={getAllNotes}
            noteData={openEditModal.data}
            closeHandler={() => {
              setOpenEditModal({
                isShown: false,
                type: 'add',
                data: null,
              });
            }}
          />
        </Modal>
      </div>
    </div>
  );
}

export default Home;
