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
	const LoTR = new THREE.TextureLoader().load('./objects/172373.jpg')
    scene.background = LoTR;
	
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

	//Materials
	const sauron = new THREE.TextureLoader().load('./objects/sauron2.jpg')
	const ring = new THREE.TextureLoader().load('./objects/OneRing2.png')
	const mordor = new THREE.TextureLoader().load('./objects/mordor.png')
	const gendalf = new THREE.TextureLoader().load('./objects/gendalf.jpg')

	//TestBox
	const ge0 = new THREE.BoxGeometry(15, 15, 15);
	const me0 = new THREE.MeshStandardMaterial({
		map: gendalf,
	})

	const boxMe0 = new THREE.Mesh(ge0, me0);
	boxMe0.position.x = 29;
	boxMe0.position.y = -5;
	scene.add(boxMe0);


	//Sphere
	const ge1 = new THREE.SphereGeometry(15, 32, 16);
	const me1 = new THREE.MeshStandardMaterial({
		map: sauron,
	})

	const sphereMe1 = new THREE.Mesh(ge1, me1);
	sphereMe1.position.x = -9;
	sphereMe1.position.y = 5
	scene.add(sphereMe1);

	//Ring Torus
	const geometry = new THREE.TorusGeometry( 6.46, 1, 30, 200 );
	const material = new THREE.MeshStandardMaterial({		
		color: 0xFFD700,
		
	})
	const torus = new THREE.Mesh( geometry, material );
	torus.position.x = 30;
	torus.position.y = 10;
	scene.add( torus );

	//Cone
	const geometryCone = new THREE.ConeGeometry( 27, 50, 26, 15, 2.26, 6.28 );
	const materialCone = new THREE.MeshStandardMaterial({
		map: mordor,
	})
	const cone = new THREE.Mesh( geometryCone, materialCone );
	cone.position.x = -9
	cone.position.y = -15
	scene.add( cone );




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
	var ambLightIntensity = 0.4;
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