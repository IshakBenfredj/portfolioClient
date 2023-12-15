import { IoClose } from "react-icons/io5";

export default function ProjectDetails({ details, setDetails }) {
  return (
    <div className="text-secondary fixed top-0 right-0 left-0 bottom-0 flexCenter w-full h-full backdrop-blur z-[46]">
      <pre
        className="md:w-1/3 w-11/12 h-1/2 bg-gray-800 dark:bg-gray-100 relative
        whitespace-pre-wrap p-4 rounded-xl text-gray-100 dark:text-gray-800"
      >
        <div 
        onClick={() => setDetails('')}
        className="absolute -top-4 -right-4 p-2 md:text-2xl text-white bg-red-700 rounded-full cursor-pointer 
        border-2 border-white dark:border-gray-800">
          <IoClose />
        </div>
        <p className="overflow-y-auto h-full">{details}</p>
      </pre>
    </div>
  );
}