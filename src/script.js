import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { CurvePath, WireframeGeometry } from 'three'

/**
 * Base
 */
// Debug
const gui = new dat.GUI()
var index = {
    value: 0
}
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

var textures = []

//

/**
 * Textures
 */
const loadingManager = new THREE.LoadingManager()
loadingManager.onStart = () => {
    console.log('loadingManager: loading started')
}
loadingManager.onLoaded = () => {
    console.log('loadingManager: loading finished')
}
loadingManager.onProgress = () => {
    console.log('loadingManager: loading progressing')
}
loadingManager.onError = () => {
    console.log('loadingManager: loading error')
}

const textureLoader = new THREE.TextureLoader(loadingManager)

// const colorTexture = textureLoader.load('/textures/checkerboard-1024x1024.png')
// const colorTexture = textureLoader.load('/textures/checkerboard-2x2.png')
const minecraft = textureLoader.load('/textures/minecraft.png')
const check10 = textureLoader.load('/textures/checkerboard-1024x1024.png')
const check22 = textureLoader.load('/textures/checkerboard-8x8.png')
const alphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const heightTexture = textureLoader.load('/textures/door/height.jpg')
const normalTexture = textureLoader.load('/textures/door/normal.jpg')
const ambientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg')
const colorTexture = textureLoader.load('/textures/door/color.jpg')
const skinTexture = textureLoader.load('/textures/skin.jpg')

//  const vishalTexture = textureLoader.load(
//     minecraft
//  )

//  const colorTexture = textureLoader.load(
//     ambientOcclusionTexture,
//      () =>
//      {
//          console.log('textureLoader: loading finished')
//      },
//      () =>
//      {
//          console.log('textureLoader: loading progressing')
//      },
//      () =>
//      {
//          console.log('textureLoader: loading error')
//      }
//  )



// colorTexture.repeat.x = 2
//  colorTexture.repeat.y = 3
//  colorTexture.offset.x = 0.5
//colorTexture.offset.y =-1.5
//  colorTexture.rotation = Math.PI * 0.25
//  colorTexture.center.x = 0.5
//  colorTexture.center.y =100
minecraft.wrapS = THREE.MirroredRepeatWrapping
minecraft.wrapT = THREE.MirroredRepeatWrapping
minecraft.generateMipmaps = false
minecraft.minFilter = THREE.NearestFilter
minecraft.magFilter = THREE.NearestFilter

check10.wrapS = THREE.MirroredRepeatWrapping
check10.wrapT = THREE.MirroredRepeatWrapping
check10.generateMipmaps = false
check10.minFilter = THREE.NearestFilter
check10.magFilter = THREE.NearestFilter

check22.wrapS = THREE.MirroredRepeatWrapping
check22.wrapT = THREE.MirroredRepeatWrapping
check22.generateMipmaps = false
check22.minFilter = THREE.NearestFilter
check22.magFilter = THREE.NearestFilter

alphaTexture.wrapS = THREE.MirroredRepeatWrapping
alphaTexture.wrapT = THREE.MirroredRepeatWrapping
alphaTexture.generateMipmaps = false
alphaTexture.minFilter = THREE.NearestFilter
alphaTexture.magFilter = THREE.NearestFilter

heightTexture.wrapS = THREE.MirroredRepeatWrapping
heightTexture.wrapT = THREE.MirroredRepeatWrapping
heightTexture.generateMipmaps = false
heightTexture.minFilter = THREE.NearestFilter
heightTexture.magFilter = THREE.NearestFilter

normalTexture.wrapS = THREE.MirroredRepeatWrapping
normalTexture.wrapT = THREE.MirroredRepeatWrapping
normalTexture.generateMipmaps = false
normalTexture.minFilter = THREE.NearestFilter
normalTexture.magFilter = THREE.NearestFilter

ambientOcclusionTexture.wrapS = THREE.MirroredRepeatWrapping
ambientOcclusionTexture.wrapT = THREE.MirroredRepeatWrapping
ambientOcclusionTexture.generateMipmaps = false
ambientOcclusionTexture.minFilter = THREE.NearestFilter
ambientOcclusionTexture.magFilter = THREE.NearestFilter

metalnessTexture.wrapT = THREE.MirroredRepeatWrapping
metalnessTexture.wrapT = THREE.MirroredRepeatWrapping
metalnessTexture.generateMipmaps = false
metalnessTexture.minFilter = THREE.NearestFilter
metalnessTexture.magFilter = THREE.NearestFilter

colorTexture.wrapT = THREE.MirroredRepeatWrapping
colorTexture.wrapT = THREE.MirroredRepeatWrapping
colorTexture.generateMipmaps = false
colorTexture.minFilter = THREE.NearestFilter
colorTexture.magFilter = THREE.NearestFilter


