const THREE = window.THREE || {};

export const sphereInit = function init() {
  const radius = 20;
  const scene = new THREE.Scene();
  let phase = 0;
  const container = document?.getElementById("canvas");

  const camera = new THREE.PerspectiveCamera(
    95,
    800/ 500,
    0.1,
    1000
  );
  camera.position.z = 30;

  const renderer = new THREE.WebGLRenderer({ alpha: true });

  renderer.setSize(800, 500);
  container.appendChild(renderer.domElement);

  const boxSize = 0.2;
  const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
  const materialGreen = new THREE.MeshBasicMaterial({
    transparent: false,
    color: 0xffaeae,
    opacity: 1,
    side: THREE.DoubleSide,
  });

  const pitchSegments = 50;
  const elevationSegments = pitchSegments / 2;
  const parentContainer = new THREE.Object3D();
  scene.add(parentContainer);

  for (let p = 0; p < pitchSegments; p++) {
    const pitch = (Math.PI * 2 * p) / pitchSegments;
    for (let e = 0; e < elevationSegments; e++) {
      const elevation = Math.PI * (e / elevationSegments - 0.5);
      const particle = new THREE.Mesh(geometry, materialGreen);

      parentContainer.add(particle);

      const dest = new THREE.Vector3();
      dest.z = Math.sin(pitch) * Math.cos(elevation) * radius;
      dest.x = Math.cos(pitch) * Math.cos(elevation) * radius;
      dest.y = Math.sin(elevation) * radius;
      particle.userData = {
        dests: [dest, particle.position],
        speed: new THREE.Vector3(),
      };
    }
  }

  window.addEventListener("resize", onWindowResize, false);

  function onWindowResize() {
    camera.aspect = 800 / 500;
    camera.updateProjectionMatrix();

    renderer.setSize(800, 500);
  }

  function render() {
    phase += 0.001;
    for (let i = 0, l = parentContainer.children.length; i < l; i++) {
      const particle = parentContainer.children[i];
      const dest = particle.userData.dests[
        Math.floor(phase) % particle.userData.dests.length
      ].clone();
      const diff = dest.sub(particle.position);
      particle.userData.speed.divideScalar(1.02);
      particle.userData.speed.add(diff.divideScalar(400));
      particle.position.add(particle.userData.speed);
      particle.lookAt(particle.position);
    }

    parentContainer.rotation.y = phase * 3;

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  render();
};
