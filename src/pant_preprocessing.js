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
        obj.position.setX(0)
        obj.position.setY(0)
        obj.position.setZ(0)

        obj.scale.setX(0.0166)
        obj.scale.setY(0.0123)
        obj.scale.setZ(0.0253)

        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: minecraft });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);

//

pantObjLoader.load(
    "pant.obj",
    function (obj) {
        // var model = obj.scene;
        obj.position.setX(0)
        obj.position.setY(0)
        obj.position.setZ(0)

        obj.scale.setX(0.0166)
        obj.scale.setY(0.0123)
        obj.scale.setZ(0.0253)

        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: check10 });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);

//

pantObjLoader.load(
    "pant.obj",
    function (obj) {
        // var model = obj.scene;
        obj.position.setX(0)
        obj.position.setY(0)
        obj.position.setZ(0)

        obj.scale.setX(0.0166)
        obj.scale.setY(0.0123)
        obj.scale.setZ(0.0253)

        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: check22 });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);

//

pantObjLoader.load(
    "pant.obj",
    function (obj) {
        // var model = obj.scene;
        obj.position.setX(0)
        obj.position.setY(0)
        obj.position.setZ(0)

        obj.scale.setX(0.0166)
        obj.scale.setY(0.0123)
        obj.scale.setZ(0.0253)

        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: alphaTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);

//

pantObjLoader.load(
    "pant.obj",
    function (obj) {
        // var model = obj.scene;
        obj.position.setX(0)
        obj.position.setY(0)
        obj.position.setZ(0)

        obj.scale.setX(0.0166)
        obj.scale.setY(0.0123)
        obj.scale.setZ(0.0253)

        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: heightTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);

//

pantObjLoader.load(
    "pant.obj",
    function (obj) {
        // var model = obj.scene;
        obj.position.setX(0)
        obj.position.setY(0)
        obj.position.setZ(0)

        obj.scale.setX(0.0166)
        obj.scale.setY(0.0123)
        obj.scale.setZ(0.0253)

        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: normalTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);

//

pantObjLoader.load(
    "pant.obj",
    function (obj) {
        // var model = obj.scene;
        obj.position.setX(0)
        obj.position.setY(0)
        obj.position.setZ(0)

        obj.scale.setX(0.0166)
        obj.scale.setY(0.0123)
        obj.scale.setZ(0.0253)

        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: ambientOcclusionTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);

//

pantObjLoader.load(
    "pant.obj",
    function (obj) {
        // var model = obj.scene;
        obj.position.setX(0)
        obj.position.setY(0)
        obj.position.setZ(0)

        obj.scale.setX(0.0166)
        obj.scale.setY(0.0123)
        obj.scale.setZ(0.0253)

        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: metalnessTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);

//

pantObjLoader.load(
    "pant.obj",
    function (obj) {
        // var model = obj.scene;
        obj.position.setX(0)
        obj.position.setY(0)
        obj.position.setZ(0)

        obj.scale.setX(0.0166)
        obj.scale.setY(0.0123)
        obj.scale.setZ(0.0253)

        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: roughnessTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);

//

pantObjLoader.load(
    "pant.obj",
    function (obj) {
        // var model = obj.scene;
        obj.position.setX(0)
        obj.position.setY(0)
        obj.position.setZ(0)

        obj.scale.setX(0.0166)
        obj.scale.setY(0.0123)
        obj.scale.setZ(0.0253)


        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: colorTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);

//
// 
pantObjLoader.load(
    "pant.obj",
    function (obj) {
        // var model = obj.scene;
        obj.position.setX(0)
        obj.position.setY(0)
        obj.position.setZ(0)

        obj.scale.setX(0.0166)
        obj.scale.setY(0.0123)
        obj.scale.setZ(0.0253)


        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: skinTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);
// Shorts
pantObjLoader.load(
    "pant.obj",
    function (obj) {
        // var model = obj.scene;
        obj.position.setX(0)
        obj.position.setY(0.50635)
        obj.position.setZ(0)

        obj.scale.setX(0.0166)
        obj.scale.setY(0.006)
        obj.scale.setZ(0.0253)

        // obj.scale.setZ()
        // obj.scale.setY(0.01)
        // obj.scale.setX(0.01)
        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: minecraft });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);
pantObjLoader.load(
    "pant.obj",
    function (obj) {
        // var model = obj.scene;
        obj.position.setX(0)
        obj.position.setY(0.50635)
        obj.position.setZ(0)

        obj.scale.setX(0.0166)
        obj.scale.setY(0.006)
        obj.scale.setZ(0.0253)

        // obj.scale.setZ()
        // obj.scale.setY(0.01)
        // obj.scale.setX(0.01)
        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: metalnessTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);
pantObjLoader.load(
    "pant.obj",
    function (obj) {
        // var model = obj.scene;
        obj.position.setX(0)
        obj.position.setY(0.50635)
        obj.position.setZ(0)

        obj.scale.setX(0.0166)
        obj.scale.setY(0.006)
        obj.scale.setZ(0.0253)

        // obj.scale.setZ()
        // obj.scale.setY(0.01)
        // obj.scale.setX(0.01)
        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: check10 });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);
pantObjLoader.load(
    "pant.obj",
    function (obj) {
        // var model = obj.scene;
        obj.position.setX(0)
        obj.position.setY(0.50635)
        obj.position.setZ(0)

        obj.scale.setX(0.0166)
        obj.scale.setY(0.006)
        obj.scale.setZ(0.0253)

        // obj.scale.setZ()
        // obj.scale.setY(0.01)
        // obj.scale.setX(0.01)
        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: ambientOcclusionTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);
pantObjLoader.load(
    "pant.obj",
    function (obj) {
        // var model = obj.scene;
        obj.position.setX(0)
        obj.position.setY(0.50635)
        obj.position.setZ(0)

        obj.scale.setX(0.0166)
        obj.scale.setY(0.006)
        obj.scale.setZ(0.0253)

        // obj.scale.setZ()
        // obj.scale.setY(0.01)
        // obj.scale.setX(0.01)
        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: heightTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);
pantObjLoader.load(
    "pant.obj",
    function (obj) {
        // var model = obj.scene;
        obj.position.setX(0)
        obj.position.setY(0.50635)
        obj.position.setZ(0)

        obj.scale.setX(0.0166)
        obj.scale.setY(0.006)
        obj.scale.setZ(0.0253)

        // obj.scale.setZ()
        // obj.scale.setY(0.01)
        // obj.scale.setX(0.01)
        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: check22 });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);
pantObjLoader.load(
    "pant.obj",
    function (obj) {
        // var model = obj.scene;
        obj.position.setX(0)
        obj.position.setY(0.50635)
        obj.position.setZ(0)

        obj.scale.setX(0.0166)
        obj.scale.setY(0.006)
        obj.scale.setZ(0.0253)

        // obj.scale.setZ()
        // obj.scale.setY(0.01)
        // obj.scale.setX(0.01)
        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: normalTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);
pantObjLoader.load(
    "pant.obj",
    function (obj) {
        // var model = obj.scene;
        obj.position.setX(0)
        obj.position.setY(0.50635)
        obj.position.setZ(0)

        obj.scale.setX(0.0166)
        obj.scale.setY(0.006)
        obj.scale.setZ(0.0253)

        // obj.scale.setZ()
        // obj.scale.setY(0.01)
        // obj.scale.setX(0.01)
        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: alphaTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);
pantObjLoader.load(
    "pant.obj",
    function (obj) {
        // var model = obj.scene;
        obj.position.setX(0)
        obj.position.setY(0.50635)
        obj.position.setZ(0)

        obj.scale.setX(0.0166)
        obj.scale.setY(0.006)
        obj.scale.setZ(0.0253)

        // obj.scale.setZ()
        // obj.scale.setY(0.01)
        // obj.scale.setX(0.01)
        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: colorTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);
pantObjLoader.load(
    "pant.obj",
    function (obj) {
        // var model = obj.scene;
        obj.position.setX(0)
        obj.position.setY(0.50635)
        obj.position.setZ(0)

        obj.scale.setX(0.0166)
        obj.scale.setY(0.006)
        obj.scale.setZ(0.0253)


        // obj.scale.setZ()
        // obj.scale.setY(0.01)
        // obj.scale.setX(0.01)
        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: roughnessTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);
pantObjLoader.load(
    "pant.obj",
    function (obj) {
        // var model = obj.scene;
        obj.position.setX(0)
        obj.position.setY(0.50635)
        obj.position.setZ(0)

        obj.scale.setX(0.0166)
        obj.scale.setY(0.006)
        obj.scale.setZ(0.0253)

        // obj.scale.setZ()
        // obj.scale.setY(0.01)
        // obj.scale.setX(0.01)
        obj.traverse(function (child) {   // aka setTexture
            if (child instanceof THREE.Mesh) {
                const Pmaterial = new THREE.MeshBasicMaterial({ map: skinTexture });
                child.material = Pmaterial;
                //         // child.material.color.set('gray')
            }
        });

        pants.push(obj)
    }
);


export {
    pants
}