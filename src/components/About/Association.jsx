export const Associotion = () => (
  <div className="flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center ">
    <h2 className="mb-6 text-4xl font-bold text-prussian-blue">
      Салбар холбоод
    </h2>
    <div className="grid max-w-5xl grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        "Улаанбаатар хот",
        "Дархан-Уул аймаг",
        "Эрдэнэт",
        "Дорнод",
        "Орхон",
        "Хөвсгөл",
      ].map((location, index) => (
        <div
          key={index}
          className="p-6 transition-all bg-white shadow-md rounded-xl hover:shadow-lg"
        >
          <h3 className="text-xl font-semibold text-carolina-blue">
            {location}
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Тухайн бүсийн судлаач, багш, мэргэжилтнүүдийн хамтын ажиллагааг
            бэхжүүлнэ.
          </p>
        </div>
      ))}
    </div>
  </div>
);
