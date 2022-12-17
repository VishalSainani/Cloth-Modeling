import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'

import {
    minecraft, check10, check22, alphaTexture,
    heightTexture, normalTexture, ambientOcclusionTexture,
    metalnessTexture, roughnessTexture, colorTexture,
    skinTexture
} from './textures.js'

var pants = []
const pantObjLoader = new OBJLoader()

pantObjLoader.setPath('/models/Pant/')

pantObjLoader.load(
    "pant.obj",
    function (obj) {
        // var model = obj.scene;
        obj.scale.setZ(0.01)
        obj.scale.setY(0.01)
        obj.scale.setX(0.01)
        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                // child.material.map = roughnessTexture;
                // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);


export {
    pants
}