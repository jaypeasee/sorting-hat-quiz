const getHogwartsHouses = () => {
  return fetch("https://fe-cors-proxy.herokuapp.com", {
    headers: {
      "Target-URL": "https://potter-server.herokuapp.com/api/v1/houses",
    },
  }).then((response) => response.json())
}

const getAllCharacters = () => {
  return fetch("https://fe-cors-proxy.herokuapp.com", {
    headers: {
      "Target-URL": "https://potter-server.herokuapp.com/api/v1/characters",
    },
  }).then((response) => response.json())
}

export { getHogwartsHouses, getAllCharacters }
