export const Partner = () => (
  <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center bg-white">
    <h2 className="mb-6 text-4xl font-bold text-prussian-blue">
      Харилцагч байгууллагууд
    </h2>
    <div className="grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <div
          key={n}
          className="relative flex items-center justify-center w-20 h-20"
        >
          <img
            src={`/images/img${n}.jpeg`}
            fill
            alt={`Партнер ${n}`}
            className="object-cover w-auto h-20 transition-all duration-300 grayscale hover:grayscale-0"
          />
        </div>
      ))}
    </div>
  </div>
);
