export default function Error() {
  return (
    <div className="text-center mt-32">
      <p className="text-6xl mb-11">😕</p>
      <h1 className="text-xl font-bold mb-6">No Definitions Found</h1>
      <p className="text-lg text-brand-light-500 dark:text-white">
        Sorry pal, we couldn&apos;t find definitions for the word you were
        looking for. You can try the search again at later time or head to the
        web instead.
      </p>
    </div>
  );
}
