export default {
	state: {
		goals: {
			isHide: false,
			home: 0,
			away: 0,
			whoScored: '',
			whenScored: ''
		},
	},
	listeners (vm, channel) {
		channel
			.listen('.App.Events.Widgets.Score.ShowEvent', () => vm.$store.commit('SCORE_SHOW'))
			.listen('.App.Events.Widgets.Score.HideEvent', () => vm.$store.commit('SCORE_HIDE'))
			.listen('.App.Events.Widgets.Score.UpdateEvent', e => vm.$store.commit('GOALS_ADD', e.data));
	},
	mutations: {
		SCORE_SHOW (state) {
			state.goals.isHide = false;
		},
		SCORE_HIDE (state) {
			state.goals.isHide = true;
		},
		GOALS_ADD (state, data) {
			if (!data || typeof data !== 'object') console.log('Data error in Score widget, goals add');
			for (let item in data) {
				if (!data.hasOwnProperty(item)) continue;
				switch (item) {
					case 'isHide': state.goals.isHide = data.isHide; break;
					case 'score': state.goals[data.team] = data.score; break;
					case 'whoScored': state.goals.whoScored = data.whoScored; break;
					case 'whenScored': state.goals.whenScored = data.whenScored; break;
					default: console.log('Unexpected data in Substitution widget, goals add: ' + item);
				}
			}
		},
	}
}
