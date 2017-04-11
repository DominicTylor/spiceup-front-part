import Score from '../Score/Score';
import Timer from '../Timer/Timer';

export default {
	state: $.extend(true, {
		headPanel: {
			isHide: false,
		}
	}, Score.state, Timer.state),
	listeners (vm, channel) {
		channel
			.listen('.App.Events.Widgets.HeadPanel.ShowEvent', () => vm.$store.commit('HEAD_PANEL_SHOW'))
			.listen('.App.Events.Widgets.HeadPanel.HideEvent', () => vm.$store.commit('HEAD_PANEL_HIDE'));
		Score.listeners(vm, channel);
		Timer.listeners(vm, channel);
	},
	mutations: Object.assign({
		HEAD_PANEL_SHOW (state) {
			state.headPanel.isHide = false;
		},
		HEAD_PANEL_HIDE (state) {
			state.headPanel.isHide = true;
		},
	}, Score.mutations, Timer.mutations)
}