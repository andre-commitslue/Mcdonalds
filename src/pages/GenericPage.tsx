export default function GenericPage({ title }: { title: string }) {
  return (
    <div className="container mx-auto px-4 py-20 min-h-[50vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{title}</h1>
      <p className="text-gray-600 max-w-2xl text-lg">
        This page is currently under construction. Check back later for updates!
      </p>
    </div>
  );
}
