interface Props {
  /**
  * @description The description of name.
  */
  message?: string;
}

export default function Section({ message = "Olá, somos a GUX!" }: Props) {
  return (
    <div class="border border-[#3B3B3B] flex font-['IBM Plex Mono']">
      <div class="py-[21px] px-[32px] uppercase">{ message }</div>
      <div class="ml-auto px-[21.5px] py-[21px] border-l border-l-[#3B3B3B]">PT</div>
      <div class="px-[21.5px] py-[21px] border-l border-l-[#3B3B3B]">EN</div>
    </div>
  )
}