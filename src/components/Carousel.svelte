<script>
	let index = 0;

	const next = () => {
		index = (index + 1) % carouselImages.length;
	};

	const prev = () => {
		index = (index - 1 + carouselImages.length) % carouselImages.length;
	};
</script>
