import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { CurvePath, log, WireframeGeometry } from 'three'
import {
    minecraft,
} from './textures.js'

import { pants } from './pant_preprocessing.js'
import { clothes } from './shirt_Processing'
/**
 * Base
 */
// Debug
const gui = new dat.GUI()
var index = {
    value: 0,
    name: '',
    pantValue: 0
}

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Models
 */
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/draco/')

const objLoader = new OBJLoader()
// objLoader.setDRACOLoader(dracoLoader)

//Initilzation 
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)
// var clothes = []

var mesh;
let mixer = null
// Model loading

objLoader.load(
    "/models/t_shirt/FullShirt.obj",
    (object) => {
        object.position.setX(-0.78)
        object.position.setY(1.65)
        object.position.setZ(-10.490)

        object.scale.setX(-0.1873)
        object.scale.setY(0.0728)
        object.scale.setZ(0.0253)
        // Add the loaded object to the scene
        var positionX = gui.add(object.position, "x", -112, 112, 0.01).name("shirt x1 position")
        var positionY = gui.add(object.position, "y", -112, 112, 0.01).name("shirt y1 position")
        var positionZ = gui.add(object.position, "z", -112, 112, 0.01).name("shirt z1 position")

        var scaleX = gui.add(object.scale, "x", -2, 2, 0.0001).name("shirt x1 Cloth set")
        var scaleY = gui.add(object.scale, "y", -2, 2, 0.0001).name("shirt y1 Cloth set")
        var scaleZ = gui.add(object.scale, "z", -2, 2, 0.0001).name("shirt z1 Cloth set")

        scene.add(object);
    },
    (progress) => {
        // This function is called while the model is loading
        console.log(`Loading model: ${(progress.loaded / progress.total * 100)}%`);
    },
    (error) => {
        // This function is called if an error occurs while loading the model
        console.error(error);
    }
);


objLoader.load(
    "/models/female_cloth/female_dress.obj",
    (object) => {
        // object.position.setX(-0.78)
        // object.position.setY(1.65)
        // object.position.setZ(-10.490)

        // object.scale.setX(-0.1873)
        // object.scale.setY(0.0728)
        // object.scale.setZ(0.0253)
        // Add the loaded object to the scene
        var positionX = gui.add(object.position, "x", -2, 2, 0.0001).name("female shirt x1 position")
        var positionY = gui.add(object.position, "y", -2, 2, 0.0001).name("female shirt y1 position")
        var positionZ = gui.add(object.position, "z", -2, 2, 0.0001).name("female shirt z1 position")

        var scaleX = gui.add(object.scale, "x", -2, 2, 0.0001).name("female shirt x1 Cloth set")
        var scaleY = gui.add(object.scale, "y", -2, 2, 0.0001).name("female shirt y1 Cloth set")
        var scaleZ = gui.add(object.scale, "z", -2, 2, 0.0001).name("female shirt z1 Cloth set")

        scene.add(object);
    },
    (progress) => {
        // This function is called while the model is loading
        console.log(`Loading model: ${(progress.loaded / progress.total * 100)}%`);
    },
    (error) => {
        // This function is called if an error occurs while loading the model
        console.error(error);
    }
);
// Model loading

