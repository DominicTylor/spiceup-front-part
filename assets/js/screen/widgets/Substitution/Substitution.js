export default {
	state: {
		substitution: {
			teamName: 'home',
			playerIn: 1,
			playerOut: 2,
			isHide: true,
			autoHideTime: 10000
		}
	},
	listeners (vm, channel) {
		channel
			.listen('.App.Events.Widgets.Substitution.ShowEvent', e => vm.$store.commit('SUBSTITUTION_SHOW', e.data))
			.listen('.App.Events.Widgets.Substitution.HideEvent', () => vm.$store.commit('SUBSTITUTION_HIDE'))
			.listen('.App.Events.Widgets.Substitution.SetAutoEvent', e => vm.$store.commit('SUBSTITUTION_SET_AUTO', e.data));
	},
	mutations: {
		SUBSTITUTION_SHOW (state, data) {
			if (!data || typeof data !== 'object') console.log('Data error in Substitution widget, show');
			for (let item in data) {
				switch (item) {
					case 'teamName': state.substitution.teamName = data.teamName; break;
					case 'playerIn': state.substitution.playerIn = data.playerIn; break;
					case 'playerOut': state.substitution.playerOut = data.playerOut; break;
					default: console.log('Unexpected data in Substitution widget, show: ' + item);
				}
			}
			state.substitution.isHide = false;
		},
		SUBSTITUTION_HIDE (state) {
			state.substitution.teamName = 'home';
			state.substitution.playerIn = 1;
			state.substitution.playerOut = 2;
			state.substitution.isHide = true;
		},
		SUBSTITUTION_SET_AUTO (state, data) {
			if (!data || typeof data !== 'object') console.log('Data error in Substitution widget, set auto');
			for (let item in data) {
				if (!data.hasOwnProperty(item)) continue;
				switch (item) {
					case 'autoHideTime': state.substitution.autoHideTime = data.autoHideTime; break;
					default: console.log('Unexpected data in Substitution widget, set auto: ' + item);
				}
			}
		}
	}
}
