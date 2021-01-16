export const cleanCharacterData = (allCharacters, userHouse) => {
    const houseMateDetails = allCharacters.filter(char => {
            return char.house === userHouse.name
        })
    return houseMateDetails.map(char => {
        return (
            {
                _id: char._id, 
                name: char.name
            }
        )
    })
}

export const cleanHouseData = (allHouses) => {
    return allHouses.map(house => {
        return {
            color1: house.color1,
            color2: house.color2,
            founder: house.founder,
            headhOfHouse: house.headhOfHouse,
            houseGhost: house.houseGhost,
            mascot: house.mascot,
            name: house.name,
            value1: house.value1,
            value2: house.value2,
            value3: house.value3,
            value4: house.value4
        }
    })
}