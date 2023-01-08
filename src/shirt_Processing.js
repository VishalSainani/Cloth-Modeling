import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import {
    minecraft, check10, check22, alphaTexture,
    heightTexture, normalTexture, ambientOcclusionTexture,
    metalnessTexture, roughnessTexture, colorTexture,
    skinTexture
} from './textures.js'
import * as THREE from 'three'

/**
 * Models
 */
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')

const shirtObjLoader = new OBJLoader()
shirtObjLoader.setPath('/models/t_shirt/')

//Initilzation 
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)
var clothes = []

gltfLoader.load(
    '/models/t_shirt/scene.gltf',
    (gltf) => {
        var model = gltf.scene;
        model.scale.setZ(1.3)
        model.traverse((o) => {
            if (o.isMesh) {
                // note: for a multi-material mesh, `o.material` may be an array,
                // in which case you'd need to set `.map` on each value.
                o.material.map = alphaTexture;
            }
        });
        clothes.push(model)

    }
)
// Model loading
gltfLoader.load(
    '/models/t_shirt/scene.gltf',
    (gltf) => {
        var model = gltf.scene;
        model.scale.setZ(1.3)
        model.traverse((o) => {
            if (o.isMesh) {
                // note: for a multi-material mesh, `o.material` may be an array,
                // in which case you'd need to set `.map` on each value.
                o.material.map = colorTexture;
            }
        });
        clothes.push(model)

    }
)
// Model loading
gltfLoader.load(
    '/models/t_shirt/scene.gltf',
    (gltf) => {
        var model = gltf.scene;
        model.scale.setZ(1.3)
        model.traverse((o) => {
            if (o.isMesh) {
                // note: for a multi-material mesh, `o.material` may be an array,
                // in which case you'd need to set `.map` on each value.
                o.material.map = heightTexture;
            }
        });
        clothes.push(model)

    }
)
// Model loading

gltfLoader.load(
    '/models/t_shirt/scene.gltf',
    (gltf) => {
        var model = gltf.scene;
        model.scale.setZ(1.3)
        model.traverse((o) => {
            if (o.isMesh) {
                // note: for a multi-material mesh, `o.material` may be an array,
                // in which case you'd need to set `.map` on each value.
                o.material.map = normalTexture;
            }
        });
        clothes.push(model)

    }
)
// Model loading

gltfLoader.load(
    '/models/t_shirt/scene.gltf',
    (gltf) => {
        var model = gltf.scene;
        model.scale.setZ(1.3)
        model.traverse((o) => {
            if (o.isMesh) {
                // note: for a multi-material mesh, `o.material` may be an array,
                // in which case you'd need to set `.map` on each value.
                o.material.map = ambientOcclusionTexture;
            }
        });
        clothes.push(model)

    }
)
// Model loading

gltfLoader.load(
    '/models/t_shirt/scene.gltf',
    (gltf) => {
        var model = gltf.scene;
        model.scale.setZ(1.3)
        model.traverse((o) => {
            if (o.isMesh) {
                // note: for a multi-material mesh, `o.material` may be an array,
                // in which case you'd need to set `.map` on each value.
                o.material.map = metalnessTexture;
            }
        });
        clothes.push(model)

    }
)
// Model loading

gltfLoader.load(
    '/models/t_shirt/scene.gltf',
    (gltf) => {
        var model = gltf.scene;
        model.scale.setZ(1.3)
        model.traverse((o) => {
            if (o.isMesh) {
                // note: for a multi-material mesh, `o.material` may be an array,
                // in which case you'd need to set `.map` on each value.
                o.material.map = roughnessTexture;
            }
        });
        clothes.push(model)

    }
)

// Model loading

gltfLoader.load(
    '/models/t_shirt/scene.gltf',
    (gltf) => {
        var model = gltf.scene;
        model.scale.setZ(1.3)
        model.traverse((o) => {
            if (o.isMesh) {
                // note: for a multi-material mesh, `o.material` may be an array,
                // in which case you'd need to set `.map` on each value.
                o.material.map = check22;
            }
        });
        clothes.push(model)

    }
)
// Model loading

gltfLoader.load(
    '/models/t_shirt/scene.gltf',
    (gltf) => {
        var model = gltf.scene;
        model.scale.setZ(1.3)
        model.traverse((o) => {
            if (o.isMesh) {
                // note: for a multi-material mesh, `o.material` may be an array,
                // in which case you'd need to set `.map` on each value.
                o.material.map = check10;
            }
        });
        clothes.push(model)

    }
)

// shirtObjLoader.load(
//     "FullShirt.obj",
//     function (obj) {
//         obj.position.setX(0)
//         obj.position.setY(0)
//         obj.position.setZ(0)

//         obj.scale.setX(0.0166)
//         obj.scale.setY(0.0123)
//         obj.scale.setZ(0.0253)

//         obj.traverse(function (child) {   // aka setTexture
//             if (child instanceof THREE.Mesh) {
//                 const Pmaterial = new THREE.MeshBasicMaterial({ map: minecraft });
//                 child.material = Pmaterial;
//                 //         // child.material.color.set('gray')
//             }
//         });
//         // scene.add(obj)
//         clothes.push(obj)
//     }
// );
export {
    clothes
}