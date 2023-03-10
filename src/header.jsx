import './index.css'
import { useState } from 'react'
import { Link } from "react-router-dom"

const Header = ()=>{

    const [openMenu, setOpenMenu] = useState(false);
    const handleMenuOpen = () => {
        setOpenMenu(!openMenu);
    };
    
    function onClickHandleA () {
        window.location.replace("https://recruit.kddi-webcommunications.co.jp/recruitment/")
    }

    return(
        <>
        <div className=' relative'>
            <header className='w-full bg-haefwhite fixed z-[999]'>
                <div className=' w-full m-cen flex items-center p-header-flex justify-between'>
                <Link to="/" className='relative z-[350] w-sp-logos top-[5px] ml-[20px] max-w-[130px] lg:w-pc-logos lg:top-[10px] lg:ml-[5%]'>
                    <h1>
                        <img src="logo_kddi.png" alt="KDDIウェブコミュニケーションズ" className=' w-full'/>
                    </h1>
                </Link>
                    <button onClick={handleMenuOpen} type="button" className="h-8 w-8 z-50 mr-5 relative flex flex-wrap justify-center items-center lg:hidden">
                        <div className={openMenu ? 'w-8 h-[4px] bg-black translate-y-2.5 rotate-45 rounded transition duration-500 ease-in-out' 
                        : 'w-8 h-[4px] bg-black rounded transition duration-500 ease-in-out'}></div>
                        <div className={openMenu ? 'opacity-0 transition duration-500 ease-in-out' 
                        : 'w-8 h-[4px] bg-black rounded transition duration-500 ease-in-out'}></div>
                        <div className={openMenu ? 'w-8 h-[4px] bg-black -translate-y-1.5 -rotate-45 rounded transition duration-500 ease-in-out' 
                        : 'w-8 h-[4px] bg-black rounded transition duration-500 ease-in-out'}></div>
                    </button>
                    
                    <div className={
                            openMenu
                                ? 'text-left fixed top-0 w-[100%] h-screen flex flex-col justify-start pt-8 px-3 z-30 opacity-100 bg-[#FCF1C8] ease-linear duration-300'
                                : 'fixed z-[-100] opacity-0 top-[-50%] ease-linear duration-300 lg:top-0 lg:opacity-100 lg:z-20 lg:contents'
                            }>
                        <nav className='mt-[60px] ml-[5%] text-2xl font-bold lg:relative lg:flex lg:mt-0 lg:w-[70%] lg:justify-center'>
                            <Link to="/" className='lg:w-[15%] lg:mt-2'>
                                <div>
                                    <p>Top</p>
                                    <p className=' text-[14px]'>トップ</p>
                                </div>
                            </Link>
                            
                            <Link to="/workstyle" className='mt-4 lg:mt-2 lg:w-[15%]'>
                                <div>
                                    <p>Workstyle</p>
                                    <p className=' text-[14px]'>働き方</p>
                                </div>
                            </Link>
                           
                            <Link to="/switch" className='mt-4 lg:mt-2 lg:w-[15%]'>
                                <div>
                                    <p>My switch</p>
                                    <p className=' text-[14px]'>社員のON・OFF</p>
                                </div>
                            </Link>
                            
                            <Link to="/office" className='mt-4 lg:mt-2 lg:w-[15%]'>
                                <div>
                                    <p>Office</p>
                                    <p className=' text-[14px]'>オフィス</p>
                                </div>
                            </Link>
                            
                            <div className='mt-4 lg:mt-2 lg:w-[15%]' onClick={onClickHandleA}>
                                <p className=' sm-mt-16'>Information</p>
                                <p className=' text-[14px]'>募集情報</p>
                            </div>
                        </nav>
                        <div className='absolute w-[18%] opacity-80 top-[15%] right-[20%] z-30 lg:hidden'>
                            <div className=" w-full p-[100%] rounded-[50%] bg-[#FFD52B] blur-[8px] lg:hidden">
                            </div>
                        </div>
                        <div className="absolute w-[15%] top-[30%] right-[5%] z-30 lg:hidden">
                            <div className="w-full p-[100%] rounded-[50%] bg-[#F7FF00] blur-[8px]">
                            </div>
                        </div>
                        <div className="absolute w-[25%] top-[50%] right-[30%] z-30 lg:hidden">
                            <div className="w-full p-[100%] rounded-[50%] bg-[#FD9503] blur-[8px]">
                            </div>
                        </div>
                    </div>
                        
                    </div>            
                </header>
            </div>
        </>
    )
}

export default Header