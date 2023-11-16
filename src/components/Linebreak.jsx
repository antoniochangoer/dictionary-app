export default function Linebreak({ name }) {
  return (
    <>
      <div className="pt-8 flex items-center gap-4">
        <h2 className="font-bold text-lg md:text-2xl">
          <em>{name}</em>
        </h2>
        <hr className="block w-full border-brand-light-300 dark:border-brand-dark-500" />
      </div>
    </>
  );
}
