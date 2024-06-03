interface Props {
  message?: string;
}

function Header({
  message = "Olá, somos a GUX!",
}: Props) {
  return (
    <div class="border border-[#3B3B3B] flex">
      <div class="py-[21px] px-[32px]">{message}</div>
      <div class="ml-auto px-[21.5px] py-[21px] border-l border-l-[#3B3B3B]">PT</div>
      <div class="px-[21.5px] py-[21px] border-l border-l-[#3B3B3B]">EN</div>
    </div>
  );
}

export default Header;