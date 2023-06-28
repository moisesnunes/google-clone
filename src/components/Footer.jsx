import CountryName from "./CountryName";

function Footer() {
  return (
    <footer className="absolute w-full bottom-0 text-sm text-white bg-[#171717] ">
      <div className="border-b border-gray-500 px-7 py-3">
        <CountryName />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm px-8 py-3 space-y-7 sm:space-y-0">
        <ul className="flex items-center space-x-6">
          <li className="link">Sobre</li>
          <li className="link">Publicidade</li>
          <li className="link">Negócios</li>
          <li className="link">Como funciona a Pesquisa</li>
        </ul>
        <ul className="flex items-center space-x-6">
          <li className="link">Privacidade</li>
          <li className="link">Termos</li>
          <li className="link">Configurações</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
