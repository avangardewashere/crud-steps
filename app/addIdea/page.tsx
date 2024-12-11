"use client";
import { useState } from "react";

export default function addTopic() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = () => {
    console.log(title,details);


  }


  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Idea Title"
        value={""}
        className="border border-slate-500 px-6 py-2"
      />

      <input
        type="text"
        onChange={(e) => setDetails(e.target.value)}
        value={""}
        placeholder="Idea Description"
        className="border border-slate-500 px-6 py-2"
      />

      <button
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit "
        type="submit"
      >
      
        Submit
      </button>
    </form>
  );
}
