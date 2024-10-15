import { useTranslations } from "next-intl";

export const HeroSection = () => {
  const t = useTranslations("Hero");
  return (
    <section className='Hero-banner flex items-center justify-center mt-[88px]'>
      <div className='flex flex-col gap-4 py-16'>
        <h1 className='text-3xl text-gray-400 text-center'>
          {t("title")}
        </h1>
        <div className='flex items-center justify-center'>
          <button className='bg-[#79AC78] hover:bg-[#79AC78]/70 text-white px-6 py-3 w-fit text-lg rounded-md'>
            {t("ctaButton")}
          </button>
        </div>
      </div>
    </section>
  );
};
