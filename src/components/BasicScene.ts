import { useState } from "react";
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder } from "@babylonjs/core";
import SceneComponent from 'babylonjs-hook'
import * as BABYLON from '@babylonjs/core'
import { Texture } from "@babylonjs/core";
import hexToColor3 from "./utils"
import { Vector3 } from "@babylonjs/core";
import Queue from "./dataStructure/Queue";







export const onSceneReady = (scene:BABYLON.Scene) => {
  //   // This creates and positions a free camera (non-mesh)
  //   const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

  //   // This targets the camera to scene origin
  //   camera.setTarget(Vector3.Zero());

  const canvas = scene.getEngine().getRenderingCanvas();

  //   // This attaches the camera to the canvas
  //   camera.attachControl(canvas, true);
  const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 4, 10, new Vector3(0, 0, 0), scene);
  camera.attachControl(canvas, true);

  // Set the camera speed (change as per your requirement)
  camera.speed = 0.25;
  const light = new BABYLON.HemisphericLight("light",new Vector3(1, 1, 0));
  camera.attachControl(canvas, true);

   const queue  = new Queue()
   queue.init()
   document.getElementById("enqueue").addEventListener("click",()=> queue.enqueueBox())
   document.getElementById("dequeue").addEventListener("click",()=> queue.dequeueBox())



};


/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
export const onRender = (scene) => {
   
};