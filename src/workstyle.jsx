import './index.css'
import ScrollToTopOnMount from "./ScrollToTopOnMount";
import Header from './Header'
import { Link } from 'react-router-dom'

const Workstyle = () =>{
    return(
        <>
            <ScrollToTopOnMount/>
            <Header/>
                    <main className='pt-60'>
                    <section className="w-full h-screen bg-white relative z-[100]">

                        <h2 className="w-[90%] text-[32px] font-medium m-cen pt-60 lg:w-[50%] lg:text-5xl lg:pt-[40px]">
                            あなたはどちらですか？
                        </h2>

                        <div className="flex m-cen pt-[120px] w-[90%] gap-[30px] lg:pt-60 lg:w-[50%] lg:gap-[240px]">
                            <div className="w-[50%] rounded-[10px] border-2 border-[#FD9503] lg:min-w-[200px] workstyle-btn1">
                                <Link to="/workstylesin">
                                    <p className="m-cen w-[50%] text-[16px] font-medium pt-[30px] lg:w-[80%] lg:text-2xl lg:pt-60">
                                        新卒採用<br/>
                                        希望者の方
                                    </p>
                                    <p className="w-[60%] m-cen pt-[30px] pb-[30px] lg:w-[80%] lg:pb-60">
                                        <img src="workstayle1.png" alt="新卒採用希望者の方" className='w-full'/>
                                    </p>
                                </Link>
                            </div>
            
                            <div className="w-[50%] rounded-[10px] border-2 border-[#FD9503] lg:min-w-[200px] workstyle-btn2">
                                <Link to="/workstyletyu">
                                    <p className="m-cen w-[50%] text-[16px] font-medium pt-[30px] lg:w-[80%] lg:text-2xl lg:pt-60">
                                        中途採用<br/>
                                        希望者の方
                                    </p>
                                    <p className="w-[60%] m-cen pt-[30px] pb-[30px] lg:w-[80%] lg:pb-60">
                                        <img src="workstayle2.png" alt="中途採用希望者の方" className='w-full'/>
                                    </p>
                                </Link>
                            </div>
                            
                        </div>
                    </section>
                </main>
        </>
    )
}

export default Workstyle;