import MainLayout from "../components/Layout";
import Slider from "../components/Slider";
import { sql_query } from "../lib/db"
import Link from "next/link"

export default function Home(props) {
  const {posts} =props
  return (
    <MainLayout>
      <Slider />
      <section className="flex flex-col py-5 px-10 justify-center shadow-md bg-gray-100 sm:py-10 sm:px-20 sm:flex-row items-center">
        <div>
          <img src="/image/logo.png" className="w-3/4 mx-auto my-4 sm:my-0 sm:w-2/4" />
        </div>
        <div className="w-full -ml-0 sm:-ml-20 sm:w-2/4">
          <h1 className="text-xl mb-5 font-bold text-center sm:text-left sm:text-2xl">Apa itu Kriyathor ?</h1>
          <span className=" text-base sm:text-lg">Kriyathor adalah Perusahaan yang berfokus di bidang gift/hadiah exclusive namun memiliki harga yang terjangkau setiap hadiah bisa disesuaikan dengan keinginan anda</span>
        </div>
      </section>
      <section className="text-center shadow-md px-2">
        <h1 className="text-2xl font-bold my-5 sm:text-3xl">Popular Product</h1>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 justify-center">
          {posts.map( (item)=>
            <Link href={item.link}><a>
              <div className="flex flex-col gap-2 p-5 my-2 bg-white  hover:bg-gray-100">
                <div className="flex flex-col gap-2">
                  <img src={item.image_produk} className="w-4/6 mx-auto" />
                  <span>{item.name_produk.substring(0,26)+'...'}</span>
                  <div className={"flex gap-0 justify-center sm:gap-2 list-unstyled-"+item.rating_produk}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="bg-teal-500 flex flex-row w-min mx-auto p-2 my-2 rounded-xl text-white text-sm sm:text-base">{"Rp."+item.price_produk.toLocaleString()}
                  </div>
                </div>
              </div> </a>
            </Link>)}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export async function getStaticProps(context){
  try {
    // 'SELECT * FROM kriyathor ORDER BY sold_produk DESC LIMIT 4'
    const results = await sql_query('SELECT * FROM kriyathor ORDER BY sold_produk DESC LIMIT 4')
    let posts = JSON.parse(JSON.stringify(results))
    return {
      props : {posts}
    };
} catch (e) {
    return {props:{posts:false}}
}
}
