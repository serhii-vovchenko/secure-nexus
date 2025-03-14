const openMenuBtn = document.querySelector('.header_burger_btn');
const mobileMenu = document.querySelector('.nav_block');

openMenuBtn.addEventListener('click', () => {
	if (mobileMenu.classList.contains('nav_block_active')) {
		mobileMenu.classList.remove('nav_block_active');
		openMenuBtn.classList.remove('active_burger_btn');
	} else {
		mobileMenu.classList.add('nav_block_active');
		openMenuBtn.classList.add('active_burger_btn');
	}
});
