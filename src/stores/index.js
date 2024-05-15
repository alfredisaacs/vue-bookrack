import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

// eslint-disable-next-line import/no-cycle
import actions from './actions';
import mutations from './mutations';
// import getters from './getters';
// import baseState from './states/base';
// import messagesState from './states/messages';
// import componentState from './states/components';
import session from './states/session';
// import rentalState from './states/rentals';

const sessionManagement = createPersistedState({
  paths: ['session', 'user'],
});

export default createStore({
  plugins: [sessionManagement],
  state: {
    ...session,
  },
  actions,
  mutations,
});