gltfLoader.load(
    '/models/t_shirt/scene.gltf',
    (gltf) => {
        var model = gltf.scene;
        // model.scale.setZ(1.3)
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

        var FizzyText = function () {
            this.slider = 0;
            //this.slider2 = 0;
        };
        var FizzyText1 = function () {
            this.sliderPant = 0;
            //this.slider2 = 0;
        };

        var text = new FizzyText()
        var slider = gui.add(text, 'slider', 0, 10, 1).listen();
        var text2 = new FizzyText1()
        var sliderPant = gui.add(text2, 'sliderPant', 0, 21, 1).listen();


        var positionX, positionY, positionZ;
        var scaleZ, scaleY, scaleX;
        var pantPositionX, pantPositionY, pantPositionZ
        var pantScaleZ, pantScaleY, pantScaleX
        // Shirt
        var smallShirt = { small: function () { clothes[0].scale.setZ(1.30035) } };
        var mediumShirt = { medium: function () { clothes[0].scale.setZ(1.5035) } };
        var largeShirt = { large: function () { clothes[0].scale.setZ(1.6035) } };
        var extraLargeShirt = { extraLarge: function () { clothes[0].scale.setZ(1.7035) } };

        var smallButtonShirt = gui.add(smallShirt, 'small');
        var mediumButtonShirt = gui.add(mediumShirt, 'medium');
        var largeButtonShirt = gui.add(largeShirt, 'large');
        var extraLargeButtonShirt = gui.add(extraLargeShirt, 'extraLarge');

        clothes[0].position.setX(0.0295)
        clothes[0].position.setY(0.0728)
        clothes[0].position.setZ(-0.0572)

        clothes[0].scale.setX(1.1566)
        clothes[0].scale.setY(1)
        clothes[0].scale.setZ(1.937)

        scene.add(clothes[0])

        positionX = gui.add(clothes[0].position, "x", -2, 2, 0.0001).name("shirt x position")
        positionY = gui.add(clothes[0].position, "y", -2, 2, 0.0001).name("shirt y position")
        positionZ = gui.add(clothes[0].position, "z", -2, 2, 0.0001).name("shirt z position")

        scaleZ = gui.add(clothes[0].scale, "z", -2, 2, 0.0001).name("shirt z Cloth set")
        scaleY = gui.add(clothes[0].scale, "y", -2, 2, 0.0001).name("shirt y Cloth set")
        scaleX = gui.add(clothes[0].scale, "x", -2, 2, 0.0001).name("shirt x Cloth set")
        //  Pants
        var smallPant = { small: function () { pants[0].scale.setZ(0.0153) } };
        var mediumPant = { medium: function () { pants[0].scale.setZ(0.0253) } };
        var largePant = { large: function () { pants[0].scale.setZ(0.0353) } };
        var extraLargePant = { extraLarge: function () { pants[0].scale.setZ(0.0453) } };

        var smallButtonPant = gui.add(smallPant, 'small');
        var mediumButtonPant = gui.add(mediumPant, 'medium');
        var largeButtonPant = gui.add(largePant, 'large');
        var extraLargeButtonPant = gui.add(extraLargePant, 'extraLarge');

        pants[0].position.setX(0)
        pants[0].position.setY(0)
        pants[0].position.setZ(0)

        pants[0].scale.setX(0.0166)
        pants[0].scale.setY(0.0123)
        pants[0].scale.setZ(0.0253)

        scene.add(pants[0])

        pantPositionX = gui.add(pants[0].position, "x", -2, 2, 0.00001).name("pant x position")
        pantPositionY = gui.add(pants[0].position, "y", -2, 2, 0.00001).name("pant y position")
        pantPositionZ = gui.add(pants[0].position, "z", -2, 2, 0.00001).name("pant z position")

        pantScaleX = gui.add(pants[0].scale, "x", -0.1, 0.1, 0.0001).name("pant x Cloth set")
        pantScaleY = gui.add(pants[0].scale, "y", -0.1, 0.1, 0.0001).name("pant y Cloth set")
        pantScaleZ = gui.add(pants[0].scale, "z", -0.1, 0.1, 0.0001).name("pant z Cloth set")

        slider.onChange(function (value) {
            scene.remove(clothes[index.value])

            index.value = value // this doesn't work
            // Size setting for all shirts
            smallButtonShirt.remove()
            mediumButtonShirt.remove()
            largeButtonShirt.remove()
            extraLargeButtonShirt.remove()
            // Shirt setting for all shirts
            positionX.remove()
            positionY.remove()
            positionZ.remove()
            scaleZ.remove()
            scaleY.remove()
            scaleX.remove()

            clothes[index.value].position.setX(0.0295)
            clothes[index.value].position.setY(0.0728)
            clothes[index.value].position.setZ(-0.0572)

            clothes[index.value].scale.setX(1.1566)
            clothes[index.value].scale.setY(1)
            clothes[index.value].scale.setZ(1.937)

            scene.add(clothes[index.value])

            smallShirt = { small: function () { clothes[index.value].scale.setZ(1.30035) } };
            mediumShirt = { medium: function () { clothes[index.value].scale.setZ(1.5035) } };
            largeShirt = { large: function () { clothes[index.value].scale.setZ(1.6035) } };
            extraLargeShirt = { extraLarge: function () { clothes[index.value].scale.setZ(1.7035) } };

            smallButtonShirt = gui.add(smallShirt, 'small');
            mediumButtonShirt = gui.add(mediumShirt, 'medium');
            largeButtonShirt = gui.add(largeShirt, 'large');
            extraLargeButtonShirt = gui.add(extraLargeShirt, 'extraLarge');


            positionX = gui.add(clothes[index.value].position, "x", -2, 2, 0.0001).name("shirt x position")
            positionY = gui.add(clothes[index.value].position, "y", -2, 2, 0.0001).name("shirt y position")
            positionZ = gui.add(clothes[index.value].position, "z", -2, 2, 0.0001).name("shirt z position")

            scaleZ = gui.add(clothes[index.value].scale, "z", -2, 2, 0.0001).name("shirt z Cloth set")
            scaleY = gui.add(clothes[index.value].scale, "y", -2, 2, 0.0001).name("shirt y Cloth set")
            scaleX = gui.add(clothes[index.value].scale, "x", -2, 2, 0.0001).name("shirt x Cloth set")


        });

        sliderPant.onChange(function (value) {
            scene.remove(pants[index.pantValue])

            index.pantValue = value // this doesn't work

            // pants setting for all pants
            pantPositionX.remove()
            pantPositionY.remove()
            pantPositionZ.remove()
            pantScaleX.remove()
            pantScaleY.remove()
            pantScaleZ.remove()

            smallButtonPant.remove()
            mediumButtonPant.remove()
            largeButtonPant.remove()
            extraLargeButtonPant.remove()

            // Pant Wearing

            smallPant = { small: function () { pants[index.pantValue].scale.setZ(0.0153) } };
            mediumPant = { medium: function () { pants[index.pantValue].scale.setZ(0.0253) } };
            largePant = { large: function () { pants[index.pantValue].scale.setZ(0.0353) } };
            extraLargePant = { extraLarge: function () { pants[index.pantValue].scale.setZ(0.0453) } };

            smallButtonPant = gui.add(smallPant, 'small');
            mediumButtonPant = gui.add(mediumPant, 'medium');
            largeButtonPant = gui.add(largePant, 'large');
            extraLargeButtonPant = gui.add(extraLargePant, 'extraLarge');

            // pants[index.pantValue].position.setX(0)
            // pants[index.pantValue].position.setY(0)
            // pants[index.pantValue].position.setZ(0)

            // pants[index.pantValue].scale.setX(0.0166)
            // pants[index.pantValue].scale.setY(0.0123)
            // pants[index.pantValue].scale.setZ(0.0253)

            scene.add(pants[index.pantValue])

            pantPositionX = gui.add(pants[index.pantValue].position, "x", -2, 2, 0.00001).name("pant x position")
            pantPositionY = gui.add(pants[index.pantValue].position, "y", -2, 2, 0.00001).name("pant y position")
            pantPositionZ = gui.add(pants[index.pantValue].position, "z", -2, 2, 0.00001).name("pant z position")

            pantScaleX = gui.add(pants[index.pantValue].scale, "x", -0.1, 0.1, 0.0001).name("pant x Cloth set")
            pantScaleY = gui.add(pants[index.value].scale, "y", -0.1, 0.1, 0.0001).name("pant y Cloth set")
            pantScaleZ = gui.add(pants[index.pantValue].scale, "z", -0.1, 0.1, 0.0001).name("pant z Cloth set")

        });



    }
)
console.log(index.value)

