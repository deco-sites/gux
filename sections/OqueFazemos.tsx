import type { HTMLWidget } from "apps/admin/widgets.ts";

export type Categoria = {
  nome: string;
  descricao: HTMLWidget;
};


interface Props {
  titulo?: string;
  /**
  * @description Informe a categoria.
  */
    categorias?: Categoria[];
  }
  
export default function Section({
    categorias = [
        {
            nome: 'DESCOBERTA',
            descricao: 'Pesquisa<br>Análise<br>Entrevistas<br>Benchmarking<br>Mapeamento de jornadas<br>Focus Group<br>Cliente Oculto<br>Estudo etnográfico'
        },
        {
            nome: 'DEFINIÇÃO',
            descricao: 'Estratégia de produto<br>Proposta de valor<br>Backlog<br>Roadmap<br>Conceituação<br>Testes de conceito<br>Testes de usabilidade'
        },
        {
            nome: 'DESENHO',
            descricao: 'Arquitetura de informação<br>Mapas<br>Fluxos<br>Jornadas<br>Identidade visual<br>Prototipagem<br>Design System<br>UX Writing<br>Motion Design<br>Sound Design'
        },
        {
            nome: 'DESENVOLVIMENTO',
            descricao: 'Tech Assessment<br>Integrações de sistema<br>Estratégia e implementação de LLM<br>Desenvolvimento full stack para dispositivos móveis e web<br>Arquitetura DevOps<br>Acessibilidade<br>Controle de Qualidade (QA)'
        },
    ],
    titulo = 'O que fazemos'
}: Props) {
    return (
        <section class="border border-t-0 border-[#3B3B3B]">
            <div class="flex flex-col md:flex-row">
                <div class="flex-[1_1_auto] md:basis-1/5 px-8 pt-8 md:border-r border-[#3B3B3B] ibm-plex-mono-light">
                    <p class="text-sm text-[#969696] uppercase">{titulo}</p>
                </div>
                <div class="flex flex-wrap gap-[80px] md:gap-[32px] md:basis-4/5 px-8 pt-5 md:pt-8 pb-[256px] kantumruy-pro-light">
                  {categorias.map((categoria) => (
                    <div class="w-full md:w-1/5">
                        <p class="text-base text-white uppercase mb-5">{ categoria.nome }</p>
                          <p class="text-sm font-normal text-[#969696] leading-[140%]" dangerouslySetInnerHTML={{ __html: categoria.descricao || "" }}></p>
                    </div>
                  ))}
                </div>
            </div>
        </section>
    )
  }