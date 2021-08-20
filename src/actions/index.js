export const selectUser = (user) => {
  return {
    type: 'USER_SELECTED',
    payload: user,
  }
}
export const setBooked = (data) => {
  return {
    type: 'SET_BOOKED',
    payload: data,
  }
}
