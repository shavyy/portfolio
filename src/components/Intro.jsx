import styles from "../style";
import { discount, robot } from "../assets";
import { LienGIT } from ".";

const Intro = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} mt-40`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[65px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Salut, je suis  <br className="sm:block hidden" />{" "}
            <span className="text-gradient ss:text-[55px] text-[35px]">Xavier Aiguaviva</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <LienGIT />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[30px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Développeur WEB
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          J'ai créé ce site dans le but de développer mes compétences dans le monde du WEB 
          et également pour présenter mon parcours, mes expériences et mes compétences.
          Ce développement s'inscrit  dans le cadre d'une reconversion professionnelle et j'espère que
          vous prendrez plaisir à parcourir cette page.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <LienGIT />
      </div>
    </section>
  );
};

export default Intro;