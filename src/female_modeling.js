
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import {
    femaleTexture1, femaleTexture2, femaleTexture3,
    femaleTexture4, femaleTexture5, femaleTexture6,
    femaleTexture7, femaleTexture8, femaleTexture9,
}
    from './textures.js'
const objLoader = new OBJLoader()
objLoader.setPath('/models/female_cloth/')
var femaleClothes = []

// Model loading
objLoader.load(
    "female_dress.obj",
    (object) => {
        object.position.setX(1.09311)
        object.position.setY(-0.0588)
        object.position.setZ(-0.1475)

        object.scale.setX(1.4476)
        object.scale.setY(1.0488)
        object.scale.setZ(1.8906)

        object.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: femaleTexture1 });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });
        femaleClothes.push(object);
    },

);

//
objLoader.load(
    "female_dress.obj",
    (object) => {
        object.position.setX(1.09311)
        object.position.setY(-0.0588)
        object.position.setZ(-0.1475)

        object.scale.setX(1.4476)
        object.scale.setY(1.0488)
        object.scale.setZ(1.8906)
        object.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: femaleTexture2 });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });
        femaleClothes.push(object);
    },

);

//
objLoader.load(
    "female_dress.obj",
    (object) => {
        object.position.setX(1.09311)
        object.position.setY(-0.0588)
        object.position.setZ(-0.1475)

        object.scale.setX(1.4476)
        object.scale.setY(1.0488)
        object.scale.setZ(1.8906)
        object.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: femaleTexture3 });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });
        femaleClothes.push(object);
    },

);

//
objLoader.load(
    "female_dress.obj",
    (object) => {
        object.position.setX(1.09311)
        object.position.setY(-0.0588)
        object.position.setZ(-0.1475)

        object.scale.setX(1.4476)
        object.scale.setY(1.0488)
        object.scale.setZ(1.8906)
        object.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: femaleTexture4 });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });
        femaleClothes.push(object);
    },

);

//
objLoader.load(
    "female_dress.obj",
    (object) => {
        object.position.setX(1.09311)
        object.position.setY(-0.0588)
        object.position.setZ(-0.1475)

        object.scale.setX(1.4476)
        object.scale.setY(1.0488)
        object.scale.setZ(1.8906)
        object.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: femaleTexture5 });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });
        femaleClothes.push(object);
    },

);

//
objLoader.load(
    "female_dress.obj",
    (object) => {
        object.position.setX(1.09311)
        object.position.setY(-0.0588)
        object.position.setZ(-0.1475)

        object.scale.setX(1.4476)
        object.scale.setY(1.0488)
        object.scale.setZ(1.8906)
        object.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: femaleTexture6 });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });
        femaleClothes.push(object);
    },

);

//
objLoader.load(
    "female_dress.obj",
    (object) => {
        object.position.setX(1.09311)
        object.position.setY(-0.0588)
        object.position.setZ(-0.1475)

        object.scale.setX(1.4476)
        object.scale.setY(1.0488)
        object.scale.setZ(1.8906)
        object.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: femaleTexture7 });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });
        femaleClothes.push(object);
    },

);

//
objLoader.load(
    "female_dress.obj",
    (object) => {
        object.position.setX(1.09311)
        object.position.setY(-0.0588)
        object.position.setZ(-0.1475)

        object.scale.setX(1.4476)
        object.scale.setY(1.0488)
        object.scale.setZ(1.8906)
        object.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: femaleTexture8 });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });
        femaleClothes.push(object);
    },

);

//
objLoader.load(
    "female_dress.obj",
    (object) => {
        object.position.setX(1.09311)
        object.position.setY(-0.0588)
        object.position.setZ(-0.1475)

        object.scale.setX(1.4476)
        object.scale.setY(1.0488)
        object.scale.setZ(1.8906)
        object.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: femaleTexture9 });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });
        femaleClothes.push(object);
    },

);

export {
    femaleClothes,
}