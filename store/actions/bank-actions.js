export const type1 = "WITHDRAW_MONEY"
export const type2 = "BositeMoney"


export const withhard = (amount) => {
    return {
        type: type1,
        payload: amount
    }
}
export const action2 = (mount) => {
    return {
        type: type2,
        payload: mount
    }

}