// gltfLoader.load(
//     '/models/male_body/scene.gltf',
//     (gltf) => {
//         var model = gltf.scene
//         model.scale.set(0.009, 0.0095, 0.005);
//         model.position.setX(0)
//         model.position.setZ(-0.07)
//         model.position.setY(0.05)
//         gui.add(model.position, "x", -0.1, 0.1, 0.0001).name("x position")
//         gui.add(model.position, "y", -0.1, 0.1, 0.0001).name("y position")
//         gui.add(model.position, "z", -0.1, 0.1, 0.0001).name("z position")

//         gui.add(model.scale, "x", -0.1, 0.1, 0.0001).name("x human width")
//         gui.add(model.scale, "y", -0.1, 0.1, 0.0001).name("y human Tallness")
//         gui.add(model.scale, "z", -0.1, 0.1, 0.0001).name("z human Fat")
//         var parameters = 0
//         gui.add(parameters, "xy", -0.1, 0.1, 0.0001).name("z human Fat")

//         scene.add(model);
//     }
// )

// load a resource
// resource URL
objLoader.setPath('/models/male_body/')
// objLoader.setPath("./../../../Downloads")
var umer = 'umer_result_b_256.obj';
var vishal = 'vishal_result_a_256.obj'
var hassan = 'hassan_result__img_256.obj'
objLoader.load(
    // called when resource is loaded
    vishal,
    function (obj) {
        obj.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material.color.set('gray')
            }
        })

        obj.position.x = 0
        obj.position.y = 1
        obj.position.z = -0.1587
        obj.scale.setZ(1)
        obj.scale.setY(1)
        obj.scale.setX(1)

        // gui.add(obj.position, "x", -2, 2, 0.0001).name("x-axis position")
        // gui.add(obj.position, "y", -2, 2, 0.0001).name("y-axis position")
        // gui.add(obj.position, "z", -2, 2, 0.0001).name("z-axis position")

        // gui.add(obj.scale, "x", -2, 2, 0.001).name("x human width")
        // gui.add(obj.scale, "y", -2, 2, 0.001).name("y human Tallness")
        // gui.add(obj.scale, "z", -2, 2, 0.001).name("z human Fat")
        scene.add(obj)

        // scene.add(object);

    },
    // called when loading is in progresses
    function (xhr) {

        console.log((xhr.loaded / xhr.total * 100) + '% loaded');

    },
    // called when loading has errors
    function (error) {

        console.log('An error happened', error);

    }
);
/**
 * Floo
 */
const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10, 10),
    new THREE.MeshStandardMaterial({
        color: '#444444',
        metalness: 0,
        roughness: 0.5
    })
)
floor.receiveShadow = true
floor.rotation.x = - Math.PI * 0.5
scene.add(floor)
// scene.add()

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.left = - 7
directionalLight.shadow.camera.top = 7
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = - 7
directionalLight.position.set(- 5, 5, 0)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(2, 2, 2)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.target.set(0, 0.75, 0)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Model animation
    if (mixer) {
        mixer.update(deltaTime)
    }

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()