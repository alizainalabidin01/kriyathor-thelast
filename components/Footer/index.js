const Footer = () => {
  return (
    <footer className="shadow-md">
      <div className="flex flex-col bg-gray-100 p-8 sm:flex-row">
        <div className="flex flex-col gap-5 items-center text-center sm:gap-10 sm:items-start sm:flex-row">
          <div className="mx-8">
            <a href="/">
              <img src="/image/logo.png" className="w-24" />
            </a>
          </div>

          <div className="text-sm text-center">
            <h5 className="font-bold uppercase"> Follow </h5>
            <ul className="flex-col gap-4 sm:flex-row items-center">
              <li className="flex gap-2 pb-2"> <i className="fab fa-facebook"></i> Kriyathor Gift </li>
              <li className="flex gap-2 pb-2"> <i className="fab fa-instagram"></i> kriyathor </li>
              <li className="flex gap-2 pb-2"> <i className="fab fa-twitter"></i> kriyathor </li>
            </ul>
          </div>
          <div className="text-sm text-center sm:text-left">
            <h5 className="font-bold uppercase"> Help </h5>
            <ul className="flex-col text-center items-start sm:text-left sm:items-center">
              <li className="pb-2"> About Us </li>
              <li className="pb-2"> Term & Policy </li>
              <li className="pb-2"> FAQs </li>
            </ul>
          </div>
        </div>
        <div className="flex-auto mt-10 text-sm sm:mt-0">
          <h5 className="font-bold uppercase text-center"> Payment Methods </h5>
          <div className="flex justify-center mt-5 gap-2 sm:gap-7">
            <img src="/image/bca.png" className="w-auto h-5" />
            <img src="/image/bri.png" className="w-auto h-5" />
            <img src="/image/dana.png" className="w-auto h-5" />
            <img src="/image/line.png" className="w-auto h-5" />
            <img src="/image/shopeepay.png" className="w-auto h-5" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center bg-gray-100 py-8">
        <div className="flex flex-col justify-center bg-gray-100 pt-4 border-solid border-t-4 border-gray-50 mx-4 lg:flex-row">
          <p className="text-center"> ©KRIYATHOR 2021 </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer