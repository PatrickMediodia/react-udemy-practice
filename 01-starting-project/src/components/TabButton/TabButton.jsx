// children is what is being passed inside the component closing tags
export default function TabButton({ children, onClickHandler }) {
    return(
        <li>
            <button onClick={onClickHandler}>{children}</button>
        </li>
    );
}