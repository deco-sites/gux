interface Props {
    /**
    * @description The description of name.
    */
    titulo?: string;
    linha1?: string;
    linha2?: string;
  }
  
  export default function Section({ 
    titulo = "Sobre nós", 
    linha1 = "SOMOS uma consultoria de experiência especializada no desenho de produtos E serviços digitais.", 
    linha2 = "Criamos experiências capazes de fidelizar, trazer resultados e encantar." 
}: Props) {
    return (
        <section class="border border-t-0 border-[#3B3B3B]">
            <div class="flex flex-col md:flex-row">
                <div class="flex-[1_1_auto] md:basis-1/5 px-8 pt-8 md:border-r border-[#3B3B3B]">
                    <p class="text-sm text-[#969696] uppercase ibm-plex-mono-light">{ titulo }</p>
                </div>
                <div class="flex-[1_1_auto] md:basis-4/5 px-8 pt-5 md:pt-8 pb-[256px] kantumruy-pro-light">
                    <div class="uppercase lg:mr-[25vw] leading-6 md:leading-10 tracking-[-1.52px] max-w-[793px]">
                        <p class="text-[23px] md:text-[38px] text-white mb-[20px]">{ linha1 }</p>
                        <p class="text-[23px] md:text-[38px] text-[#969696]">{ linha2 }</p>
                    </div>
                </div>
            </div>
        </section>
    )
  }