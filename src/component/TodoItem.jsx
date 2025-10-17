export default function TodoItem({ item, handleDelete, handleUpdate}) {
  return (
    <div className="mx-2 mb-2 grid grid-cols-3 gap-2">
      <div>
        <p className="font-semibold text-lg">
          {item.id}.{item.description}
        </p>
      </div>
      <div>
        <span className="mr-0.5">Completed?</span>
        <input
          className="cursor-pointer"
          type="checkbox"
          checked={item.completed}
          onChange={()=> handleUpdate(item.id, item.completed)}
        />
      </div>
      <div>
        <button
          className="border border-black px-3 rounded-sm bg-red-500 text-white cursor-pointer"
          onClick={() => handleDelete(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
