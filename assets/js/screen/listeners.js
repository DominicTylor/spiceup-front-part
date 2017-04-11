export default [
	function (vm, channel) {
		channel
			.listen('.App.Events.Screen.Show', () => vm.$store.commit('SCREEN_SHOW'))
			.listen('.App.Events.Screen.Hide', () => vm.$store.commit('SCREEN_HIDE'));
	}
]