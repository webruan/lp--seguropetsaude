document.addEventListener("DOMContentLoaded", function() {
	setTimeout(() => {
		const lists = document.querySelectorAll(".items-list");

		lists.forEach(function (list) {
			const liCount = list.querySelectorAll("li").length;

			if (liCount > 10) {
				const seeMoreButton = list.querySelector(".see-more");

				if (seeMoreButton) {
					seeMoreButton.classList.add("show-me");
					
					seeMoreButton.addEventListener("click", function () {
						if (seeMoreButton.textContent === 'Ver mais') {
							seeMoreButton.textContent = 'Ver menos';
						} else {
							seeMoreButton.textContent = 'Ver mais';
						}

						const liElements = list.querySelectorAll('li');
						liElements.forEach(function (li) {
							li.classList.toggle('show-list');
						});
					});
				}
			}
		})
	}, 3000);
});