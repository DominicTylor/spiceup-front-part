export default {
	state: {
		emptyWidget: {
			isHide: false,
		}
	},
	listeners (vm, channel) {
		channel
			.listen('.App.Events.Widgets.EmptyWidget.ShowEvent', () => vm.$store.commit('EMPTY_WIDGET_SHOW'))
			.listen('.App.Events.Widgets.EmptyWidget.HideEvent', () => vm.$store.commit('EMPTY_WIDGET_HIDE'));
	},
	mutations: {
		EMPTY_WIDGET_SHOW (state) {
			state.emptyWidget.isHide = false;
		},
		EMPTY_WIDGET_HIDE (state) {
			state.emptyWidget.isHide = true;
		},
	},
	actions: {

	}
}
