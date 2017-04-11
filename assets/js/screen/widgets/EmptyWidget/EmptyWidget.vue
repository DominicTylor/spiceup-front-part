<!-- add docs to widget here -->
<template>
	<div class="empty-widget" :class="{hidden: isHide}">

	</div>
</template>

<script>
	export default {
		computed: {
			isHide () {
				return this.$store.state.emptyWidget.isHide;
			}
		},
	}
</script>


<style lang="scss" rel="stylesheet/scss">
	@import "../../../../sass/screen/variables.scss";

	.empty-widget {

	}
</style>