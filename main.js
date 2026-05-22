// ─────────────────────────────────────────────────────────────────────────────
// EDIT: Links configuration
// ─────────────────────────────────────────────────────────────────────────────
const LINKS = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jeswin-thomas-298719187/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136
        1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85
        3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065
        2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771
        C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227
        24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>`,
  },
  {
    label: 'Behance',
    url: 'https://www.behance.net/jeswinthomas',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564
        -5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095
        2.14H15.97c.13 1.202.penso763 1.193 1.957 1.193 1.12 0 1.788-.574 2.1-1.164h3.699zm-7.506
        -3h3.78c-.063-1.14-.571-1.842-1.82-1.842-1.143 0-1.81.694-1.96 1.842zM7.496 16.925c1.485
        0 2.37-.617 2.37-1.732 0-1.166-.878-1.71-2.37-1.71H4.828v3.442h2.668zm-.195-5.44c1.267 0
        2.07-.555 2.07-1.57 0-.976-.784-1.496-2.07-1.496H4.828v3.066h2.473zM0 5h8.57c2.828 0
        4.973 1.073 4.973 3.718 0 1.418-.756 2.508-2.04 3.136 1.686.539 2.717 1.76 2.717 3.56
        0 3.06-2.493 4.586-5.868 4.586H0V5z"/>
    </svg>`,
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/jeswin.design/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058
        1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919
        4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699
        -4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227
        1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014
        7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072
        4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014
        4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948
        0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014
        15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12
        16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44
        0 0 0 0-2.881z"/>
    </svg>`,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// EDIT: Model
// ─────────────────────────────────────────────────────────────────────────────
const MODEL_PATH = 'assets/avatar.fbx';

// ─────────────────────────────────────────────────────────────────────────────
// EDIT: Vertical position of the model in world space.
// Negative = move DOWN (feet toward the bottom of the viewport).
// Adjust this single value to fine-tune where the figure sits.
// ─────────────────────────────────────────────────────────────────────────────
const MODEL_Y_OFFSET = -0.9;

// ─────────────────────────────────────────────────────────────────────────────
// EDIT: Bob animation (no rotation)
// ─────────────────────────────────────────────────────────────────────────────
const BOB_SPEED     = 0.45;  // Hz
const BOB_AMPLITUDE = 0.06;  // world units

// ─────────────────────────────────────────────────────────────────────────────
// EDIT: Toon shading bands
// ─────────────────────────────────────────────────────────────────────────────
const TOON_STEPS = 3;

// ─────────────────────────────────────────────────────────────────────────────
// EDIT: Inverted-hull outline
// outlineWidth is in clip space — try 0.005 to 0.010.
// Larger = thicker outline. Applied per SkinnedMesh so it follows the animation.
// ─────────────────────────────────────────────────────────────────────────────
const OUTLINE_WIDTH = 0.007;
const DRAG_SPEED    = 0.007; // radians per pixel of drag

// ─────────────────────────────────────────────────────────────────────────────
// EDIT: Camera — bottom-left composition
//
// KEY RULE: target.x should be to the RIGHT of the model (model is at x ≈ -0.5)
// so that the model appears in the left portion of the frame.
// Camera low + target.y high = upward tilt = feet near the bottom edge.
//
// pos   = [x, y, z]  (camera world position)
// target = [x, y, z]  (world point the camera looks at)
// ─────────────────────────────────────────────────────────────────────────────
const CAM_DESKTOP = { pos: [ 0.5,  0.8, 4.5 ], target: [ 0.3, 1.5, 0 ] };
const CAM_MOBILE  = { pos: [ 0.1,  0.8, 4.5 ], target: [ 0.0, 1.5, 0 ] };

// ─────────────────────────────────────────────────────────────────────────────
// Inverted-hull outline shaders
// Uses BackSide rendering + screen-space normal expansion with skinning.
// The outline follows the Mixamo animation because it is a SkinnedMesh sharing
// the same geometry and skeleton as the original mesh.
// ─────────────────────────────────────────────────────────────────────────────
const OUTLINE_VERT = /* glsl */`
  #include <common>
  #include <skinning_pars_vertex>

  uniform float outlineWidth;

  void main() {
    #include <skinbase_vertex>
    #include <beginnormal_vertex>
    #include <skinnormal_vertex>
    #include <begin_vertex>
    #include <skinning_vertex>

    // Transform skinned position to view space
    vec4 mvPos   = modelViewMatrix * vec4( transformed, 1.0 );

    // objectNormal is now the skinned normal; transform to view space
    vec3 viewNorm = normalize( normalMatrix * objectNormal );

    // Project to clip space, then expand along the screen-projected normal
    // Multiplying by clip.w keeps thickness constant in pixels (perspective)
    vec4 clip  = projectionMatrix * mvPos;
    vec2 ofs   = normalize( ( projectionMatrix * vec4( viewNorm, 0.0 ) ).xy );
    clip.xy   += ofs * outlineWidth * clip.w;

    gl_Position = clip;
  }
