import { Icon } from '@iconify/react/dist/iconify.js'
import SimpleBar from './SimpleBar.jsx'
import CartSidebar from './CartSidebar.jsx'

function BottomBar() {
    return (
        <div className='h-[72px] flex items-center fixed bottom-0 left-0 right-0 bg-white z-50 shadow-md'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    <SimpleBar />
                    <Icon icon="material-symbols-light:search" className='text-2xl text-gray-500'/>
                    <Icon icon="material-symbols-light:home-outline" className='text-2xl text-gray-500'/>
                    <CartSidebar span={false} />
                    <Icon icon="arcticons:goodwy-contacts" className='text-2xl text-gray-500' />

                </div>
            </div>
        </div>
    )
}

export default BottomBar