import { createStore } from 'redux'
import reducers from '@/store/reducers'

export const store = createStore(reducers)
