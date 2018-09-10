
const letters = 'CDEFGAB';

class Octave {

	constructor(level, a) {
		this.level = `${level}`;
		for (let i=0, j=0; i<letters.length; i++, j++) {
			const letter = letters[i];
			this[`${letter}${this.level}`] = a * Math.pow(2, (j - 9) / 12);
			if (!/[BE]/i.test(letter)) {
				this[`${letter}#${this.level}`] = a * Math.pow(2, (++j - 9) / 12);
			}
		}
	}

	toString() {
		console.log(`Level: ${this.level}\n`);
		for (const p of Object.keys(this)) {
			if (typeof this[p] === 'number')
				console.log(`  ${p} = ${this[p]}`);
		}
		console.log('');
	}
}

///////////////////////

const A4 = 440;
const scale = [];

for (let i = -4; i <= 4; i++) {
	let a = A4 * Math.pow(2, i);
	let octave = new Octave(i, a);
	scale.push(octave);
}

console.log('\nMUSICAL NOTES\n');

for (const oct of scale) {
	oct.toString();
}
