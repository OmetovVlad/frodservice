/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
import events from "events";

export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

/* Модальные окна */
export function modals(){
	const modalList = document.querySelectorAll('[data-modal]');

	const closeModalButtons = document.querySelectorAll('.modal .close');

	if (modalList) {
		modalList.forEach(function (item) {
			item.addEventListener("click", toggleModal);
			return true;
		});

		closeModalButtons.forEach(function (item) {
			item.addEventListener("click", closeModal);
			return true;
		});

		function toggleModal (e) {
			e.preventDefault();
			const modal = document.querySelector(this.getAttribute('data-modal'));

			if (modal) {
				modal.classList.add('open');
			}
		}

		function closeModal () {
			this.closest('div.modal').classList.remove('open');
		}
	}

}