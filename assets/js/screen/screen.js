// screen docs http://gitlab.benyazi.ru:7777/spiceup/spiceup-core/wikis/widget-screen
import Vue from 'vue';
import Vuex from 'vuex';
import Echo from "laravel-echo";
Vue.use(Vuex);

// import global data
import state from './state';
import mutations from './mutations';
import actions from './actions';
import listeners from './listeners';

// import component and create component docs
// http://gitlab.benyazi.ru:7777/spiceup/spiceup-core/wikis/import-components-and-create-new-component
// header panel with timer and score
importComponent('head-panel');
// substitution
importComponent('substitution');
// substitution
importComponent('teams');

// store initialization
const store = new Vuex.Store({
	state: $.extend(true, {}, state, window.state),
	mutations,
	actions
});

// Pusher initialization
const echo = new Echo({
	broadcaster: 'pusher',
	key: '400169720b859c709ef4',
	cluster: 'eu'
});

// Vue initialization
window.vm = new Vue({
	el: '#app',
	store,
	computed: {
		isHide () {
			return this.$store.state.screenHide;
		}
	},
	created () {
		const channel = echo.channel('screen.' + window.screen.public_id);
		listeners.forEach(listener => {
			if (typeof listener === 'function') {
				listener(this, channel);
			}
		});
	}
});

// import component
function importComponent (name) {
	if (!name || typeof name !== 'string') {
		throw new TypeError('incorrect data type in import component ' + name);
	}
	let CamelCaseName = kebabCaseToPascalCase(name);
	Vue.component(name, require('./widgets/' + CamelCaseName + '/' + CamelCaseName + '.vue'));
	addComponentDataToGlobal(require('./widgets/' + CamelCaseName + '/' + CamelCaseName).default);
}

// add component data for global data
function addComponentDataToGlobal (component) {
	for (let data in component) {
		if (!component.hasOwnProperty(data)) continue;
		switch (data) {
			case 'listeners': listeners.push(component.listeners); break;
			case 'state': $.extend(true, state, component.state); break;
			case 'mutations': Object.assign(mutations, component.mutations); break;
			case 'actions': Object.assign(actions, component.actions); break;
			default: throw new SyntaxError('incorrect data type in component ' + data);
		}
	}
}

// kebab-case to PascalCase
function kebabCaseToPascalCase (name) {
	return name.slice(0, 1).toUpperCase() + name.slice(1).replace(/-([a-z])/g, i => {
		return i[1].toUpperCase();
	});
}

