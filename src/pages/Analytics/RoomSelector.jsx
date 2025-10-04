import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const roomOptions = [
  { value: 'livingroom', label: 'Living Room' },
  { value: 'bedroom', label: 'Bed Room' },
  { value: 'kidroom', label: 'Kid Room' },
  { value: 'kitchen', label: 'Kitchen' },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#f0f0f0',
    borderColor: '#ccc',
    minHeight: '40px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#00bfff' : state.isFocused ? '#e6f7ff' : null,
    color: '#333',
  }),
};

const RoomSelector = ({ onRoomDataFetched }) => {
  const [selectedRoom, setSelectedRoom] = useState(null); // düzəldildi

  useEffect(() => {
    if (!selectedRoom) {
      onRoomDataFetched([]);
      return;
    }

    const mockData = {
      livingroom: { id: 1, name: 'Living Room', energy: 120, devices: 5, internet: '50GB' },bedroom: { id: 2, name: 'Bed Room', energy: 80, devices: 3, internet: '20GB' },
      kidroom: { id: 3, name: 'Kid Room', energy: 60, devices: 2, internet: '15GB' },
      kitchen: { id: 4, name: 'Kitchen', energy: 90, devices: 4, internet: '30GB' },
    };

    const fetchRoom = () => {
      const result = mockData[selectedRoom.value];
      onRoomDataFetched(result ? [result] : []);
    };

    fetchRoom();
  }, [selectedRoom, onRoomDataFetched]);

  const handleChange = (selectedOption) => {
    setSelectedRoom(selectedOption); // düzəldildi
  };

  return (
    <div style={{ width: '300px', marginTop: '10px', alignItems:'center' }}>
      <Select
        options={roomOptions}
        isMulti={false}
        onChange={handleChange}
        styles={customStyles}
        placeholder="Otaq seçin..."
        value={selectedRoom}
      />
    </div>
  );
};
export default RoomSelector;