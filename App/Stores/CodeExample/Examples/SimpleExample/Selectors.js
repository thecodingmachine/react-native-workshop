export const liveInEurope = (state) => {
  if (Object.entries(state.example.user).length <= 0) return null

  // For this example, we imagine this cities are european cities
  let europeanCities = ['Gwenborough', 'Wisokyburgh', 'McKenziehaven', 'South Elvis', 'Roscoeview']

  return europeanCities.includes(state.example.user.address.city)
}
