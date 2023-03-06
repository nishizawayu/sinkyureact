import ScrollToTopOnMount from './ScrollToTopOnMount';
import Header from './Header'
import Footer from './Footer'
import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,EffectFade} from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import './index.css'

const First = () =>{

    return(
        <>
            <ScrollToTopOnMount/>
            <Header/>
            <main className='pt-[90px]'>
                <article className=" pt-60 md:pt-0">
                    <section className=" relative pt-60 pb-[120px] lg:w-full lg:h-[80vh] lg:flex m-cen">
                        <div className="fv__txt">
                            <h2 className="animate-slide-in-bck-left absolute z-10 top-0 left-[5%] text-[32px] font-bold lg:top-[3%] lg:left-[3%] lg:text-[48px]">
                                理想の働き方を<br />
                                自分で選べる<br />
                                この場所で<br />
                            </h2>
                            <p className="animate-slide-in-bck-left fv__h2 fv__h2_bottom slideInLeft absolute z-10 bottom-0 left-[5%] text-[20px] font-bold lg:text-[32px] ">
                                世界が<span className="text-[26px] font-bold lg:text-[36px]">“当たり前”</span>に使う<br />
                                ITサービスを、<br />
                                共につくろう。
                            </p>
                        </div>
                        
                        <div className="animate-slide-in-bck-bottom overflow-hidden w-full h-[60vh] lg:w-[100%] lg:h-[80vh] lg:ml-[20%] rounded-md">
                            <Swiper
                                slidesPerView={1}
                                speed={1000}
                                effect={"fade"}
                                autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                                }}
                                loop={true}
                                modules={[Autoplay,EffectFade]}
                                className="mySwiper relative w-full lg:w-full lg:m-cen"
                            >
                                
                                <SwiperSlide><img src="img1.jpg" alt="オフィスの様子" className="w-full"/></SwiperSlide>
                                <SwiperSlide><img src="office-img2.jpg" alt="オフィスの様子" className="w-full"/></SwiperSlide>
                                <SwiperSlide><img src="office-img3.jpg" alt="オフィスの様子" className="w-full"/></SwiperSlide>
                                <SwiperSlide><img src="office-img4.jpg" alt="オフィスの様子" className="w-full"/></SwiperSlide>
                            </Swiper>
                        </div>
                        
                    </section>
            
                    <section className="pt-[120px] pb-[120px] lg:pt-[240px] lg:pb-[240px]">
                        <h2 className="pt-[30px] text-center lg:w-full lg:pt-[60px] text-[36px] font-bold">About<br />
                            <span className="text-lg lg:text-[28px] font-bold">オフィスに込められた思い</span></h2>
                        <p className=" pt-[60px] w-[80%] m-cen text-lg font-medium leading-[35px] lg:pt-120ox lg:w-[50%] lg:text-[24px] lg:leading-[48px]">
                            KDDIウェブコミュニケーションは、「オフィスにいなくても仕事はできるけれど、オフィスに来たい」をコンセプトに、2016年9月から東京本社を現在の東京都港区南青山へと移転しました。その後、2020年2月末、新型コロナウィルス感染症の流行により、在宅勤務を中心とした働き方へと移行しました。また、東京本社へ出社しなくても働けるようになったことから、地方在住者の採用が増え、IターンやUターンをする社員も出てきました。
                            <br /><br />
                            しかしながら、コロナ禍前と比べると、これまで出社の際に行われていた雑談や偶発的なコミュニケーションが減少したため、社員はチームごとに合宿や東京本社への出張などを通して、コミュニケーションを図ってきました。
                            <br /><br />
                            さらに、社員間のコミュニケーションやアイデア創出の場として、集まってコミュニケーションをとれるオフィスは継続して必要と判断し、新しい働き方に合わせたオフィスにリニューアルすることにしました。
                            また、本リニューアルをベースとして、今後もKDDIウェブコミュニケーションズでは、働く環境や手段などをアップデートしていく予定です。
                        </p>
                    </section>
            
                    <div className="bg-[#fff] relative z-10">
                        <section className="relative rounded-t-[10px] bg-[#FEE57F] z-10">
                            <div className="grid lg:pt-60 lg:pb-60">
                                <h2 className="pt-[30px] text-center lg:w-full lg:pt-[60px] text-[36px] font-bold con-h2">Workstyle<br />
                                    <span className="text-lg lg:text-[28px] font-bold">働き方</span>
                                </h2>
                                <p className="w-[35%] lg:w-[40%] pt-[60px] m-cen con-img">
                                    <img src="workstayle1.png" alt="働き方" className="w-full"/>
                                </p>
                                
                                <div className="con-block">
                                    <p className="w-full text-center pt-60 text-lg font-medium leading-10 con-txt">
                                        自分がもっとも成果をだしやすい<br />
                                        環境が見つかる<br />
                                        自分で選ぶ働き方をご紹介します。
                                    </p>

                                    <Link to="/workstyle">
                                        <div className="w-[90%] flex flex-row-reverse pb-60 pt-60 relative con-btn">
                                            <div className="before:ease-out before:duration-700 before:content-[''] before:absolute before:w-[50px] before:h-[50px] before:rounded-[50%] before:bg-[#FA513F] before:z-[14] before:right-[15%] before:top-[35px] before:hover:right-[-2%] before:hover:top-[35px] before:lg:w-[70px] before:lg:h-[70px]">
                                                <p className="relative right-[3%] top-0 z-[14] font-bold lg:text-2xl">詳しく見る</p>
                                            </div>
                                        </div>                                        
                                    </Link>

                                </div>
                                
                            </div>
                        </section>
                    </div>
        
                    <div className="bg-[#FEE57F] relative z-10">
                        <section className="con relative rounded-t-[10px] bg-[#fff] z-10">
                            
                            <div className="gridri lg:pt-60 lg:pb-60">
                                <h2 className="pt-[30px] text-center lg:w-full lg:pt-[60px] text-[36px] font-bold con-h2">My switch<br />
                                    <span className="text-lg lg:text-[28px] font-bold">社員のON・OFF</span>
                                </h2>
                                <p className="w-full text-center pt-60 text-lg font-medium leading-10 con-txt">
                                    いいOFF（休み）がないと<br />
                                    いいON（仕事）はできない。<br />
                                    KDDIウェブコミュニケーションズ<br />
                                    ならではのON・OFFを<br />
                                    ご覧ください。<br />
                                </p>
                                
                                <p className="w-[35%] pt-[60px] m-cen con__img_right con-img">
                                    <img src="./myswitch.png" alt="社員のON・OFF" className="w-full"/>
                                </p>

                                <Link to="/switch">
                                    <div className="w-[90%] flex flex-row-reverse pb-60 pt-60 relative con-btn">
                                        <div className="before:ease-out before:duration-700 before:content-[''] before:absolute before:w-[50px] before:h-[50px] before:rounded-[50%] before:bg-[#FA513F] before:z-[14] before:right-[15%] before:top-[35px] before:hover:right-[-2%] before:hover:top-[35px] before:lg:w-[70px] before:lg:h-[70px]">
                                            <p className="relative right-[3%] top-0 z-[14] font-bold lg:text-2xl">詳しく見る</p>
                                        </div>
                                    </div>
                                </Link>
                                
                            </div>
                        </section>
                    </div>
                    
                    <div className="bg-[#fff] relative z-10">
                        <section className="con relative rounded-t-[10px] bg-[#FEE57F] z-10">
                            <div className="grid lg:pt-60 lg:pb-60">
                                <h2 className="pt-[30px] text-center lg:w-full lg:pt-[60px] text-[36px] font-bold con-h2">Office<br />
                                    <span className="text-lg lg:text-[28px] font-bold">オフィス紹介</span>
                                </h2>
                                <p className="w-[35%] pt-[60px] m-cen con-img">
                                    <img src="./office.png" alt="オフィス紹介" className="w-full"/>
                                </p>
                        
                                <div className="con-block">
                                    <p className="w-full text-center pt-60 text-lg font-medium leading-10 con-img">
                                        社員の憩いの場で<br />
                                        コミュニケーションが生まれる場所。<br />
                                        そんなオフィスをご紹介します。
                                    </p>

                                    <Link to="/office">
                                        <div className="w-[90%] flex flex-row-reverse pb-60 relative con-btn pt-60">
                                            <div className="before:ease-out before:duration-700 before:content-[''] before:absolute before:w-[50px] before:h-[50px] before:rounded-[50%] before:bg-[#FA513F] before:z-[14] before:right-[15%] before:top-[35px] before:hover:right-[-2%] before:hover:top-[35px] before:lg:w-[70px] before:lg:h-[70px]">
                                                <p className="relative right-[3%] top-0 z-[14] font-bold lg:text-2xl">詳しく見る</p>
                                            </div>
                                        </div>
                                    </Link>
                                    
                                </div>
                            </div>
                        </section>
                    </div>
                    
                    <div className="bg-[#FEE57F] relative z-10">
                        <div className="relative rounded-t-[10px] bg-[#fff] z-100 m-cen">
                            <div className="w-full m-cen pb-[120px] lg:pd-[240px]">
                                <p className="w-100 text-center text-xl font-bold leading-9 pt-[120px] lg:text-[36px] lg:pt-[240px]">
                                    KDDIウェブコミュニケーションズに<br />
                                    興味を持ってくれた方は</p>
                                <p className="pt-[60px] m-cen w-[80%] lg:pt-[120px] lg:w-[50%]">
                                    <img src="./info.jpg" alt="information" className="w-full"/>
                                </p>
                                <div className="w-[90%] flex flex-row-reverse pb-60 pt-60 relative">
                                    <div className="before:ease-out before:duration-700 before:content-[''] before:absolute before:w-[50px] before:h-[50px] before:rounded-[50%] before:bg-[#FA513F] before:z-[14] before:right-[15%] lg:before:right-[7%] before:top-[35px] before:hover:right-[-2%] before:hover:top-[35px] before:lg:w-[70px] before:lg:h-[70px]">
                                        <p className="relative right-[3%] top-0 z-[14] font-bold lg:text-2xl">詳しく見る</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer/>
        </>
    )
}

export default First;