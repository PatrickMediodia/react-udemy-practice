// default parameters by destructuring and then setting its default value
export default function Tabs({ children, buttons, buttonsContainer = "menu" }) {
    // if string is passed, it will look for a build in component corresponding to that value
    // if not, it will consider it as a custom component
    const ButtonsContainer = buttonsContainer;
    
    // passing an identifier as a prop
    // and using this identifier to dynamically render different html elements
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}