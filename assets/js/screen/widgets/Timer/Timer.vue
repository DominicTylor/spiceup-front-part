<!-- docs http://gitlab.benyazi.ru:7777/spiceup/spiceup-core/wikis/widget-timer -->
<template>
	<div class="timer" :class="{hidden: isHide}">
		{{currentTime|secToMin}}
		<div class="timer__additional-time" v-if="additionalTime">
			+{{additionalTime|secToMin}}
		</div>
	</div>
</template>

<script>
	export default {
		created: function(){
			this.getTimerData();
			this.checkStatus(this.status);
		},
		computed: {
			status () {
				return this.$store.state.timer.status;
			},
			startTime () {
				return this.$store.state.timer.startTime;
			},
			endTime () {
				return this.$store.state.timer.endTime;
			},
			isHide () {
				return this.$store.state.timer.isHide;
			}
		},
		data: function () {
			return {
				currentTime: this.getTimerCurrentData(),
				additionalTime: this.getTimerAdditionalData(),
				timer: null,
			}
		},
		watch: {
			status (value) {
				this.checkStatus(value);
			},
			startTime () {
				this.getTimerData();
			},
			endTime () {
				this.getTimerData();
			}
		},
		filters: {
			secToMin: function (value) {
				if (!value) return '00:00';
				let minutes = addFirstZero(Math.floor(value / 60));
				let seconds = addFirstZero(value % 60);

				function addFirstZero(value) {
					return (value < 10 ? '0' + value : value);
				}

				return ( minutes + ':' + seconds );
			},
		},
		methods: {
			checkStatus (value) {
				switch (value) {
					case 'start':
						this.timerStart();
						break;
					case 'pause':
						this.timerPause();
						break;
					case 'stop':
						this.timerEnd();
						break;
				}
			},
			getTimerData () {
				this.currentTime = this.getTimerCurrentData();
				this.additionalTime = this.getTimerAdditionalData();
			},
			getTimerCurrentData () {
				return this.startTime > this.endTime ? this.endTime : this.startTime;
			},
			getTimerAdditionalData () {
				return this.startTime > this.endTime ? this.startTime - this.endTime : 0;
			},
			timerStart () {
				this.timer = setInterval(this.timerInterval.bind(this), 1000);
			},
			timerInterval () {
				if (this.currentTime < this.endTime) {
					this.currentTime += 1;
				} else {
					this.additionalTime += 1;
				}
			},
			timerPause () {
				clearInterval(this.timer);
			},
			timerEnd () {
				clearInterval(this.timer);
				this.currentTime = 0;
				this.additionalTime = 0;
			}
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss">
	.timer {
		@import "../../../../sass/screen/variables";

		position: relative;
		width: 102px;
		font-size: 20px;
		font-weight: bold;
		background-color: $white;
		color: $black;
		text-align: center;
		padding: 5px 2px;

		&__additional-time {
			position: absolute;
			left: 100%;
			top: 0;
			height: 100%;
			width: 82px;
			background-color: inherit;
			color: inherit;
			font-size: 20px;
			font-weight: bold;
			text-align: center;
			padding: 5px 2px;
			border: 1px solid $primary_color;
		}
	}
</style>