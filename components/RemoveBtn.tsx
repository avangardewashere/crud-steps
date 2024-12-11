import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

interface IdeaProps {
  id: string;
}

export default async function RemoveBtn(props: IdeaProps) {
  const Router = useRouter();
  const removeIdea = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch("http://localhost:3000/api/idea?id=" + props.id, {
        method: "DELETE",
      });

      Router.refresh();
    }
  };

  return (
    <button onClick={removeIdea} className="text-rose-600">
      <HiOutlineTrash size={24} />
    </button>
  );
}
