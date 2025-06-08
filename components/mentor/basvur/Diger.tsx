import React from "react";
const Diger = ({
  handleActiveStep,
}: {
  handleActiveStep: (step: number) => void;
}) => {
  return (
    <form action="" className="flex flex-col ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className=" gap-4 col-span-2">
          <p className="text-gray-600 font-bold mb-2 ">
            Paylaşmak istediğiniz diğer bilgiler (Paylaştığın bilgiler uygun
            şekilde profilinde görüntülenecek)
          </p>
          <textarea className="w-full p-2  rounded-lg border-2 border-gray-300 min-h-[150px]" />
          <p className="mt-1 text-sm text-gray-500">
            Daha önce geliştirdiğin bir proje, yayınladığın bir blog, içerik
            ürettiğin bir sosyal medya plaftormu, başarılı olup bahsetmek
            istediğin herhangi bir şey ...
          </p>
        </div>
        <div className=" gap-4 col-span-2">
          <p className="text-gray-600 font-bold mb-2 ">
            Yalnızca bizimle paylaşmak istediğiniz diğer bilgiler
            (Mentee&apos;ler bu bilgileri görmeyecekler)
          </p>
          <textarea className="w-full p-2  rounded-lg border-2 border-gray-300 min-h-[150px]" />
          <p className="mt-1 text-sm text-gray-500">
            Bizimle paylaşmak istediğiniz farklı bilgiler var mı?
          </p>
        </div>
        <div className="flex justify-between  col-span-2">
          <button
            className="btn-main-sm "
            type="button"
            onClick={() => handleActiveStep(2)}
          >
            Geri Dön
          </button>
        </div>
      </div>
    </form>
  );
};

export default Diger;
