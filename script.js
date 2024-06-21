const buttons = document.querySelectorAll( '.buttons' );
const out1 = document.querySelector( '.out1' )
const out2 = document.querySelector( '.out2' )

buttons.forEach( button => button.addEventListener( 'click', getPassword ) )
const symbolsForPassword = {
	letters: [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z'
	],
	numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
	symbols: ['!', '@', '#', '$', '%', '^', '&', '*'],
};

function getPassword( e ) {
	const t = e.target;
	const {
		letters,
		numbers,
		symbols
	} = symbolsForPassword
	let password = ''
	if ( t.classList.contains( 'easy-btn' ) ) {
		for ( let i = 0; i < 12; i++ ) {
			fillPassword( letters )
		}
	}

	if ( t.classList.contains( 'middle-btn' ) ) {
		for ( let i = 0; i < 12; i++ ) {
			const randomList = Math.floor( Math.random() * 2 );
			if ( randomList === 0 ) {
				fillPassword( letters )
			}
			if ( randomList === 1 ) {
				fillPassword( numbers )
			}
		}
	}
	if ( t.classList.contains( 'hard-btn' ) ) {
		for ( let i = 0; i < 12; i++ ) {
			const randomList = Math.floor( Math.random() * 3 );
			console.log( randomList )
			if ( randomList === 0 ) {
				fillPassword( letters )
			}
			if ( randomList === 1 ) {
				fillPassword( numbers )
			}
			if ( randomList === 2 ) {
				fillPassword( symbols )
			}
		}
	}

	showPassword( password );

	function getRandomValue( arrLength ) {
		return Math.floor( Math.random() * arrLength );
	}

	function fillPassword( arr ) {
		const random = getRandomValue( arr.length );
		if( arr === letters) {
			const upperOrNot = getRandomValue(2)
			if(upperOrNot === 1) {
				password += arr[random].toUpperCase()
			} else {
				password += arr[random].toLowerCase()
			}
			return
		}
		password += arr[random]
	}
}

function showPassword( password ) {
	const visiblePassword = password
	out1.textContent = visiblePassword;

	let hidePassword = ''
	for ( let i = 0; i < visiblePassword.length; i++ ) {
		hidePassword += '*'
	}
	out2.textContent = hidePassword;
}