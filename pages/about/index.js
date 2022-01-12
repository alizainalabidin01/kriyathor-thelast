import MainLayout from "../../components/Layout"

const About = () => {
  return (
    <MainLayout>
      <div className="flex flex-col py-5 px-10 justify-center shadow-md bg-gray-100 md:justify-around md:py-10 md:px-20 md:flex-row items-center">
        <div>
        <img src="/image/logo.png" className="w-3/4 mx-auto my-4 sm:my-0 sm:w-2/4" />
        </div>
        <div className="w-full md:w-2/4">
          <h1 className="text-xl mb-5 font-bold text-center md:text-left md:text-2xl">Apa itu Kriyathor ?</h1>
          <span className=" text-base md:text-lg">Kriyathor adalah Perusahaan yang berfokus di bidang gift/hadiah exclusive namun memiliki harga yang terjangkau setiap hadiah bisa disesuaikan dengan keinginan anda</span>
        </div>
      </div>
      <div className="text-center my-5 ">
        <div>
          <span className="text-2xl font-bold">Keuntungan Order Disini</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-place-center my-4 mx-4 text-xs md:text-base md:my-10 md:mx-40">
            <div className="flex flex-col gap-3">
              <img src="/image/benefit.jpg" className="mx-auto w-3/6" />
              <span>Hadiah memiliki harga terjangkau dan jauh lebih murah daripada lainnya</span>
            </div>
            <div className="flex flex-col gap-3">
              <img src="/image/benefit.jpg" className="mx-auto w-3/6" />
              <span>Hadiah memiliki harga terjangkau dan jauh lebih murah daripada lainnya</span>
            </div>
            <div className="flex flex-col gap-3">
              <img src="/image/benefit.jpg" className="mx-auto w-3/6" />
              <span>Hadiah memiliki harga terjangkau dan jauh lebih murah daripada lainnya</span>
            </div>
            <div className="flex flex-col gap-3">
              <img src="/image/benefit.jpg" className="mx-auto w-3/6" />
              <span>Hadiah memiliki harga terjangkau dan jauh lebih murah daripada lainnya</span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
export default About