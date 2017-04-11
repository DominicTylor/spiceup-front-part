export default {
	state: {
		teamsWidget: {
			isHide: true,
		}
	},
	listeners (vm, channel) {
		channel
			.listen('.App.Events.Widgets.Teams.ShowEvent', () => vm.$store.commit('TEAMS_SHOW'))
			.listen('.App.Events.Widgets.Teams.HideEvent', () => vm.$store.commit('TEAMS_HIDE'))
			.listen('.App.Events.Widgets.Teams.SetData', e => vm.$store.commit('TEAMS_SET_DATA', e.data));
	},
	mutations: {
		TEAMS_SHOW (state) {
			state.teamsWidget.isHide = false;
		},
		TEAMS_HIDE (state) {
			state.teamsWidget.isHide = true;
		},
		TEAMS_SET_DATA (state, data) {
			if (!data || typeof data !== 'object' || !data.team) console.log('Data error in Teams widget, set data');
			for (let item in data) {
				if (item === 'team' || !data.hasOwnProperty(item)) continue;
				switch (item) {
					case 'fullName': state.teams[data.team].fullName = data.fullName; break;
					case 'shortName': state.teams[data.team].shortName = data.shortName; break;
					case 'colors': state.teams[data.team].colors = data.colors; break;
					case 'players': state.teams[data.team].players = data.players; break;
					default: console.log('Unexpected data in Teams widget, set auto: ' + item);
				}
			}
		},
	}
}
