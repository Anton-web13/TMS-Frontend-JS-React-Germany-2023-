export const calcAverage = (users) => {
    const usersAmount = users.length;

    if (usersAmount === 0) {
        return 0;
    }

    return users.reduce((result, {age}) => {
        return result + age;
    }, 0) / usersAmount;
}