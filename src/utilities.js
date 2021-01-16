const cleanCharacterData = (allCharacters) => {
    const houseMateDetails = allCharacters.filter(char => {
            return char.house === this.props.userHouse.name
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