import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getIdea = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/idea", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics:", error);
  }
};

export default async function TopicList() {
  const { ideas } = await getIdea();

  return (
    <>
      {ideas?.map(
        (idea: { _id: string; title: string; description: string }) => (
          <div key={idea._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
            <div>
              <h2 className="font-bold text-2xl">{idea.title}</h2>
              <div>{idea.description}</div>
            </div>

            <div className="flex gap-2">
              <RemoveBtn />
              <Link href={"/editTopic/"+idea._id}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        )
      )}
    </>
  );
}
