/*
 Three.js "tutorials by example"
 Author: Lee Stemkoski
 Date: July 2013 (three.js v59dev)
*/

// standard global variables
var container, scene, camera, renderer, controls, stats, particle;
var clock = new THREE.Clock();
// custom global variables
var shape;
var speed = 0.00002;
var ySpeed = 0.002;
var SCREEN_WIDTH = window.innerWidth,
  SCREEN_HEIGHT = window.innerHeight;
var radius = 20;

// FUNCTIONS
function init() {
  // SCENE
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  // CAMERA

  var VIEW_ANGLE = 40,
    ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT,
    NEAR = 0.1,
    FAR = 20000;

  var mousePos = { x: 0.5, y: 0.5 };
  var phase = 0;

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    95,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 30;

  container = document.getElementById("canvas");

  var renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(container.clientWidth - 150, container.clientHeight);
  renderer.setClearColor(0xffffff, 0.1);
  container.appendChild(renderer.domElement);

  var boxSize = 0.2;
  var geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
  var materialGreen = new THREE.MeshBasicMaterial({
    transparent: false,
    color: 0xffaeae,
    opacity: 1,
    side: THREE.DoubleSide,
  });

  var pitchSegments = 50;
  var elevationSegments = pitchSegments / 2;
  var particles = pitchSegments * elevationSegments;
  var side = Math.pow(particles, 1 / 3);

  var parentContainer = new THREE.Object3D();
  scene.add(parentContainer);

  //Plant the seeds, grow some trees in a grid!
  for (var p = 0; p < pitchSegments; p++) {
    var pitch = (Math.PI * 2 * p) / pitchSegments;
    for (var e = 0; e < elevationSegments; e++) {
      var elevation = Math.PI * (e / elevationSegments - 0.5);
      var particle = new THREE.Mesh(geometry, materialGreen);

      parentContainer.add(particle);

      var dest = new THREE.Vector3();
      dest.z = Math.sin(pitch) * Math.cos(elevation) * radius; //z pos in sphere
      dest.x = Math.cos(pitch) * Math.cos(elevation) * radius; //x pos in sphere
      dest.y = Math.sin(elevation) * radius; //y pos in sphere
      particle.userData = {
        dests: [dest, particle.position],
        speed: new THREE.Vector3(),
      };
    }
  }

  window.addEventListener("resize", onWindowResize, false);

  function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
  }

  function render() {
    phase += 0.001;
    for (var i = 0, l = parentContainer.children.length; i < l; i++) {
      var particle = parentContainer.children[i];
      var dest = particle.userData.dests[
        Math.floor(phase) % particle.userData.dests.length
      ].clone();
      var diff = dest.sub(particle.position);
      particle.userData.speed.divideScalar(1.02); // Some drag on the speed
      particle.userData.speed.add(diff.divideScalar(400)); // Modify speed by a fraction of the distance to the dest
      particle.position.add(particle.userData.speed);
      particle.lookAt(particle.position);
    }

    parentContainer.rotation.y = phase * 3;

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  render();
}

function detect_mobile() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}

if (!detect_mobile()) {
  document.addEventListener("DOMContentLoaded", init);
} else {
  radius = 15;
  $("meta[name=viewport]").remove();
  $("#canvas").css("left", "-20%");
  document.addEventListener("DOMContentLoaded", init);
}
