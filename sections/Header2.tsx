interface Props {
  /**
  * @description The description of name.
  */
  message?: string;
}

export default function Section({ message = "Olá, somos a GUX!" }: Props) {
  return (
    <div class="border border-[#3B3B3B] flex ibm-plex-mono-light">
      <div class="py-[21px] px-[32px] uppercase">{ message }</div>
      <a href="?lang=pt" class="ml-auto px-[21.5px] py-[21px] border-l border-l-[#3B3B3B]">PT</a>
      <a href="?lang=en" class="px-[21.5px] py-[21px] border-l border-l-[#3B3B3B]">EN</a>
    </div>
  )
}