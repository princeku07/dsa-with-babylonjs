import * as BABYLON from '@babylonjs/core'

export const hexToColor3 = (hex) => {
  // Check if hex is undefined or empty
  if (!hex) {
    return null; // Or return a default color or handle the error as needed
  }

  // Remove the "#" symbol if present
  if (hex.charAt(0) === "#") {
    hex = hex.slice(1);
  }
  
  // Convert the hexadecimal string to individual RGB components
  const red = parseInt(hex.substring(0, 2), 16) / 255;
  const green = parseInt(hex.substring(2, 4), 16) / 255;
  const blue = parseInt(hex.substring(4, 6), 16) / 255;

  // Create a new BABYLON.Color3 object with the RGB values
  const color = new BABYLON.Color3(red, green, blue);

  return color;
}



  export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


