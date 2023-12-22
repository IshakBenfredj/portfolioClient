export default function Loading({ arr, text, Element }) {
  return (
    <>
      {text ? (
        <div className="md:text-3xl text-lg text-secondary font-bold capitalize text-center">
          {text}
        </div>
      ) : (
        <>
          {arr.map((e) => (
            <Element key={e} keyy={e} />
          ))}
        </>
      )}
    </>
  );
}
