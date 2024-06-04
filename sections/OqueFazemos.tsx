interface Props {
    /**
    * @description The description of name.
    */
    line1?: string;
    line2?: string;
    line3?: string;
    line4?: string;
  }
  
  export default function Section({ line1 = "Aproximamos", line2 = "marcas & pessoas", line3 = "através da ", line4 = "experiência" }: Props) {
    return (
        
        <section class="border border-t-0 border-[#3B3B3B]">
            <div class="flex flex-col md:flex-row">
                <div class="flex-[1_1_auto] md:basis-1/5 px-8 pt-8 md:border-r border-[#3B3B3B]">
                    <p class="text-sm font-light text-[#969696] uppercase">O que fazemos</p>
                </div>
                <div class="flex flex-wrap gap-[80px] md:gap-[32px] flex-[1_1_auto] md:basis-4/5 px-8 pt-5 md:pt-8 pb-[256px]">
                    <div class="flex flex-col sm:flex-row gap-[80px] sm:gap-[32px]">
                        <div class="min-w-[202px]">
                            <p class="text-base font-light text-white uppercase mb-[20px]">DESCOBERTA</p>
                            <p class="text-sm font-normal text-[#969696]">
                                Pesquisa  <br/>
                                Análise <br/>
                                Entrevistas <br/>
                                Benchmarking <br/>
                                Mapeamento de jornadas <br/>
                                Focus Group <br/>
                                Cliente Oculto <br/>
                                Estudo etnográfico
                            </p>
                        </div>
                        <div class="min-w-[202px]">
                            <p class="text-base font-light text-white uppercase mb-[20px]">DEFINIÇÃO</p>
                            <p class="text-sm font-normal text-[#969696]">
                                Estratégia de produto <br/>
                                Proposta de valor <br/>
                                Backlog <br/>
                                Roadmap <br/>
                                Conceituação  <br/>
                                Testes de conceito <br/>
                                Testes de usabilidade
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-[80px] sm:gap-[32px]">
                        <div class="min-w-[202px]">
                            <p class="text-base font-light text-white uppercase mb-[20px]">DESENHO</p>
                            <p class="text-sm font-normal text-[#969696]">
                                Arquitetura de informação
                                Mapas <br/>
                                Fluxos <br/>
                                Jornadas <br/>
                                Identidade visual <br/>
                                Prototipagem <br/>
                                Design System <br/>
                                UX Writing <br/>
                                Motion Design <br/>
                                Sound Design
                            </p>
                        </div>
                        <div class="min-w-[202px]">
                            <p class="text-base font-light text-white uppercase mb-[20px]">DESENVOLVIMENTO</p>
                            <p class="text-sm font-normal text-[#969696]">
                                Tech Assessment <br/>
                                Integrações de sistema <br/>
                                Estratégia e implementação de LLM <br/>
                                Desenvolvimento full stack para dispositivos móveis e web <br/>
                                Arquitetura DevOps <br/>
                                Acessibilidade <br/>
                                Controle de Qualidade (QA)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }