import React from 'react'
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import { IoIosNotificationsOutline } from 'react-icons/io'

const Header = () => {
    return (
        <header className='flex flex-col w-full p-3'>
            <nav className='flex gap-10 justify-between items-center w-full'>
                <div className='flex gap-2 items-center w-[70%]'>
                    <strong className='text-black min-w-fit'>اسم المتجر</strong>
                    <div className='flex gap-2 relative w-full'>
                        <input type="text" className='btn-black-rounded' placeholder='ابحث...' />
                        <CiSearch size={25} className='absolute left-2 top-1/2 -translate-y-1/2 bg-orange-200 p-0.5 rounded-full cursor-pointer transition-all hover:bg-orange-300 active:bg-orange-200' />
                    </div>
                </div>

                <div className='flex gap-4 items-center'>
                    <div className='relative p-1 transition-all rounded-md bg-gray-100/80 hover:bg-gray-200 cursor-pointer'>
                        <IoIosNotificationsOutline size={25} />
                        <span className='w-[17px] text-white flex flex-col gap-2 justify-center items-center h-[17px] absolute -top-1 -right-1 p-0.5 rounded-full bg-orange-500 text-xs'>
                            3
                        </span>
                    </div>
                    <div className='relative p-1 transition-all rounded-md bg-gray-100/80 hover:bg-gray-200 cursor-pointer'>
                        <CiShoppingCart size={25} />
                        <span className='w-[17px] text-white flex flex-col gap-2 justify-center items-center h-[17px] absolute -top-1 -right-1 p-0.5 rounded-full bg-orange-500 text-xs'>
                            3
                        </span>
                    </div>
                    <div className='relative'>
                        <img src="/images/pp.jfif" alt="" className='min-w-[33px] h-[33px] rounded-full cursor-pointer shadow-md' />
                    </div>
                </div>
            </nav>

            <div className='flex flex-col gap-2 mt-5'>
                <div className='relative'>
                    <img src="/images/header-bg.png" alt="" className='hidden md:block w-full mx-auto rounded-3xl' />
                    <img src="/images/header-bg-small.png" alt="" className='block opacity-35 md:hidden w-full mx-auto rounded-3xl' />
                    <div className='absolute right-0 top-0 w-full h-full flex flex-col z-10'>
                        <div className='my-auto p-5 flex flex-col md:w-1/2'>
                            <p className='text-gray-500 text-base'>ستجد جميع ما يدور في بالك</p>
                            <h1 className='text-3xl text-gray-800 font-bold'>[أسم المتجر] - اسلوب تفكيرك ونمط حياتك يبدأ وينتهي هنا</h1>
                            <small className='mt-2'>
                                ارتقِ بأسلوبك وكن مميزًا مع أحدث صيحات الموضة لجميع أفراد العائلة.
                                <br />
                                اختر من بين تشكيلات متنوعة تُناسب كل الأذواق.
                            </small>
                            <div className='w-fit'>
                                <button style={{
                                    paddingLeft: "23px",
                                    paddingRight: "23px",
                                }} className='btn-black-fill mt-5 md:text-base text-sm'>
                                    ابدأ التسوق
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
