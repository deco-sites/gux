export type Servico = string;

export type Categoria = {
  nome: string;
  servicos: Servico[];
};


interface Props {
    /**
    * @description Informe a categoria.
    */
    categorias?: Categoria[];
  }
  
export default function Section({ categorias = [
    {
        nome: 'DESCOBERTA',
        servicos: [
            'Pesquisa ',
            'Análise',
            'Entrevistas',
            'Benchmarking',
            'Mapeamento de jornadas',
            'Focus Group',
            'Cliente Oculto',
            'Estudo etnográfico',
        ]
    },
    {
        nome: 'DEFINIÇÃO',
        servicos: [
            'Estratégia de produto',
            'Proposta de valor',
            'Backlog',
            'Roadmap',
            'Conceituação',
            'Testes de conceito',
            'Testes de usabilidade'
        ],
    },
    {
        nome: 'DESENHO',
        servicos: [
            'Arquitetura de informação',
            'Mapas',
            'Fluxos',
            'Jornadas',
            'Identidade visual',
            'Prototipagem',
            'Design System',
            'UX Writing',
            'Motion Design',
            'Sound Design',
        ]
    },
    {
        nome: 'DESENVOLVIMENTO',
        servicos: [
            'Tech Assessment',
            'Integrações de sistema',
            'Estratégia e implementação de LLM',
            'Desenvolvimento full stack para dispositivos móveis e web',
            'Arquitetura DevOps',
            'Acessibilidade',
            'Controle de Qualidade (QA)',
        ]
    }
] }: Props) {
    return (
        <section class="border border-t-0 border-[#3B3B3B]">
            <div class="flex flex-col md:flex-row">
                <div class="flex-[1_1_auto] md:basis-1/5 px-8 pt-8 md:border-r border-[#3B3B3B] ibm-plex-mono-light">
                    <p class="text-sm text-[#969696] uppercase">O que fazemos</p>
                </div>
                <div class="flex flex-wrap gap-[80px] md:gap-[32px] flex-[1_1_auto] md:basis-4/5 px-8 pt-5 md:pt-8 pb-[256px] kantumruy-pro-light">
                  {categorias.map((categoria) => (
                    <div class="flex flex-col sm:flex-row gap-[80px] sm:gap-[32px]">
                      <div class="min-w-[202px]">
                        <p class="text-base text-white uppercase mb-[20px]">{ categoria.nome }</p>
                        {categoria.servicos.map((servico) => (
                        <p class="text-sm font-normal text-[#969696] leading-[140%]">{ servico }</p>
                        ))}
                      </div>
                    </div>
                  ))}

                </div>
            </div>
        </section>
    )
  }