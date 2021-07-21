const main = document.getElementById("main");
const login = document.getElementById("user");
const password = document.getElementById("password");
const button = document.getElementById("loginBtn");

function validateForm() {
	if (login.value.length > 4 && password.value.length > 8) {
		button.className = "active";
	} else {
		button.className = "";
	}
}

function checkResponsivity() {
	if (window.innerWidth < 710) {
		main.className = "small";
	} else {
		main.className = "";
	}
}

window.onload = () => {
	checkResponsivity();
	window.addEventListener("resize", () => {
		checkResponsivity();
	});
};
