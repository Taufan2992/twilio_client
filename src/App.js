import React from 'react';
import {Routes, Route} from 'react-router-dom';
import VideoJoin from './components/VideoJoin';
import VideoSurvey from './components/VideoSurvey';
import Buttonvid from './partial/Buttonvid';
// import { useState } from 'react';
// import { useMutation } from 'react-query';
// import { API } from './config/api';

function App() {

// const [forms, setForms] = useState({
//   roomName : ""
// })

// const handleChange = (e) => {
//   setForms({
//     ...forms,
//     [e.target.name]: e.target.value,
//   });
// };

// console.log(forms);

// const handleSubmit = useMutation(async (e) => {
//   try {
//     e.preventDefault();

//     const config = {
//       headers: {
//         accept : "aplication/json",
//         "Content-type": "application/json",
//       },
//     };

//     // Store data with FormData as object
//     const body = JSON.stringify({ roomName : forms})
//     console.log("Room Name : ",forms);
//     // Insert data
//     const response = await API.post("/join-room", body, config);
//     console.log('====================================');
//     console.log(response);
//     console.log('====================================');
//   } catch (error) {
//     console.log(error);
//   }
// });

  return (
    // <div>
    //   <form  id="room-name-form" onSubmit={(e) => handleSubmit.mutate(e)}>
    //   Enter a Room Name to join: <input name="roomName" id="room-name-input" onChange={handleChange}/>
    //   <button type="submit">Join Room</button>
    //   </form>
    //   <div id="video-container"></div>

    // </div>

  <Routes>
    <Route path='/' element={<VideoSurvey/>}  />
    <Route path='/button' element={<Buttonvid/>}  />
    <Route path='/join' element={<VideoJoin/>}  />

  </Routes>

  );
}

export default App;
