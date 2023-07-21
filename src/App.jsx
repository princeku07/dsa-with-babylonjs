import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SceneComponent from 'babylonjs-hook'
import { onSceneReady,onRender } from './components/BasicScene'

function App() {


  return (
    <>
      <div className='App' >
      <div id='canvasContainer'>
      <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} style={{ width: '100vw', height: '100vh' ,overflow:'hidden' }}  />
      <div id="buttonContainer">
        <button id="enqueue">Enqueue</button>
        <button id="dequeue">Dequeue</button>
      </div>
      </div>
     
      
  </div>
      
    </>
  )
}

export default App
