export default function EditTopicForm() {
    return (
      <form className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Idea Title"
          className="border border-slate-500 px-6 py-2"
        />
  
        <input
          type="text"
          placeholder="Idea Description"
          className="border border-slate-500 px-6 py-2"
        />
  
        <button
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit "
          type="submit"
        >
          Update Idea
        </button>
      </form>
    );
  }
  