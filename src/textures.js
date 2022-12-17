import * as THREE from 'three'

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


export {
    minecraft,
    check10,
    check22,
    alphaTexture,
    heightTexture,
    normalTexture,
    ambientOcclusionTexture,
    metalnessTexture,
    roughnessTexture,
    colorTexture,
    skinTexture
}