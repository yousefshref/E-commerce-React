import React from 'react'

const Categories = () => {
    const categories = [
        {
            id: 1,
            name: "ملابس اطفال",
            description: "تصفيات الصيف واسعار مخفضة",
            img: "https://cdn-eu.dynamicyield.com/api/9876644/images/28a647e0654a__4110a-3x2-1-reebok-x-hm-2-8y-v2.webp",
        },
        {
            id: 2,
            name: "ملابس رجالي",
            description: "جميع الانواع والمقاسات",
            img: "https://cdn-eu.dynamicyield.com/api/9876644/images/c2e3548db124__ms40tne-denim-update-3x2-teaser.webp",
        },
        {
            id: 3,
            name: "ملابس انيقة وجذابة",
            description: "جميع ما تحلم به كل امرأه",
            img: "/images/women-category.png",
        },
        {
            id: 4,
            name: "ملابس رياضية",
            description: "رجالي ونسائي والاطفال",
            img: "/images/spots.png",
        },
    ]
    return (
        <section className='p-5 bg-gray-200 min-h-screen flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
                <div className='flex md:flex-row flex-col gap-3 items-center justify-around'>
                    {categories.map((category) => (
                        <div key={category.id} className='md:w-1/4 shadow-lg bg-white p-3 rounded-xl flex flex-col gap-2'>
                            <h3 className='font-bold md:text-[1.8vw] text-2xl'>{category.name}</h3>
                            <small className='text-gray-500 md:text-[1.2vw] -mt-1'>{category.description}</small>
                            <img src={category.img} alt={category.name} className='w-full rounded-2xl' />
                            <button className='btn-dark-orange-fill'>
                                مشاهدة
                            </button>
                        </div>
                    ))}
                </div>
                <div className='mt-3 relative'>
                    <img src="/images/best-experice.png" className='rounded-xl shadow-md' alt="" />
                    <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-end z-10'>
                        <div className='w-full max-w-[140px] lg:mb-[5vw] mb-[3vw] ms-[5vw]'>
                            <button className='btn-dark-orange-fill' style={{
                                paddingLeft: "25px",
                                paddingRight: "25px",
                            }}>
                                تسجيل الأن
                            </button>
                        </div>
                    </div>
                    {/* <div className='absolute flex gap-4 top-[90%] w-[600px] items-center left-[72%] translate-x-[-50%] translate-y-[-50%] z-10'>
                        <p className='min-w-fit'>ليس لديك حساب ؟</p>
                        <div className='w-full max-w-[140px]'>
                            <button className='btn-black-rounded'>انشاء حساب</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Categories
