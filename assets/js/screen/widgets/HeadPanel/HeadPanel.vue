<template>
	<div class="head-panel" :class="{hidden: isHide}">
		<score></score>
		<timer></timer>
	</div>
</template>

<script>
	import Timer from '../Timer/Timer.vue';
	import Score from '../Score/Score.vue';

	export default {
		components: {
			'timer': Timer,
			'score': Score
		},
		computed: {
			isHide () {
				return this.$store.state.headPanel.isHide;
			}
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss">
	.head-panel {
		position: fixed;
		top: 10px;
		left: 50%;
		transform: translateX(-50%);

		.timer {
			margin: 0 auto;
		}
	}
</style>