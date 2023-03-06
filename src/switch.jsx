import React, {useState} from 'react'
import './index.css'
import ScrollToTopOnMount from "./ScrollToTopOnMount";
import Header from './Header';
import Footer from './Footer';

const Switch =  () =>{

    const [PushBtn1, setPushBtn1] = useState(false);
    const handlePushBtn1 = () => {
        setPushBtn1(!PushBtn1);
    };

    const [PushBtn2, setPushBtn2] = useState(false);
    const handlePushBtn2 = () => {
        setPushBtn2(!PushBtn2);
    };

    const [PushBtn3, setPushBtn3] = useState(false);
    const handlePushBtn3 = () => {
        setPushBtn3(!PushBtn3);
    };

    const [PushBtn4, setPushBtn4] = useState(false);
    const handlePushBtn4 = () => {
        setPushBtn4(!PushBtn4);
    };

    return(
        <>
        <ScrollToTopOnMount/>
        <Header/>
        <main className="pt-60 lg:pt-[120px]">
            
            <section className="myswitch w-full">
                <div className="myswitch__top w-[90%] max-w-[600px] lg:max-w-[800px] flex m-cen justify-between items-end">
                    <div className="myswitch__top_left">
        
                        <h2 className="myswitch__h2 pt-[30px] text-[32px] leading-[30px] lg:font-medium lg:text:[54px] lg:leading-[64px]">
                            My switch<br/>
                            <span className="myswitch__h2_small text-[24px] lg:text-[36px]">社員のON・OFF</span>
                        </h2>
                    </div>
        
                    <p className="mtop__img w-[40%] max-w-[210px] lg:w-[50%] lg:max-w-[240px]">
                        <img src="myswitch.png" alt="社員のON・OFF" className='w-full'/>
                    </p>
                </div>
                
            </section>

            <div className="myswitch__flex lg:w-[90%] lg:flex lg:m-cen lg:flex-wrap">
                <div className="relative lg:w-[50%]">
                
                    <section className= {PushBtn1 
                        ?"myswitch__con ON1 w-[90%] pt-60 lg:pt-[120px] relative m-cen transition opacity-0 z-[-1]"
                        :"myswitch__con ON1 w-[90%] pt-60 lg:pt-[120px] relative m-cen transition opacity-100 z-[100]"
                    }>
                        <h2 className="myswitch__img w-full">
                            <img src="kawakamion.png" alt="広報室 川上智恵" className='w-full rounded-t-[10px]'/>
                        </h2>

                        <button onClick={handlePushBtn1} type='button' className="hover:animate-shadow-inset-center myswitch__onbtn myswitch__btn1 cursor-pointer absolute top-[70px] right-[10px] min-w-[70px] min-h-[70px] w-[15%] h-[15%] bg-[#FD9503] rounded-[10px] flex items-center justify-center 
                        lg:top-[19%] lg:right-[5%] lg:w-[90px] lg:h-[90px] transition">
                            <p className="ON text-[10px] text-[#fff] lg:text-center lg:text-[18px]">
                                <span className="ON__big text-[24px] lg:text-[30px]">ON</span><br/>
                                のわたし</p>
                        </button>
        
                        <p className="myswitch__txt w-full pt-[30px] lg:text-lg lg:font-medium leading-[36px] lg:pt-60">
                            広報として働いています。
                            広報業務全般(広報戦略の立案、メディア対応、プレスリリース作成、対外対応など)
                            にやりがいを感じながら仕事をしています。
                        </p>
        
                    </section>
                    
                    <div className="switch1__defo absolute top-0">
                        <section className={PushBtn1
                        ?"myswitch__con OFF1 w-[90%] pt-60 lg:pt-[120px] relative m-cen transition opacity-1 z-[100]"
                        :"myswitch__con OFF1 w-[90%] pt-60 lg:pt-[120px] relative m-cen transition opacity-0 z-[-1]"
                        }>

                            <h2 className="myswitch__img w-full">
                                <img src="kawakamioff.png" alt="広報室 川上智恵" className='w-full rounded-t-[10px]'/>
                            </h2>
                            <button onClick={handlePushBtn1} type='button' className="hover:animate-shadow-inset-center cursor-pointer absolute top-[70px] right-[10px] min-w-[70px] min-h-[70px] w-[15%] h-[15%] bg-[#FFF] rounded-[10px] flex items-center justify-center 
                            lg:top-[19%] lg:right-[5%] lg:w-[90px] lg:h-[90px] transition border border-[#FD9503]">
                                <p className="OFF text-[10px] text-[#FD9503] lg:text-center lg:text-[18px]">
                                    <span className="OFF__big text-[24px] lg:text-[30px]">OFF</span><br/>
                                    のわたし</p>
                            </button>
            
                            <p className="myswitch__txt w-full pt-[30px] lg:text-lg lg:font-medium leading-[36px] lg:pt-60">
                                休憩時間はスマホで動画を見たり、インスタやTwitterで情報収集していることが多いです。
                                休みの日は家族で過ごしています。
                            </p>
            
                        </section>
            
                    </div>
                </div>
                    
                <div className="switch2 relative lg:w-[50%]">
    
                    <section className={PushBtn2
                        ?"myswitch__con ON2 w-[90%] pt-60 lg:pt-[120px] relative m-cen transition opacity-0 z-[-1]"
                        :"myswitch__con ON2 w-[90%] pt-60 lg:pt-[120px] relative m-cen transition opacity-100 z-[100]"
                    }>
    
                        <h2 className="myswitch__img w-full">
                            <img src="kamimorion.png" alt="広報室 室長 神森 勉" className='w-full rounded-t-[10px]'/>
                        </h2>

                        <button onClick={handlePushBtn2} type='button' className="hover:animate-shadow-inset-center cursor-pointer absolute top-[70px] right-[10px] min-w-[70px] min-h-[70px] w-[15%] h-[15%] bg-[#FD9503] rounded-[10px] flex items-center justify-center 
                                lg:top-[19%] lg:right-[5%] lg:w-[90px] lg:h-[90px] transition">
                                    <p className="OFF text-[10px] text-[#fff] lg:text-center lg:text-[18px]">
                                        <span className="OFF__big text-[24px] lg:text-[30px]">ON</span><br/>
                                        のわたし</p>
                        </button>

                        <p className="myswitch__txt myswitch__txt_last w-full pt-[30px] lg:text-lg lg:font-medium leading-[36px] lg:pt-60">
                            広報業務・自社サイトの運営・お客様サイトの構築を担当しています。
                            嘘をつかないことを意識して仕事しています。
                        </p>
    
                    </section>
                
                    <div className="switch2__defo absolute top-0">
                        <section className={PushBtn2 
                        ?"myswitch__con OFF1 w-[90%] pt-60 lg:pt-[120px] relative m-cen transition opacity-1 z-[100]"
                        :"myswitch__con OFF1 w-[90%] pt-60 lg:pt-[120px] relative m-cen transition opacity-0 z-[-1]"
                        }>
                        
                        <h2 className="myswitch__img w-full">
                            <img src="kamimorioff.png" alt="広報室 室長 神森 勉" className='w-full rounded-t-[10px]'/>
                        </h2>
                        
                        <button onClick={handlePushBtn2} type='button' className="hover:animate-shadow-inset-center cursor-pointer absolute top-[70px] right-[10px] min-w-[70px] min-h-[70px] w-[15%] h-[15%] bg-[#FFF] rounded-[10px] flex items-center justify-center 
                            lg:top-[19%] lg:right-[5%] lg:w-[90px] lg:h-[90px] transition border border-[#FD9503]">
                                <p className="OFF text-[10px] text-[#FD9503] lg:text-center lg:text-[18px]">
                                    <span className="OFF__big text-[24px] lg:text-[30px]">OFF</span><br/>
                                    のわたし</p>
                        </button>

                        <p className="myswitch__txt myswitch__txt_last w-full pt-[30px] lg:text-lg lg:font-medium leading-[36px] lg:pt-60">
                            島なのですることがないので、写真撮影やドローン撮影が趣味になりました。
                            また、知人から畑を借りてバタフライピーを育てていて、今年からオンラインでハーブティーとして販売します
                        </p>
                
                        </section>
                    </div>
                </div>

                <div className="relative lg:w-[50%]">
                
                    <section className= {PushBtn3
                        ?"myswitch__con ON1 w-[90%] pt-60 lg:pt-[120px] relative m-cen transition opacity-0 z-[-1]"
                        :"myswitch__con ON1 w-[90%] pt-60 lg:pt-[120px] relative m-cen transition opacity-100 z-[100]"
                    }>
                        <h2 className="myswitch__img w-full">
                            <img src="kawakamion.png" alt="広報室 川上智恵" className='w-full rounded-t-[10px]'/>
                        </h2>
                        <button onClick={handlePushBtn3} type='button' className="hover:animate-shadow-inset-center myswitch__onbtn myswitch__btn1 cursor-pointer absolute top-[70px] right-[10px] min-w-[70px] min-h-[70px] w-[15%] h-[15%] bg-[#FD9503] rounded-[10px] flex items-center justify-center 
                        lg:top-[19%] lg:right-[5%] lg:w-[90px] lg:h-[90px] transition">
                            <p className="ON text-[10px] text-[#fff] lg:text-center lg:text-[18px]">
                                <span className="ON__big text-[24px] lg:text-[30px]">ON</span><br/>
                                のわたし</p>
                        </button>
        
                        <p className="myswitch__txt w-full pt-[30px] lg:text-lg lg:font-medium leading-[36px] lg:pt-60">
                            広報として働いています。
                            広報業務全般(広報戦略の立案、メディア対応、プレスリリース作成、対外対応など)
                            にやりがいを感じながら仕事をしています。
                        </p>
        
                    </section>
                    
                    <div className="switch1__defo absolute top-0">
                        <section className={PushBtn3
                        ?"myswitch__con OFF1 w-[90%] pt-60 lg:pt-[120px] relative m-cen transition opacity-1 z-[100]"
                        :"myswitch__con OFF1 w-[90%] pt-60 lg:pt-[120px] relative m-cen transition opacity-0 z-[-1]"
                        }>

                            <h2 className="myswitch__img w-full">
                                <img src="kawakamioff.png" alt="広報室 川上智恵" className='w-full rounded-t-[10px]'/>
                            </h2>
                            <button onClick={handlePushBtn3} type='button' className="hover:animate-shadow-inset-center cursor-pointer absolute top-[70px] right-[10px] min-w-[70px] min-h-[70px] w-[15%] h-[15%] bg-[#FFF] rounded-[10px] flex items-center justify-center 
                            lg:top-[19%] lg:right-[5%] lg:w-[90px] lg:h-[90px] transition border border-[#FD9503]">
                                <p className="OFF text-[10px] text-[#FD9503] lg:text-center lg:text-[18px]">
                                    <span className="OFF__big text-[24px] lg:text-[30px]">OFF</span><br/>
                                    のわたし</p>
                            </button>
            
                            <p className="myswitch__txt w-full pt-[30px] lg:text-lg lg:font-medium leading-[36px] lg:pt-60">
                                休憩時間はスマホで動画を見たり、インスタやTwitterで情報収集していることが多いです。
                                休みの日は家族で過ごしています。
                            </p>
            
                        </section>
            
                    </div>
                </div>
                    
                <div className="switch2 relative lg:w-[50%] pb-60 lg:pb-[120px]">
    
                    <section className={PushBtn4
                        ?"myswitch__con ON2 w-[90%] pt-60 lg:pt-[120px] relative m-cen transition opacity-0 z-[-1]"
                        :"myswitch__con ON2 w-[90%] pt-60 lg:pt-[120px] relative m-cen transition opacity-100 z-[100]"
                    }>
    
                        <h2 className="myswitch__img w-full">
                            <img src="kamimorion.png" alt="広報室 室長 神森 勉" className='w-full rounded-t-[10px]'/>
                        </h2>

                        <button onClick={handlePushBtn4} type='button' className="hover:animate-shadow-inset-center cursor-pointer absolute top-[70px] right-[10px] min-w-[70px] min-h-[70px] w-[15%] h-[15%] bg-[#FD9503] rounded-[10px] flex items-center justify-center 
                                lg:top-[19%] lg:right-[5%] lg:w-[90px] lg:h-[90px] transition">
                                    <p className="OFF text-[10px] text-[#fff] lg:text-center lg:text-[18px]">
                                        <span className="OFF__big text-[24px] lg:text-[30px]">ON</span><br/>
                                        のわたし</p>
                        </button>

                        <p className="myswitch__txt myswitch__txt_last w-full pt-[30px] lg:text-lg lg:font-medium leading-[36px] lg:pt-60">
                            広報業務・自社サイトの運営・お客様サイトの構築を担当しています。
                            嘘をつかないことを意識して仕事しています。
                        </p>
    
                    </section>
                
                    <div className="switch2__defo absolute top-0">
                        <section className={PushBtn4
                        ?"myswitch__con OFF1 w-[90%] pt-60 lg:pt-[120px] relative m-cen transition opacity-1 z-[100]"
                        :"myswitch__con OFF1 w-[90%] pt-60 lg:pt-[120px] relative m-cen transition opacity-0 z-[-1]"
                        }>
                        
                            <h2 className="myswitch__img w-full">
                                <img src="kamimorioff.png" alt="広報室 室長 神森 勉" className='w-full rounded-t-[10px]'/>
                            </h2>
                            
                            <button onClick={handlePushBtn4} type='button' className="hover:animate-shadow-inset-center cursor-pointer absolute top-[70px] right-[10px] min-w-[70px] min-h-[70px] w-[15%] h-[15%] bg-[#FFF] rounded-[10px] flex items-center justify-center 
                                lg:top-[19%] lg:right-[5%] lg:w-[90px] lg:h-[90px] transition border border-[#FD9503]">
                                    <p className="OFF text-[10px] text-[#FD9503] lg:text-center lg:text-[18px]">
                                        <span className="OFF__big text-[24px] lg:text-[30px]">OFF</span><br/>
                                        のわたし</p>
                            </button>

                            <p className="myswitch__txt myswitch__txt_last w-full pt-[30px] lg:text-lg lg:font-medium leading-[36px] lg:pt-60">
                                島なのですることがないので、写真撮影やドローン撮影が趣味になりました。
                                また、知人から畑を借りてバタフライピーを育てていて、今年からオンラインでハーブティーとして販売します
                            </p>
                
                        </section>
                    </div>
                </div>
            </div>
            
        </main>
        <Footer/>
        </>
    )
}

export default Switch;
