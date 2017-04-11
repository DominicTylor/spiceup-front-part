<!-- add docs to widget here -->
<template>
	<div class="teams" :class="{hidden: isHide}">
		<div class="teams__row">
			<header class="teams__header">
				<div class="teams__color" :style="{backgroundColor: homeColorFirst}"></div>
				<h3 class="teams__name">{{homeName}}</h3>
			</header>
			<div class="teams__composition">
				<div class="teams__player" v-for="player in playersHome" :key="player.id">
					<div class="teams__player-img-wrapper">
						<img :src="player.photoUrl ? player.photoUrl : '/img/no-image.jpg'" :alt="player.name"  class="teams__player-img">
					</div>
					<div class="teams__player-name">{{player.name}}</div>
					<div class="teams__player-number">{{player.number}}</div>
				</div>
			</div>
		</div>
		<div class="teams__row">
			<header class="teams__header">
				<div class="teams__color" :style="{backgroundColor: awayColorFirst}"></div>
				<h3 class="teams__name">{{awayName}}</h3>
			</header>
			<div class="teams__composition">
				<div class="teams__player" v-for="player in playersAway" :key="player.id">
					<div class="teams__player-img-wrapper">
						<img :src="player.photoUrl ? player.photoUrl : '/img/no-image.jpg'" :alt="player.name"  class="teams__player-img">
					</div>
					<div class="teams__player-name">{{player.name}}</div>
					<div class="teams__player-number">{{player.number}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			isHide () {
				return this.$store.state.teamsWidget.isHide;
			},
			homeName () {
				return this.$store.state.teams.home.fullName;
			},
			awayName () {
				return this.$store.state.teams.away.fullName;
			},
			playersHome () {
				return this.$store.state.teams.home.players;
			},
			playersAway () {
				return this.$store.state.teams.away.players;
			},
			homeColorFirst () {
				return this.$store.state.teams.home.colors.first;
			},
			homeColorSecond () {
				return this.$store.state.teams.home.colors.second;
			},
			awayColorFirst () {
				return this.$store.state.teams.away.colors.first;
			},
			awayColorSecond () {
				return this.$store.state.teams.away.colors.second;
			}
		},
	}
</script>


<style lang="scss" rel="stylesheet/scss">
	@import "../../../../sass/screen/variables.scss";

	.teams {
		position: fixed;
		z-index: 2;
		top: 50%;
		margin: 0 auto;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		left: 0;
		right: 0;
		width: 70%;
		background: $white;
		overflow: hidden;
		&__row {
			float: left;
			width: 50%;
			&:first-child {
				border-right: 1px solid $secondary_color;
			}
		}
		&__header {
			overflow: hidden;
			background: $secondary_color;
			font-size: 0;
		}
		&__color {
			display: inline-block;
			vertical-align: middle;
			width: 10%;
			height: 40px;
		}
		&__name {
			font-size: 24px;
			padding: 0 10px;
			margin: 0;
			display: inline-block;
			vertical-align: middle;
			width: 90%;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
		&__player {
			overflow: hidden;
			font-size: 0;
		}
		&__player-img-wrapper {
			display: inline-block;
			vertical-align: middle;
			width: 15%;
		}
		&__player-img {
			max-width: 100%;
			height: 38px;
		}
		&__player-name {
			display: inline-block;
			vertical-align: middle;
			width: 75%;
			font-size: 14px;
		}
		&__player-number {
			display: inline-block;
			vertical-align: middle;
			width: 10%;
			font-size: 14px;
			text-align: center;
		}
	}
</style>