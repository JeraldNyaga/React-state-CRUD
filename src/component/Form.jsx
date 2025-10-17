export default function Form() {
  return (
    <>
      <div className="flex">
        <form className="flex">
          <div className="flex gap-2">
            <label className="m-0.5 text-2xl" htmlFor="addToDo">
              Description:
            </label>
            <input
              className="border border-blue-500 rounded-sm p-1"
              type="text"
              name="toDoInput"
              id="toDoInput"
            />
          </div>
          <button className="border border-black rounded-sm p-1 m-1.5 bg-amber-400 text-green-600 cursor-pointer">
            Add todo
          </button>
        </form>
      </div>
    </>
  );
}
