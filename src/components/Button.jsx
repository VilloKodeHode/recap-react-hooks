export const Button = ({buttonText, active, color, handleButtonClick}) => {
    let colors;

    if (color === 'blue') {
        colors = 'bg-blue-500 hover:bg-blue-700';
    } else if (color === 'green') {
        colors = 'bg-green-500 hover:bg-green-700';
    } else if (color === 'red') {
        colors = 'bg-red-500 hover:bg-red-700';
    } else if (color === 'stone') {
        colors = 'bg-stone-500 hover:bg-stone-700';
    } else if (color === 'purple') {
        colors = 'bg-purple-500 hover:bg-purple-700';
    } else {
        colors = 'bg-slate-500 hover:bg-slate-700';
    }


    return (
        <button
        onClick={() => handleButtonClick(buttonText)}
          className={`p-4 ${
            active === buttonText
              ? colors 
              : "bg-blue-500 hover:bg-blue-900"
          }`}
        >
          {buttonText} Button
        </button>
    )
}