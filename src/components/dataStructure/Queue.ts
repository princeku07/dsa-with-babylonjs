import * as BABYLON from "@babylonjs/core"
import { getRandomColor, hexToColor3 } from "../utils"


class Queue {

    constructor(){
        this.queue = []
        this.spacing = 0.2
    }

    enqueue(){
        const box = new BABYLON.MeshBuilder.CreateBox("box",{size:1})
        const boxMaterial = new BABYLON.StandardMaterial("BoxMat")
        boxMaterial.diffuseColor = hexToColor3(getRandomColor())
        box.material = boxMaterial
        box.position.x = -(this.queue.length * (1+this.spacing))
        this.queue.push(box)
    }

    dequeue(){
       if(this.queue.length > 0){
        const box = this.queue.shift()
        box.dispose()
        
        for(let i = 0; i< this.queue.length; i++){
            this.queue[i].position.x = -(i * (1 + this.spacing))
        }

       }

    }

    init(){
        this.enqueue()
    }
}

export default Queue