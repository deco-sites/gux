import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    image?: ImageWidget;
    /**
    * @description The description of name.
    */
    line1?: string;
    line2?: string;
    line3?: string;
    line4?: string;
  }
  
  export default function Section({ line1 = "Aproximamos", line2 = "marcas & pessoas", line3 = "através da ", line4 = "experiência", image = "" }: Props) {
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
                    <div class="uppercase max-w-[632px]">
                        <p class="text-[36px] lg:text-[56px] leading-[36px] lg:leading-[56px] text-white mb-[20px] tracking-[-2.8px]">
                            <span class="text-[#3B3B3B] md:text-white">{ line1 }</span><br/>{ line2 }<br/> 
                            <span class="text-[#3B3B3B] md:text-white">{ line3 }</span> { line4 }
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
  }