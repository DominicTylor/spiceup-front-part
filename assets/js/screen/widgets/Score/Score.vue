<!-- docs http://gitlab.benyazi.ru:7777/spiceup/spiceup-core/wikis/widget-score -->
<template>
	<div class="score" :class="{hidden: isHide}">
		<div class="score__left-side">
			<div class="score__team-color" :style="{ backgroundColor: homeColor1 }"></div>
			<div class="score__team-name">
				{{homeShortName}}
			</div>
		</div>
		<div class="score__count">
			{{homeScore}} - {{awayScore}}
		</div>
		<div class="score__right-side">
			<div class="score__team-name">
				{{awayShortName}}
			</div>
			<div class="score__team-color" :style="{ backgroundColor: awayColor1 }"></div>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			homeColor1 () {
				return this.$store.state.teams.home.colors.first;
			},
			homeColor2 () {
				return this.$store.state.teams.home.colors.second;
			},
			homeShortName () {
				return this.$store.state.teams.home.shortName;
			},
			homeScore () {
				return this.$store.state.goals.home;
			},
			awayColor1 () {
				return this.$store.state.teams.away.colors.first;
			},
			awayColor2 () {
				return this.$store.state.teams.away.colors.second;
			},
			awayShortName () {
				return this.$store.state.teams.away.shortName;
			},
			awayScore () {
				return this.$store.state.goals.away;
			},
			isHide () {
				return this.$store.state.goals.isHide;
			}
		}
	}
</script>


<style lang="scss" rel="stylesheet/scss">
	@import "../../../../sass/screen/variables";

	.score {
		font-size: 0;
		position: relative;
		padding-bottom: 10px;
		margin-bottom: -10px;
		overflow: hidden;
		color: $black;

		&__left-side, &__count, &__right-side {
			float: left;
			text-align: center;
			padding: 5px 0;
			font-size: 20px;
			font-weight: bold;
		}

		&__count {
			width: 102px;
			color: $black;
			background-color: $secondary_color;
			-webkit-box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.75);
			-moz-box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.75);
			box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.75);
		}

		&__left-side, &__right-side {
			width: 108px;
			background-color: $primary_color;
		}

		&__left-side {
			padding-left: 8px;
		}

		&__right-side {
			padding-right: 8px;
		}

		&__team-color {
			position: absolute;
			top: 0;
			bottom: 10px;
			width: 6px;
		}

		&__left-side .score__team-color {
			background-color: cornflowerblue;
			left: 0;
		}

		&__right-side .score__team-color {
			background-color: coral;
			right: 0;
		}
	}
</style>

