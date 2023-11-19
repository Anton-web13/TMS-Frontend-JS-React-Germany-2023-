export const collectUserIds = (users) => {
    return users.map(({id, name}) => name + id)
}