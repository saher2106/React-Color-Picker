import React, { useState } from 'react';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorOptions, setShowColorOptions] = useState(true);

  const colorData = [
    { name: 'Red', color: '#FF0000' },
    { name: 'Green', color: '#008000' },
    { name: 'Blue', color: '#0000FF' },
    { name: 'Yellow', color: '#FFFF00' },
    { name: 'Purple', color: '#800080' },
    { name: 'Cyan', color: '#00FFFF' },
    { name: 'Orange', color: '#FFA500' },
    { name: 'Pink', color: '#FFC0CB' },
    { name: 'Lavender', color: '#E6E6FA' },
    { name: 'Teal', color: '#008080' },
    { name: 'Brown', color: '#A52A2A' },
    { name: 'Magenta', color: '#FF00FF' },
    { name: 'Navy', color: '#000080' },
    { name: 'Turquoise', color: '#40E0D0' },
    { name: 'Gold', color: '#FFD700' },
    // { name: 'Silver', color: '#C0C0C0' },
  ];

  const colorBlockStyle = {
    width: '900px',
    height: '750px',
    margin: 'auto',
    backgroundColor: selectedColor || '#ffffff',
    borderRadius: '25px',
  };

  const colorOptionsStyle = {
    display: showColorOptions ? 'flex' : 'none',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 'auto',
    boxShadow: '0 0 10px gray',
    position: 'absolute',
    top: '420px',
    left: '15%',
  };

  const wholestyle = {
    backgroundColor: '#bcb4e0',
    minHeight: '100vh',
  };

  const heading = {
    textAlign: 'center',
  };

  const pickButton = {
    position: 'absolute',
    top: '520px',
    left: '47vw',
    backgroundColor: '#42f56f',
    color: 'white',
    height : '40px',
    width: '120px',
    border : '0',
  };

  const pickColor = (color) => {
    setSelectedColor(color);
    setShowColorOptions(false);
  };

  const toggleColorOptions = () => {
    setShowColorOptions(!showColorOptions);
  };

  return (
    <body style={wholestyle}>
       <br /> <br />
      <h1 style={heading}>Color Picker</h1>
      <br /> 
      <button style={pickButton} onClick={toggleColorOptions}>Pick a Color</button>
      <div style={colorBlockStyle}></div>
      <div style={colorOptionsStyle}>
        {colorData.map((colorItem, index) => (
          <div
            key={index}
            style={{
              width: '50px',
              height: '50px',
              margin: '5px',
              backgroundColor: colorItem.color,
              cursor: 'pointer',
            }}
            onClick={() => pickColor(colorItem.color)}
          ></div>
        ))}
      </div>
    </body>
  );
};

export default ColorPicker;