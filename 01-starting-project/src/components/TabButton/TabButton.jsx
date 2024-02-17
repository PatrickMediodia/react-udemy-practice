// children is what is being passed inside the component closing tags
export default function TabButton({ children, isSelected, ...props}) {
    return(
        <li>
            <button 
                className={isSelected ? 'active' : ''} 
                {...props}
            >
                {children}
            </button>
        </li>
    );
}