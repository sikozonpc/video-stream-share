import feedMock from '@/mock/feed'
import { AppThemes } from '@/utils/dark-mode'
import { FeedItem } from '@/views/feed/Feed.types'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export interface Store {
  theme: AppThemes;
  feed: FeedItem[];
}

export default new Vuex.Store<Store>({
  state: {
    theme: AppThemes.LIGHT,
    feed: feedMock,
  },
  mutations: {
    setTheme(state, action) {
      state.theme = action;
    }
  },
  actions: {
  },
  modules: {
  }
})
