export default {
	state: {
		timer: {
			isHide: false,
			startTime: '0',
			endTime: '2700',
			status: 'stop'
		}
	},
	listeners (vm, channel) {
		channel
			.listen('.App.Events.Widgets.Timer.ShowEvent', () => vm.$store.commit('TIMER_SHOW'))
			.listen('.App.Events.Widgets.Timer.HideEvent', () => vm.$store.commit('TIMER_HIDE'))
			.listen('.App.Events.Widgets.Timer.StartEvent', () => vm.$store.commit('TIMER_START'))
			.listen('.App.Events.Widgets.Timer.PauseEvent', () => vm.$store.commit('TIMER_PAUSE'))
			.listen('.App.Events.Widgets.Timer.StopEvent', () => vm.$store.commit('TIMER_STOP'))
			.listen('.App.Events.Widgets.Timer.SetDataEvent', e => vm.$store.commit('TIMER_SET_DATA', e.data));
	},
	mutations: {
		TIMER_SHOW (state) {
			state.timer.isHide = false;
		},
		TIMER_HIDE (state) {
			state.timer.isHide = true;
		},
		TIMER_START (state) {
			state.timer.status = 'start';
		},
		TIMER_PAUSE (state) {
			state.timer.status = 'pause';
		},
		TIMER_STOP (state) {
			state.timer.status = 'stop';
		},
		TIMER_SET_DATA (state, data) {
			if (!data || typeof data !== 'object') console.log('Data error in Timer widget, set data');
			for (let item in data) {
				if (!data.hasOwnProperty(item)) continue;
				switch (item) {
					case 'isHide': state.timer.isHide = data.isHide; break;
					case 'startTime': state.timer.startTime = data.startTime; break;
					case 'endTime': state.timer.endTime = data.endTime; break;
					case 'status': state.timer.status = data.status; break;
					default: console.log('Unexpected data in Timer widget, set data: ' + item);
				}
			}
		},
	}
}
