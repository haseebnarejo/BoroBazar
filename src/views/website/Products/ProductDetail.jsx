import MainProductDetail from './MainProductDetail'
import Banner from '../../../components/shared/Banner'

function ProductDetail() {
  return (
    <div>
        <MainProductDetail />
        <div className='my-20'>
        <Banner
          title="Make your online shop easier with our mobile app"
          subtitle="BoroBazar makes online grocery shopping fast and easy. Get groceries delivered and order the best of seasonal farm fresh food."
          appStoreLinks={[
            "assets/images/other/app-store.png",
            "assets/images/other/play-store.png",
          ]}
          extraImage="assets/images/banner/banner-img.png"
          heightClass="h-[388px] 2xl:h-[450px] overflow-hidden"
          containerClass="flex flex-col items-center justify-center md:items-start text-center md:text-left md:block 2xl:w-1/2 overflow-hidden"
          titleClass="text-2xl sm:text-2xl 2xl:text-[42px] font-bold mb-3 2xl:leading-[3rem]"
          subtitleClass="text-[14px] 2xl:text-[17px] text-gray-500 mb-8 md:w-10/12 xl:leading-8"
        />
      </div>
    </div>
  )
}

export default ProductDetail