`;

const OUTLINE_FRAG = /* glsl */`
  void main() {
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 ); // solid black
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
import * as THREE from 'three';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

// ── Nav buttons ───────────────────────────────────────────────────────────────
const nav = document.querySelector('.link-nav');
LINKS.forEach(({ label, url, icon }) => {
  const a = document.createElement('a');
  a.className = 'link-btn';
  a.href      = url;
  a.target    = '_blank';
  a.rel       = 'noopener noreferrer';
  a.innerHTML = (icon || '') + `<span>${label}</span>`;
  nav.appendChild(a);
});

// ── Renderer ──────────────────────────────────────────────────────────────────
const canvas   = document.getElementById('bg-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio( Math.min( window.devicePixelRatio, 2 ) );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.outputColorSpace = THREE.SRGBColorSpace;

// ── Scene ─────────────────────────────────────────────────────────────────────
const scene = new THREE.Scene();
// EDIT: background — keep in sync with --cobalt in style.css
scene.background = new THREE.Color( 0x0047AB );
scene.fog = new THREE.FogExp2( 0x0047AB, 0.045 );

// ── Camera ────────────────────────────────────────────────────────────────────
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.05,
  100
);

function applyCamera() {
  const cfg = window.innerWidth <= 680 ? CAM_MOBILE : CAM_DESKTOP;
  camera.position.set( ...cfg.pos );
  camera.lookAt( new THREE.Vector3( ...cfg.target ) );
}
applyCamera();

// ── Lighting ──────────────────────────────────────────────────────────────────
const ambient = new THREE.AmbientLight( 0xffffff, 0.75 );
scene.add( ambient );

const keyLight = new THREE.DirectionalLight( 0xffffff, 2.4 );
keyLight.position.set( -2, 5, 3 );
scene.add( keyLight );

const rimLight = new THREE.DirectionalLight( 0xffffff, 0.4 );
rimLight.position.set( 4, 3, -2 );
scene.add( rimLight );

// ── Toon gradient map ─────────────────────────────────────────────────────────
function makeToonGradient( steps ) {
  const data = new Uint8Array( steps );
  for ( let i = 0; i < steps; i++ ) {
    data[ i ] = Math.round( ( ( i + 0.5 ) / steps ) * 255 );
  }
  const tex = new THREE.DataTexture( data, steps, 1, THREE.RedFormat );
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  tex.needsUpdate = true;
  return tex;
}
const gradientMap = makeToonGradient( TOON_STEPS );

// ── Inverted-hull outline helper ──────────────────────────────────────────────
// Creates a SkinnedMesh that shares the original geometry and skeleton.
// BackSide rendering + screen-space normal expansion = black outline that
// follows the Mixamo animation exactly.
function addOutline( skinnedMesh ) {
  const mat = new THREE.ShaderMaterial({
    vertexShader:   OUTLINE_VERT,
    fragmentShader: OUTLINE_FRAG,
    uniforms: { outlineWidth: { value: OUTLINE_WIDTH } },
    side: THREE.BackSide,
  });

  const outline = new THREE.SkinnedMesh( skinnedMesh.geometry, mat );
  outline.skeleton          = skinnedMesh.skeleton;
  outline.bindMatrix        .copy( skinnedMesh.bindMatrix );
  outline.bindMatrixInverse .copy( skinnedMesh.bindMatrixInverse );
  outline.bindMode          = skinnedMesh.bindMode;

  // Must be a sibling (same parent) so its matrix inherits from the same transform
  skinnedMesh.parent.add( outline );
}

// ── Avatar state ──────────────────────────────────────────────────────────────
let mixer      = null;
let avatarRoot = null;
let avatarBaseY = 0;

