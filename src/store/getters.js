export const msgViewList = (state) => {
    let result = []
    let friends = state.data.friends
    if (!friends.length) {
        return []
    }
    state.messageList.forEach(item => {
        let friendData = friends.find(f => f._id === item._id)
        let unreadNum = 0
        let lastMsg = {}
        item.list.forEach(m => {
            if (!m.read) {
                unreadNum++
            }
            lastMsg = m
        })
        result.push({
            ...friendData,
            unreadNum,
            lastMsg
        })
    })
    return result
}
