import * as types from './mutations-type'

export default {
    async getAllData({commit}, axios) {
        commit(types.REFRESH_AJAX, true)
        let self = await axios.get('/api/self')
        let friends = await axios.get('/api/friends')
        self = self.data.data
        friends = friends.data.data
        commit(types.RECEVIVE_DATA, {self, friends})
        commit(types.REFRESH_AJAX, false)
    },
    showChat({commit}, user) {
        commit(types.RECEVIVE_CURRENT_USE, user)
        commit(types.TOGGLE_CHAT, true)
    },
    async sendNewMsg({commit}, payload) {
        commit(types.ADD_MESSAGE, payload)
        let query = `?id=${payload.id}&msg=${payload.msg}`
        let msgData = await payload.axios.get('/api/robot' + query)
        let time = new Date().getTime()
        let msg = JSON.parse(msgData.data.data)
        msg = msg.text

        commit(types.ADD_MESSAGE, {msg, time})
    }
}