// ── FBX Loader ────────────────────────────────────────────────────────────────
// ════════════════════════════════════════════════════════════════════════════
// MODEL SWAP POINT
// Change MODEL_PATH at the top to point to a different file.
// For .glb: swap FBXLoader for GLTFLoader, change callback to
//   (gltf) => { const fbx = gltf.scene; ... }
// ════════════════════════════════════════════════════════════════════════════
const loader = new FBXLoader();
loader.load(
  MODEL_PATH,
  ( fbx ) => {
    // -- Normalise to a fixed world height
    const box    = new THREE.Box3().setFromObject( fbx );
    const size   = box.getSize( new THREE.Vector3() );
    const targetH = 2.5; // EDIT: world-unit height of character
    fbx.scale.setScalar( targetH / size.y );

    // -- Re-centre: feet at y = 0, centred on x / z
    box.setFromObject( fbx );
    const centre = box.getCenter( new THREE.Vector3() );
    fbx.position.set( -centre.x, -box.min.y, -centre.z );

    // -- Shift model to the LEFT in world space so it hugs the left side of screen
    // Target.x in CAM_DESKTOP is to the RIGHT of this offset, which pushes
    // the model into the left ~40-45% of the viewport.
    fbx.position.x -= 0.5; // EDIT: negative = further left

    // -- Apply vertical offset (feet near bottom edge); tune MODEL_Y_OFFSET above
    fbx.position.y += MODEL_Y_OFFSET;

    // -- Save resting Y for the bob animation (includes the offset)
    avatarBaseY = fbx.position.y;

    // -- Apply MeshToonMaterial; preserve any texture maps from the FBX
    fbx.traverse( ( child ) => {
      if ( !child.isMesh && !child.isSkinnedMesh ) return;

      const mats = Array.isArray( child.material ) ? child.material : [ child.material ];
      child.material = mats.map( ( m ) =>
        new THREE.MeshToonMaterial({
          map:         m?.map   ?? null,
          color:       new THREE.Color( 0xffffff ),
          gradientMap,
        })
      );
      if ( child.material.length === 1 ) child.material = child.material[ 0 ];
      child.castShadow = true;
    } );

    // -- Add inverted-hull outline to every SkinnedMesh
    // Done AFTER material replacement so outlines render on top of toon shading
    fbx.traverse( ( child ) => {
      if ( child.isSkinnedMesh ) addOutline( child );
    } );

    scene.add( fbx );
    avatarRoot = fbx;

    // -- Wire up Mixamo animation
    if ( fbx.animations?.length > 0 ) {
      mixer = new THREE.AnimationMixer( fbx );
      mixer.clipAction( fbx.animations[ 0 ] ).play();
    }
  },
  ( xhr ) => {
    if ( xhr.lengthComputable ) {
      console.log( `FBX: ${ Math.round( ( xhr.loaded / xhr.total ) * 100 ) }%` );
    }
  },
  ( err ) => console.error( 'FBX load error:', err )
);

// ── Resize ────────────────────────────────────────────────────────────────────
function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setPixelRatio( Math.min( window.devicePixelRatio, 2 ) );
  applyCamera();
}
window.addEventListener( 'resize', onResize );

// ── Swipe / drag to rotate ────────────────────────────────────────────────────
let dragActive = false;
let dragLastX  = 0;

canvas.style.cursor = 'grab';

canvas.addEventListener( 'pointerdown', ( e ) => {
  dragActive = true;
  dragLastX  = e.clientX;
  canvas.style.cursor = 'grabbing';
  canvas.setPointerCapture( e.pointerId );
} );

canvas.addEventListener( 'pointermove', ( e ) => {
  if ( !dragActive || !avatarRoot ) return;
  avatarRoot.rotation.y += ( e.clientX - dragLastX ) * DRAG_SPEED;
  dragLastX = e.clientX;
} );

canvas.addEventListener( 'pointerup',     () => { dragActive = false; canvas.style.cursor = 'grab'; } );
canvas.addEventListener( 'pointercancel', () => { dragActive = false; canvas.style.cursor = 'grab'; } );

// ── Render loop ───────────────────────────────────────────────────────────────
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame( animate );
  const delta   = clock.getDelta();
  const elapsed = clock.getElapsedTime();

  if ( mixer ) mixer.update( delta );

  // Vertical float bob only -- no rotation
  if ( avatarRoot ) {
    avatarRoot.position.y =
      avatarBaseY + Math.sin( elapsed * BOB_SPEED * Math.PI * 2 ) * BOB_AMPLITUDE;
  }

  renderer.render( scene, camera );
}

animate();
