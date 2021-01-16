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