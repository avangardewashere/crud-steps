"use client";
import { useState } from "react";
import { GiReturnArrow } from "react-icons/gi";

export default function addTopic() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = async (e: any) => {
    console.log(title, details);

    e.preventDefault();

    if (!title || !details) {
      alert("Title and descriptoin are required");
      GiReturnArrow;
    }

    try {
      const res = await fetch("http://localhost:3000/api/idea", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          body: JSON.stringify({ title, description: details }),
        },
      });

      if (!res.ok) {
        throw new Error("Error in creating a new idea");
      }

      return res.json();
    } catch (e) {
      console.log("Error in processing the new idea: ", e);
    }
  };

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
