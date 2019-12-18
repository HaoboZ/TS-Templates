import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


export default class Main extends THREE.Scene {
	
	// Basic perspective camera
	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight );
	// WebGL renderer with anti-aliasing
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	
	controls: OrbitControls;
	
	constructor() {
		super();
		
		this.renderer.setClearColor( '#000000' );
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( this.renderer.domElement );
		
		window.addEventListener( 'resize', () => {
			this.renderer.setSize( window.innerWidth, window.innerHeight );
			this.camera.aspect = window.innerWidth / window.innerHeight;
			this.camera.updateProjectionMatrix();
		} );
		
		this.create();
		
		this.renderer.setAnimationLoop( () => {
			this.update();
			this.renderer.render( this, this.camera );
		} );
	}
	
	create() {
		this.camera.position.set( 0, 0, 10 );
		
		this.controls = new OrbitControls( this.camera, this.renderer.domElement );
		this.controls.update();
		
		// this.add( new THREE.AxesHelper() );
		
		const loader = new THREE.FontLoader();
		loader.load( 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_regular.typeface.json', ( font ) => {
			const textGeometry = new THREE.TextGeometry( 'Hello World!', {
				      font,
				      size:          1,
				      height:        .2,
				      curveSegments: 12
			      } ),
			      textMaterial = new THREE.MeshBasicMaterial( { color: '#00ff00' } );
			
			const mesh = new THREE.Mesh( textGeometry, textMaterial );
			mesh.position.set( -4, -.5, 0 );
			
			const wireGeometry = new THREE.EdgesGeometry( mesh.geometry ),
			      wireMaterial = new THREE.LineBasicMaterial( { color: '#000000', linewidth: 1 } );
			
			const wireframe = new THREE.LineSegments( wireGeometry, wireMaterial );
			wireframe.position.copy( mesh.position );
			
			this.add( mesh, wireframe );
		} );
	}
	
	update() {
		this.controls.update();
	}
	
}
