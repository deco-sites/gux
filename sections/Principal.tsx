import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  image?: ImageWidget;
  /**
  * @format textarea
  * @description The description of name.
  */
  titulo?: string;
}

export default function Section({ titulo = "Aproximamos marcas & pessoas através da experiência", image = "" }: Props) {
  return (
    <section class="border border-t-0 border-[#3B3B3B]">
      <div class="flex flex-col md:flex-row">
        <div class="flex justify-center flex-[1_1_auto] md:basis-1/2 py-5 md:py-[80px] border-b md:border-b-0 md:border-r border-[#3B3B3B]">
          <div>
            {image && (
              <Image
                class="block w-full md:max-w-[76%] md:ml-[12%]"
                src={image || ""}
              />
            )}
          </div>
        </div>
        <div class="flex-[1_1_auto] md:basis-1/2 px-4 md:px-8 pt-5 md:pt-8 pb-[182px] md:pb-0 kantumruy-pro-light">
          <div class="uppercase max-w-[682px]">
            <p class="text-[36px] lg:text-[56px] leading-[36px] lg:leading-[56px] text-white mb-[20px] tracking-[-2.8px] whitespace-pre-wrap">{titulo}</p>
          </div>
        </div>
      </div>
    </section>
  )
}