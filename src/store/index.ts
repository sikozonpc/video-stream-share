import feedMock from '@/mock/feed'
import { FeedItem } from '@/views/feed/Feed.types'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export interface Store {
  feed: FeedItem[];
}

export default new Vuex.Store<Store>({
  state: {
    feed: feedMock
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
