function component() {
	const element = document.createElement( 'div' );
	element.innerHTML = 'Hello World!';
	return element;
}

document.addEventListener( 'DOMContentLoaded', () => {
	const element = component();
	document.body.appendChild( element );
} );
