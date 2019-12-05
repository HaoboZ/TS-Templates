function component() {
	const element = document.createElement( 'div' );
	element.innerHTML = 'Helo World!';
	return element;
}

document.addEventListener( 'DOMContentLoaded', () => {
	const element = component();
	document.body.appendChild( element );
} );
