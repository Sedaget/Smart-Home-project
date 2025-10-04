import React, { useState } from 'react';
import './CameraWidget.css';



const CameraWidget = () => {
  const [selectedCamera, setSelectedCamera] = useState('Camera 01');

  return (
      <div className="card-header">
        <select value={selectedCamera} onChange={(e) => setSelectedCamera(e.target.value)}>
          <option>Camera 01</option>
          <option>Camera 02</option>
          <option>Camera 03</option>
        </select>
        <span className="live-badge">🔴 Live</span>
      </div>
  );
};

export default CameraWidget;



// // import React, { useState } from 'react';
// import './CameraCard.css';

// const cameraImages = {
//   "Camera 01": "/assets/images/camera1.jpg",
//   "Camera 02": "/assets/images/camera2.jpg",
//   "Camera 03": "/assets/images/camera3.jpg"
// };

// const CameraCard = () => {
//   const [selectedCamera, setSelectedCamera] = useState('Camera 01');

//   return (
//     <div className="camera-card">
//       <div className="card-header">
//         <select value={selectedCamera} onChange={(e) => setSelectedCamera(e.target.value)}>
//           {Object.keys(cameraImages).map((cam) => (
//             <option key={cam}>{cam}</option>
//           ))}
//         </select>
//         <span className="live-badge">🔴 Live</span>
//       </div>
//       <img
//         src={cameraImages[selectedCamera]}
//         alt={selectedCamera}
//         className="camera-feed"
//       />
//     </div>
//   );
// };

// export default CameraCard;
// import cam1 from '../assets/images/camera1.jpg';
// import cam2 from '../assets/images/camera2.jpg';
// import cam3 from '../assets/images/camera3.jpg';

// const cameraImages = {
//   "Camera 01": cam1,
//   "Camera 02": cam2,
//   "Camera 03": cam3
// };