export const Intro = () => (
  <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center bg-white">
    <h2 className="mb-6 text-4xl font-bold text-prussian-blue">
      Холбооны танилцуулга
    </h2>
    <p className="max-w-3xl mb-4 text-lg text-slate-700">
      Цөмийн физикчдийн хамтарсан төрийн бус байгууллага нь шинжлэх ухааны
      мэдлэгийг түгээх, залуу судлаачдад дэмжлэг үзүүлэх, салбарын хөгжилд хувь
      нэмэр оруулах зорилготойгоор 2020 онд байгуулагдсан.
    </p>
    <img
      src="/assets/images/about/intro.jpg"
      alt="Холбооны танилцуулга"
      className="w-full max-w-2xl mt-6 shadow-md rounded-xl"
    />
  </div>
);