roughnessTexture.wrapT = THREE.MirroredRepeatWrapping
roughnessTexture.wrapT = THREE.MirroredRepeatWrapping
roughnessTexture.generateMipmaps = false
roughnessTexture.minFilter = THREE.NearestFilter
roughnessTexture.magFilter = THREE.NearestFilter

skinTexture.wrapT = THREE.MirroredRepeatWrapping
skinTexture.wrapT = THREE.MirroredRepeatWrapping
skinTexture.generateMipmaps = false
skinTexture.minFilter = THREE.NearestFilter
skinTexture.magFilter = THREE.NearestFilter

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
var mesh;
let mixer = null
var clothes = []
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
                o.material.map = minecraft;
            }
        });
        clothes.push(model)

        // console.log(index.value)
        // console.log(model.scale.x);

        var FizzyText = function () {
            this.slider = 0;
            //this.slider2 = 0;
        };


        var text = new FizzyText()
        var slider = gui.add(text, 'slider', 0, 9, 1).listen();

        var positionX, positionY, positionZ;
        var scaleZ, scaleY, scaleX;

        scene.add(clothes[0])

        positionX = gui.add(clothes[0].position, "x", -2, 2, 0.0001).name("shirt x position")
        positionY = gui.add(clothes[0].position, "y", -2, 2, 0.0001).name("shirt y position")
        positionZ = gui.add(clothes[0].position, "z", -2, 2, 0.0001).name("shirt z position")

        scaleZ = gui.add(clothes[0].scale, "z", -2, 2, 0.0001).name("shirt z Cloth set")
        scaleY = gui.add(clothes[0].scale, "y", -2, 2, 0.0001).name("shirt y Cloth set")
        scaleX = gui.add(clothes[0].scale, "x", -2, 2, 0.0001).name("shirt x Cloth set")


        //var slider = gui.add(index,"value",0,1,1).name("cloth")
        slider.onChange(function (value) {
            scene.remove(clothes[index.value])

            index.value = value // this doesn't work

            positionX.remove()
            positionY.remove()
            positionZ.remove()
            scaleZ.remove()
            scaleY.remove()
            scaleX.remove()


            // gui.add(model.position, "x", -1, 1, 0.0001).name("x position")
            // gui.add(model.position, "y", -1, 1, 0.0001).name("y position")
            // gui.add(model.position, "z", -1, 1, 0.0001).name("z position")
            // gui.add(model.scale, "z", -2, 2, 0.0001).name("z Cloth set")

            // gui.add(model.scale, "x", -1, 1, 0.0001).name("x Cloth set")
            // gui.add(model.scale, "y", -1, 1, 0.0001).name("y Cloth set")

            scene.add(clothes[index.value])

            positionX = gui.add(clothes[index.value].position, "x", -2, 2, 0.0001).name("shirt x position")
            positionY = gui.add(clothes[index.value].position, "y", -2, 2, 0.0001).name("shirt y position")
            positionZ = gui.add(clothes[index.value].position, "z", -2, 2, 0.0001).name("shirt z position")

            scaleZ = gui.add(clothes[index.value].scale, "z", -2, 2, 0.0001).name("shirt z Cloth set")
            scaleY = gui.add(clothes[index.value].scale, "y", -2, 2, 0.0001).name("shirt y Cloth set")
            scaleX = gui.add(clothes[index.value].scale, "x", -2, 2, 0.0001).name("shirt x Cloth set")


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


// // instantiate a loader
// const loader = new OBJLoader();
var example = new THREE.Object3D();
// load a resource
// resource URL
objLoader.setPath('/models/male_body/')
// objLoader.setPath("./../../../Downloads")

objLoader.load(
    // 'scene1.obj', //Vishal's Model
    // 'hassan_model.obj', //Hassan's Model
    'result__img_256.obj',
    // called when resource is loaded
    function (obj) {
        obj.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material.color.set('gray')
            }
        })
        // var model = obj.scene;
        console.log("TO JSON", obj.toJSON(obj.scene));

        // obj.position.x -= 50;
        // example.scale.set(0.009, 0.0095, 0.005);
        // // model.scale.set(0.009, 0.0095, 0.005)
        // // model.scale.set(0.009, 0.0095, 0.005);
        obj.position.x = 0
        obj.position.y = 1
        obj.position.z = -0.1587
        obj.scale.y = 0.897
        gui.add(obj.position, "x", -2, 2, 0.0001).name("x-axis position")
        gui.add(obj.position, "y", -2, 2, 0.0001).name("y-axis position")
        gui.add(obj.position, "z", -2, 2, 0.0001).name("z-axis position")

        gui.add(obj.scale, "x", -2, 2, 0.001).name("x human width")
        gui.add(obj.scale, "y", -2, 2, 0.001).name("y human Tallness")
        gui.add(obj.scale, "z", -2, 2, 0.001).name("z human Fat")
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