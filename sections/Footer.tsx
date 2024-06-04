import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  href?: string;
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
}

function Footer({
  image =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/d7aa9290-074f-417c-99c3-5b0587c8c2ee",
  href = "https://deco.cx/",
  text = "Made with",
  alt = "Made with deco.cx",
  height = 20,
  width = 50,
}: Props) {
  return (
    <div class="w-full mx-auto">
      <div class="flex  border border-[#3B3B3B]">
        <div class="flex-[1_1_auto] md:basis-1/5 hidden md:flex border-r border-[#3B3B3B] px-8 pt-8">
          <p class="text-[#3B3B3B] uppercase">Menu</p>
        </div>
        <div class="flex flex-col lg:flex-row basis-full md:basis-4/5">
          <div class="flex-[1_1_auto] md:basis-1/2 border-b lg:border-b-0 lg:border-r border-[#3B3B3B] py-2 px-8">
            <p class="text-[70px] font-[300] text-white uppercase leading-[70px]">Contato</p>
          </div>
          <div class="flex-[1_1_auto] md:basis-1/2 py-2 px-8">
            <p class="text-[70px] font-[300] text-white uppercase leading-[70px]">Linkedin</p>
          </div>
        </div>
      </div>
      <div class="flex border-x border-b border-[#3B3B3B]">
        <div class="flex-[1_2_auto] md:basis-1/5 hidden md:flex border-r border-[#3B3B3B] pt-8 px-8">
          <p class="text-[#3B3B3B] uppercase">Onde Estamos</p>
        </div>
        <div class="flex flex-col lg:flex-row basis-full md:basis-4/5">
          <div class="flex-[1_1_auto] md:basis-1/2 border-b lg:border-b-0 lg:border-r border-[#3B3B3B] pt-8 px-8 pb-[256px]">
            <p class="text-[14px] font-[300] uppercase text-[#3B3B3B] leading-4">Rua Mourato Coelho, 1.404, 5º andar Vila Madalena, São Paulo SP CEP 05417-002</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
