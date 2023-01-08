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
        model.position.setX(0.0295)
        model.position.setY(0.0728)
        model.position.setZ(-0.0572)

        model.scale.setX(1.1566)
        model.scale.setY(1)
        model.scale.setZ(1.937)
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
        model.position.setX(0.0295)
        model.position.setY(0.0728)
        model.position.setZ(-0.0572)

        model.scale.setX(1.1566)
        model.scale.setY(1)
        model.scale.setZ(1.937)
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
        model.position.setX(0.0295)
        model.position.setY(0.0728)
        model.position.setZ(-0.0572)

        model.scale.setX(1.1566)
        model.scale.setY(1)
        model.scale.setZ(1.937)
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
        model.position.setX(0.0295)
        model.position.setY(0.0728)
        model.position.setZ(-0.0572)

        model.scale.setX(1.1566)
        model.scale.setY(1)
        model.scale.setZ(1.937)
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
        model.position.setX(0.0295)
        model.position.setY(0.0728)
        model.position.setZ(-0.0572)

        model.scale.setX(1.1566)
        model.scale.setY(1)
        model.scale.setZ(1.937)
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
        model.position.setX(0.0295)
        model.position.setY(0.0728)
        model.position.setZ(-0.0572)

        model.scale.setX(1.1566)
        model.scale.setY(1)
        model.scale.setZ(1.937)
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
        model.scale.setZ(1.3)
        model.position.setX(0.0295)
        model.position.setY(0.0728)
        model.position.setZ(-0.0572)

        model.scale.setX(1.1566)
        model.scale.setY(1)
        model.scale.setZ(1.937)
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
        model.position.setX(0.0295)
        model.position.setY(0.0728)
        model.position.setZ(-0.0572)

        model.scale.setX(1.1566)
        model.scale.setY(1)
        model.scale.setZ(1.937)
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
        model.position.setX(0.0295)
        model.position.setY(0.0728)
        model.position.setZ(-0.0572)

        model.scale.setX(1.1566)
        model.scale.setY(1)
        model.scale.setZ(1.937)
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

// Model loading

gltfLoader.load(
    '/models/t_shirt/scene.gltf',
    (gltf) => {
        var model = gltf.scene;
        // model.scale.setZ(1.3)

        model.position.setX(0.0295)
        model.position.setY(0.0728)
        model.position.setZ(-0.0572)

        model.scale.setX(1.1566)
        model.scale.setY(1)
        model.scale.setZ(1.937)

        model.traverse((o) => {
            if (o.isMesh) {
                // note: for a multi-material mesh, `o.material` may be an array,
                // in which case you'd need to set `.map` on each value.
                o.material.map = minecraft;
            }
        });
        clothes.push(model)
        console.log(clothes.length);
        // console.log(index.value)
        // console.log(model.scale.x);


    }
)


shirtObjLoader.setPath('/models/t_shirt/')


shirtObjLoader.load(
    "FullShirt.obj",
    (object) => {
        object.position.setX(0.02)
        object.position.setY(-0.08)
        object.position.setZ(-0.06)

        object.scale.setX(1.5)
        object.scale.setY(0.99)
        object.scale.setZ(1.7)
        object.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: check10 });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });
        // Add the loaded object to the scene

        clothes.push(object);
    },

);
shirtObjLoader.load(
    "FullShirt.obj",
    (object) => {
        object.position.setX(0.02)
        object.position.setY(-0.08)
        object.position.setZ(-0.06)

        object.scale.setX(1.5)
        object.scale.setY(0.99)
        object.scale.setZ(1.7)
        object.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: check22 });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });
        // Add the loaded object to the scene

        clothes.push(object);
    },

);
shirtObjLoader.load(
    "FullShirt.obj",
    (object) => {
        object.position.setX(0.02)
        object.position.setY(-0.08)
        object.position.setZ(-0.06)

        object.scale.setX(1.5)
        object.scale.setY(0.99)
        object.scale.setZ(1.7)
        object.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: minecraft });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });
        // Add the loaded object to the scene

        clothes.push(object);
    },

);
shirtObjLoader.load(
    "FullShirt.obj",
    (object) => {
        object.position.setX(0.02)
        object.position.setY(-0.08)
        object.position.setZ(-0.06)

        object.scale.setX(1.5)
        object.scale.setY(0.99)
        object.scale.setZ(1.7)
        object.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: alphaTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });
        // Add the loaded object to the scene

        clothes.push(object);
    },

);
shirtObjLoader.load(
    "FullShirt.obj",
    (object) => {
        object.position.setX(0.02)
        object.position.setY(-0.08)
        object.position.setZ(-0.06)

        object.scale.setX(1.5)
        object.scale.setY(0.99)
        object.scale.setZ(1.7)
        object.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: heightTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });
        // Add the loaded object to the scene

        clothes.push(object);
    },

);
shirtObjLoader.load(
    "FullShirt.obj",
    (object) => {
        object.position.setX(0.02)
        object.position.setY(-0.08)
        object.position.setZ(-0.06)

        object.scale.setX(1.5)
        object.scale.setY(0.99)
        object.scale.setZ(1.7)
        object.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: normalTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });
        // Add the loaded object to the scene

        clothes.push(object);
    },

);
shirtObjLoader.load(
    "FullShirt.obj",
    (object) => {
        object.position.setX(0.02)
        object.position.setY(-0.08)
        object.position.setZ(-0.06)

        object.scale.setX(1.5)
        object.scale.setY(0.99)
        object.scale.setZ(1.7)
        object.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: ambientOcclusionTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });
        // Add the loaded object to the scene

        clothes.push(object);
    },

);

shirtObjLoader.load(
    "FullShirt.obj",
    (object) => {
        object.position.setX(0.02)
        object.position.setY(-0.08)
        object.position.setZ(-0.06)

        object.scale.setX(1.5)
        object.scale.setY(0.99)
        object.scale.setZ(1.7)
        object.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: metalnessTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });
        // Add the loaded object to the scene

        clothes.push(object);
    },

);
shirtObjLoader.load(
    "FullShirt.obj",
    (object) => {
        object.position.setX(0.02)
        object.position.setY(-0.08)
        object.position.setZ(-0.06)

        object.scale.setX(1.5)
        object.scale.setY(0.99)
        object.scale.setZ(1.7)
        object.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: roughnessTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });
        // Add the loaded object to the scene

        clothes.push(object);
    },

);
shirtObjLoader.load(
    "FullShirt.obj",
    (object) => {
        object.position.setX(0.02)
        object.position.setY(-0.08)
        object.position.setZ(-0.06)

        object.scale.setX(1.5)
        object.scale.setY(0.99)
        object.scale.setZ(1.7)
        object.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: colorTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });
        // Add the loaded object to the scene

        clothes.push(object);
    },

);
shirtObjLoader.load(
    "FullShirt.obj",
    (object) => {
        object.position.setX(0.02)
        object.position.setY(-0.08)
        object.position.setZ(-0.06)

        object.scale.setX(1.5)
        object.scale.setY(0.99)
        object.scale.setZ(1.7)
        object.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: skinTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });
        // Add the loaded object to the scene

        clothes.push(object);
    },

);

export {
    clothes
}