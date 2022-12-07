// Window size
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

// Camera properties
const FOV = 90;
const ASPECT = WIDTH/HEIGHT;
const NEAR = 0.1;
const FAR = 1000;

// Shadows smoothing
const LIGHT_SMOOTHING = 20000;

const SOURCE = "https://hippoflex.github.io/"

function main() {
	// Create scene
	var scene = new THREE.Scene();

	const backgroundMap = new THREE.TextureLoader().load('./objects/172373.jpg')
    scene.background = backgroundMap;

	//Materials
	const sauron = new THREE.TextureLoader().load('./objects/sauron.jpg')
	const gendalf = new THREE.TextureLoader().load('./objects/gendalf.jpg')
	const mordor = new THREE.TextureLoader().load('./objects/mordor.png')
	const ring = new THREE.TextureLoader().load('./objects/ring.png')
	
	// Create camera
	var camera = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR);
	camera.position.z = -5;

	// Create renderer
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled = true;
    document.body.appendChild(renderer.domElement);

    // Create OrbitControls
	const controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.update();

	//Sphere
	const geometrySphere = new THREE.SphereGeometry( 15, 64, 32 );
	const materialSphere = new THREE.MeshStandardMaterial( { map: sauron } );
	const sphere = new THREE.Mesh( geometrySphere, materialSphere );
	sphere.position.x = -10;
	sphere.position.y = 30;
	scene.add( sphere );

	//Torus
	const geometryTorus = new THREE.TorusGeometry( 6, 1, 30, 200 );
	const materialTorus = new THREE.MeshStandardMaterial( { map: ring } );
	const torus = new THREE.Mesh( geometryTorus, materialTorus );
	torus.position.x = 25;
	torus.position.y = 30;
	scene.add( torus );

	//Cone
	const geometryCone = new THREE.ConeGeometry( 20, 50, 64, 64, 6.28, 6.28 );
	const materialCone = new THREE.MeshStandardMaterial( { map: mordor } );
	const cone = new THREE.Mesh( geometryCone, materialCone );
	cone.position.x = -10;
	cone.position.y = 10;
	scene.add( cone );

	//Box
	const geometryBox = new THREE.BoxGeometry( 15, 15, 15 );
	const materialBox = new THREE.MeshStandardMaterial( { map: gendalf } );
	const cube = new THREE.Mesh( geometryBox, materialBox );
	cube.position.x = 25;
	cube.position.y = 15;
	scene.add( cube );

	// The first outside light
	var pointLightIntensity = 1;
	var pointLightDistance = 50;
	var pointLight = new THREE.PointLight(0xffffff, pointLightIntensity, pointLightDistance);
	pointLight.position.set(4, 19, 26);
	pointLight.castShadow = true;
	pointLight.shadow.radius = LIGHT_SMOOTHING;
	scene.add(pointLight);

	// The second outside light
	var pointLightIntensity = 1;
	var pointLightDistance = 50;
	var pointLight = new THREE.PointLight(0xffffff, pointLightIntensity, pointLightDistance);
	pointLight.position.set(25, 19, 4);
	pointLight.castShadow = true;
	pointLight.shadow.radius = LIGHT_SMOOTHING;
	scene.add(pointLight);

	// Inside light
	var pointLightIntensity = 1;
	var pointLightDistance = 20;
	var pointLight = new THREE.PointLight(0xffffff, pointLightIntensity, pointLightDistance);
	pointLight.position.set(-10, 16, -10);
	pointLight.castShadow = true;
	pointLight.shadow.radius = LIGHT_SMOOTHING;
	scene.add(pointLight);

	// Ambient light
	var ambLightIntensity = 0.5;
	var ambLight = new THREE.AmbientLight( 0xffffff, ambLightIntensity);
	scene.add(ambLight);

	// Animation loop
	var animate = () => {
		requestAnimationFrame(animate);

		controls.update();

		renderer.render(scene, camera);
	}

	animate();
}

main();