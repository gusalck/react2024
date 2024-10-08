
function MyButton(props){
    const [isCliked, setIsClicked] = React.useState(false);

    return React.createElement(
        "button",
        {
            onClick: () => setIsClicked(true)
        },
        isCliked ? 'Cliked!' : 'Click here!'
    )
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(MyButton));