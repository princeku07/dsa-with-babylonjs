import * as BABYLON from '@babylonjs/core'
import {getRandomColor} from '../utils'
import { hexToColor3 } from '../utils'

class Queue {
   constructor(){
    this.queue = [];
    this.spacing = 0.2; 
    
   }

   enqueueBox() {
    const box = BABYLON.MeshBuilder.CreateBox("box", { size: 1 }, this.scene);
    const boxMaterial = new BABYLON.StandardMaterial("boxMaterial")
    boxMaterial.diffuseColor = hexToColor3(getRandomColor())
    box.material = boxMaterial
    box.position.x = -(this.queue.length * (1 + this.spacing))  ;
    this.queue.push(box);
    console.log(this.queue.length)
  

   
  }

  dequeueBox() {
    if (this.queue.length > 0) {
      const box = this.queue.shift();
      box.dispose(); // Remove the box from the scene

    // Rearrange positions of remaining boxes
    for (let i = 0; i < this.queue.length; i++) {
    this.queue[i].position.x = -(i *(1 + this.spacing));
  }
    }
  }

  init() {
    this.enqueueBox(); // Enqueue an initial element
  }


}
export default Queue;