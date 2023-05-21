import NavLocationCard from "../../UI/NavLocationCard/NavLocationCard";

const NavLocations = (inputs, thisType, onClickHandler) => {
    const retVal = inputs.map((input) => {
        const name = input.firstName + ' ' + input.lastName;
        return (
            <NavLocationCard
                id={input.id}
                navType={thisType}
                title={input.title ? input.title : ''}
                name={name ? name : ''}
                dateCreated={input.dateCreated}
                onClickHandler={() => onClickHandler(thisType, input.id, input.title, name)}
            />
        );
    });

    return retVal;
};

export default NavLocations;