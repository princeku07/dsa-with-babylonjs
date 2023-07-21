import { useState } from "react";
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder } from "@babylonjs/core";
import SceneComponent from 'babylonjs-hook'
import * as BABYLON from '@babylonjs/core'
import { Texture } from "@babylonjs/core";
import environment from '../assets/environments/environment.env'
import diffuse from '../assets/textures/asphalt/diffuse.jpg'





let sphere

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
  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
  camera.attachControl(canvas, true);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 1;
//sphere
sphere = MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
sphere.position.y = 1

//ground
const ground = MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
  const groundMaterial = new BABYLON.PBRMaterial("groundMaterial")
  
  





};


/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
export const onRender = (scene) => {
    // if (sphere !== undefined) {
    //   const deltaTimeInMillis = scene.getEngine().getDeltaTime();

    //   const rpm = 10;
    //   sphere.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    // }
};