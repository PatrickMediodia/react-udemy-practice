// children is what is being passed inside the component closing tags
export default function TabButton({ children, onClickHandler, isSelected }) {
    return(
        <li>
            <button 
                className={isSelected ? 'active' : ''} 
                onClick={onClickHandler}
            >
                {children}
            </button>
        </li>
    );
}