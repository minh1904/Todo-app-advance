import tick from '../assets/imgs/tick.png';
import not_tick from '../assets/imgs/not_tick.png';
import delete_icon from '../assets/imgs/delete.png';
const TodoItems = ({ text, id, isComplete, deleteTodo }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        <img src={tick} className="w-5" />
        <p className="text-slate-700 ml-4 text-[17px]">{text}</p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={delete_icon}
        className="w-4 cursor-pointer"
      />
    </div>
  );
};

export default TodoItems;
