import MainLayout from "../../components/Layout"
import { sql_query } from "../../lib/db"
import Link from "next/link"

const Product = (props) => {
  const {posts} =props
  return (
    <MainLayout>
      <div className="bg-cover w-full h-32 shadow sm:h-100" style={{ backgroundImage: 'url(/image/bannerproduk.jpg)' }}>
      </div>
      <div className="text-center mx-1 sm:mx-10">
        <div className="my-5 sm:my-10">
          <span className="text-2xl sm:text-3xl">Produk</span>
        </div>
        <div className="grid grid-cols-2 text-sm md:grid-cols-4 md:text-base">
        {posts.map( (item)=>
          <Link href={item.link}><a>
            <div className="flex flex-col gap-2 p-5 my-2 bg-white hover:bg-gray-100" key=''>
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
            </div> </a>
          </Link>)}
        </div>
      </div>
   
    </MainLayout>
  )
}


export async function getStaticProps(context){
  try {
    // 'SELECT * FROM kriyathor ORDER BY sold_produk DESC LIMIT 4'
    const results = await sql_query('SELECT * FROM kriyathor')
    let posts = JSON.parse(JSON.stringify(results))
    return {
      props : {posts}
    };
} catch (e) {
    return {props:{posts:false}}
}
}

export default Product