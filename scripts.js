window.addEventListener("keydown", ev => {
	const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
	const key = document.querySelector(`.drumKey[data-key="${ev.keyCode}"]`);

	if (!audio) return;

	audio.currentTime = 0;

	audio.play();

	keyPressed(key);
});

function keyPressed(key) {
	key.classList.add("pressed");
}

function keyUnPressed(e) {
	if (e.propertyName !== "transform") return;
	this.classList.remove("pressed");
}

const keys = document.querySelectorAll(".drumKey");
keys.forEach(key => {
	key.addEventListener("transitionend", keyUnPressed);
	key.addEventListener("click", ev => {
		let dataKey = key.getAttribute("data-key");

		const audio = document.querySelector(`audio[data-key="${dataKey}"]`);

		key.classList.add("pressed");

		if (!audio) return;

		audio.currentTime = 0;

		audio.play();
	});
});
