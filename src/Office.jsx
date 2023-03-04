import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect, useState } from 'react'
import './index.css';

const Office = ()=>{
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
    window.scrollY > 700
        ? setIsVisible(true)
        : setIsVisible(false)
    }

    useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    function onClickHandleA () {
        window.location.replace("https://tsutaya.tsite.jp/store/lounge/")
    }

    return(
        <>
        <main className="pt-60">
            <section className="office w-full">
                <div className="office__top w-[90%] max-w-[600px] lg:max-w-[800px] lg:pt-60 flex m-cen justify-between items-end">
                    <div className="office__top_left">
                        <h2 className="office__h2 pt-[30px] text-[32px] leading-[30px] lg:font-medium lg:text-[48px] lg:leading-[64px]">
                            Office<br/>
                            <span className="office__h2_small text-[24px] lg:text-[32px]">オフィス</span>
                        </h2>
                    </div>
        
                    <p className="otop__img w-[40%] max-w-[210px] lg:w-[50%] lg:max-w-[220px]">
                        <img src="office.png" alt="社員のON・OFF" className='w-full'/>
                    </p>
                </div>

                <p className="office__ex w-full text-center text-[20px] pt-60 pb-60 font-medium lg:text-[32px] lg:pt-[120px] lg:pb-[120px]">
                    オフィス内の気になるところを<br/>
                    クリックしてください。</p>
                
                <div className="office__nav relative">

                    <p className="office__map m-cen w-[80%] pb-60 lg:w-[80%] lg:pb-[120px]" id="map">
                        <img src="office-map.png" useMap="#image-map" className='w-full '/>
                        <map name="image-map">
                            <area target="" alt="ope-btn" title="ope-btn" href="#ope" coords="392,89,90" shape="circle"/>
                            <area target="" alt="rela-btn" title="rela-btn" href="#rela" coords="807,97,89" shape="circle"/>
                            <area target="" alt="hure-btn" title="hure-btn" href="#hure" coords="1175,248,89" shape="circle"/>
                            <area target="" alt="shu-btn" title="shu-btn" href="#shu" coords="1157,540,88" shape="circle"/>
                            <area target="" alt="fam-btn" title="fam-btn" href="#fam" coords="148,571,90" shape="circle"/>
                            <area target="" alt="biz-btn" title="biz-btn" href="#biz" coords="90,244,90" shape="circle"/>
                            <area target="" alt="ope-area" title="ope-area" href="#ope" coords="878,498,643,278" shape="rect"/>
                            <area target="" alt="rela-area" title="rela-area" href="#rela" coords="881,420,1042,565" shape="rect"/>
                            <area target="" alt="hure-area" title="hure-area" href="#hure" coords="881,281,972,281,974,209,1040,207,1038,420,879,418" shape="poly"/>
                            <area target="" alt="shu1-area" title="shu1-area" href="#shu" coords="475,416,590,448" shape="rect"/>
                            <area target="" alt="fam-acea" title="fam-acea" href="#fam" coords="589,531,769,563" shape="rect"/>
                            <area target="" alt="biz-acea" title="biz-acea" href="#biz" coords="348,486,586,564" shape="rect"/>
                        </map>
                    </p>

                    <div className="office__btn_flex relative w-[80%] max-w-[400px] flex flex-wrap justify-between m-cen gap-[10px] pb-60 lg:hidden">
                        <AnchorLink href="#ope">
                            <div className="office-btn w-[100px] max-w-[100px] h-[100px] bg-[#FD9503] rounded-[10px]">
                                <p className="office-btn__txt text-xs text-white font-bold text-center w-full pt-[5px] m-cen">
                                    <span className='relative text-lg leading-[40px] after:bg-sita after:w-[30px] after:h-[1px] after:absolute after:left-[-5px] after:bottom-0'>01</span><br/>
                                    オペレーション<br/>
                                    エリア
                                </p>
                            </div>
                        </AnchorLink>

                        <AnchorLink href="#rela">
                            <div className="office-btn w-[100px] max-w-[100px] h-[100px] bg-[#FD9503] rounded-[10px]">
                                <p className="office-btn__txt office-btn__txt text-xs text-white font-bold text-center w-full pt-[5px] m-cen">
                                    <span className='relative text-lg leading-[40px] after:bg-sita after:w-[30px] after:h-[1px] after:absolute after:left-[-5px] after:bottom-0'>02</span><br/>
                                    リラックス<br/>
                                    エリア
                                </p>
                            </div>
                        </AnchorLink>
                        
                        <AnchorLink href="#biz">
                            <div className="office-btn w-[100px] max-w-[100px] h-[100px] bg-[#FD9503] rounded-[10px]">
                                <p className="office-btn__txt office-btn__txt text-xs text-white font-bold text-center w-full pt-[5px] m-cen">
                                    <span className='relative text-lg leading-[40px] after:bg-sita after:w-[30px] after:h-[1px] after:absolute after:left-[-5px] after:bottom-0'>03</span><br/>
                                    ビジネス構築<br/>
                                    エリア
                                </p>
                            </div>
                        </AnchorLink>
                            
                        <AnchorLink href="#hure">
                            <div className="office-btn w-[100px] max-w-[100px] h-[100px] bg-[#FD9503] rounded-[10px]">
                                <p className="office-btn__txt office-btn__txt text-xs text-white font-bold text-center w-full pt-[5px] m-cen">
                                    <span className='relative text-lg leading-[40px] after:bg-sita after:w-[30px] after:h-[1px] after:absolute after:left-[-5px] after:bottom-0'>04</span><br/>
                                    フレキシブル<br/>
                                    エリア
                                </p>
                            </div>
                        </AnchorLink>

                        <AnchorLink href="#fam">
                            <div className="office-btn w-[100px] max-w-[100px] h-[100px] bg-[#FD9503] rounded-[10px]">
                                <p className="office-btn__txt office-btn__txt text-xs text-white font-bold text-center w-full pt-[5px] m-cen">
                                    <span className='relative text-lg leading-[40px] after:bg-sita after:w-[30px] after:h-[1px] after:absolute after:left-[-5px] after:bottom-0'>05</span><br/>
                                    ファミレス<br/>
                                    エリア
                                </p>
                            </div>
                        </AnchorLink>
                             
                        <AnchorLink href="#shu">
                            <div className="office-btn w-[100px] max-w-[100px] h-[100px] bg-[#FD9503] rounded-[10px]">
                                <p className="office-btn__txt office-btn__txt text-xs text-white font-bold text-center w-full pt-[5px] m-cen">
                                    <span className='relative text-lg leading-[40px] after:bg-sita after:w-[30px] after:h-[1px] after:absolute after:left-[-5px] after:bottom-0'>06</span><br/>
                                    集中<br/>
                                    エリア
                                </p>
                            </div>
                        </AnchorLink>
                            
                        <AnchorLink href="#sha">
                            <div className="office-btn w-[100px] max-w-[100px] h-[100px] bg-[#FD9503] rounded-[10px]">
                                <p className="office-btn__txt office-btn__txt text-xs text-white font-bold text-center w-full pt-[5px] m-cen">
                                    <span className='relative text-lg leading-[40px] after:bg-sita after:w-[30px] after:h-[1px] after:absolute after:left-[-5px] after:bottom-0'>07</span><br/>
                                    SHARE<br/> 
                                    LOUNGE
                                </p>
                            </div>
                        </AnchorLink>
                    </div>
                </div>
                
                <div className="office-bg w-full bg-[#FEE57F] rounded-t-[10px]">
                    <AnchorLink href="#map">
                        <div className={isVisible ? "mapbtn fixed bottom-[10%] right-[30px] opacity-1 z-[200] text-white flex justify-center items-center bg-[#FD9503] rounded-[100px] w-[80px] h-[80px] text-[14px] lg:w-[100px] lg:h-[100px] lg:text-[16px] z-100" : "mapbtn fixed bottom-[10%] right-[30px] opacity-0 text-white flex justify-center items-center bg-[#FD9503] rounded-[100px] w-[80px] h-[80px] text-[14px] lg:w-[100px] lg:h-[100px] lg:text-[16px]"} id="mapbtn">
                            <p>Mapに戻る</p>
                        </div>
                    </AnchorLink>
                        
                    <section className="office__con w-[80%] max-w-[450px] lg:max-w-none pt-60 lg:[120px] m-cen grid" id="ope">
                        <h3 className="office__h3 font-bold text-2xl pt-[30px] lg:text-[36px] lg:pt-60">
                            01　オペレーションエリア
                        </h3>
    
                        <div className="offfice__bg">
                            
                        </div>

                        <div className="office__conteiner flex flex-wrap justify-between gap-[2%] lg:gap-0 lg:content-end">
                            <div className="office__img office__img_big w-full lg:mt-[20px]">
                                <img src="office-img1.png" alt="オペレーションエリアの写真" className='w-full'/>
                            </div>
                            <div className="office__img w-[30%] lg:mt-[20px]">
                                <img src="office-img2.png" alt="オペレーションエリアの写真" className='w-full'/>
                            </div>
                            <div className="office__img w-[30%] lg:mt-[20px]">
                                <img src="office-img3.png" alt="オペレーションエリアの写真" className='w-full'/>
                            </div>
                            <div className="office__img w-[30%] lg:mt-[20px]">
                                <img src="office-img4.png" alt="オペレーションエリアの写真" className='w-full'/>
                            </div>
                        </div>
    
                        <div className="office__txt font-medium pt-[30px] text-[18px] lg:pt-60 lg:text-2xl">
                            メインの執務スペース
                        </div>
                    </section>
    
                    <section className="office__con w-[80%] max-w-[450px] lg:max-w-none pt-60 lg:[120px] m-cen grid" id="rela">
                        <h3 className="office__h3 font-bold text-2xl pt-[30px] lg:text-[36px] lg:pt-60">
                            02　リラックスエリア
                        </h3>
                        <div className="office__conteiner flex flex-wrap justify-between gap-[2%] lg:gap-0 lg:content-end">
                            <div className="office__img office__img_big w-full lg:mt-[20px]">
                                <img src="office-img5.png" alt="リラックスエリアの写真" className='w-full'/>
                            </div>
                            <div className="office__img w-[30%] lg:mt-[20px]">
                                <img src="office-img6.png" alt="リラックスエリアの写真" className='w-full'/>
                            </div>
                            <div className="office__img w-[30%] lg:mt-[20px]">
                                <img src="office-img7.png" alt="リラックスエリアの写真" className='w-full'/>
                            </div>
                            <div className="office__img w-[30%] lg:mt-[20px]">
                                <img src="office-img8.png" alt="リラックスエリアの写真" className='w-full'/>
                            </div>
                        </div>
                        <div className="office__txt font-medium pt-[30px] text-[18px] lg:pt-60 lg:text-2xl">
                            自宅のリビングで居るように過ごせるエリア
                        </div>
                    </section>
    
                    <section className="office__con w-[80%] max-w-[450px] lg:max-w-none pt-60 lg:[120px] m-cen grid" id="biz">
                        <h3 className="office__h3 font-bold text-2xl pt-[30px] lg:text-[36px] lg:pt-60">
                            03　ビジネス構築エリア
                        </h3>
                        <div className="office__conteiner flex flex-wrap justify-between gap-[2%] lg:gap-0 lg:content-end">
                            <div className="office__img office__img_big w-full lg:mt-[20px]">
                                <img src="office-img9.png" alt="ビジネス構築エリアの写真" className='w-full' />
                            </div>
                            <div className="office__img w-[30%] lg:mt-[20px]">
                                <img src="office-img10.png" alt="ビジネス構築エリアの写真" className='w-full'/>
                            </div>
                            <div className="office__img w-[30%] lg:mt-[20px]">
                                <img src="office-img11.png" alt="ビジネス構築エリアの写真" className='w-full'/>
                            </div>
                            <div className="office__img w-[30%] lg:mt-[20px]">
                                <img src="office-img12.png" alt="ビジネス構築エリアの写真" className='w-full'/>
                            </div>
                        </div>
                        <div className="office__txt font-medium pt-[30px] text-[18px] lg:pt-60 lg:text-2xl">
                            社内外のミーティング等に使えるエリア
                        </div>
                    </section>
    
                    <section className="office__con w-[80%] max-w-[450px] lg:max-w-none pt-60 lg:[120px] m-cen grid" id="hure">
                        <h3 className="office__h3 font-bold text-2xl pt-[30px] lg:text-[36px] lg:pt-60">
                            04　フレキシブルエリア
                        </h3>
                        <div className="office__conteiner flex flex-wrap justify-between gap-[2%] lg:gap-0 lg:content-end">
                            <div className="office__img w-full lg:mt-[20px]">
                                <img src="office-img13.png" alt="フレキシブルエリアの写真"/>
                            </div>
                            <div className="office__img w-[30%] lg:mt-[20px]">
                                <img src="office-img14.png" alt="フレキシブルエリアの写真"/>
                            </div>
                            <div className="office__img w-[30%] lg:mt-[20px]">
                                <img src="office-img15.png" alt="フレキシブルエリアの写真"/>
                            </div>
                            <div className="office__img w-[30%] lg:mt-[20px]">
                                <img src="office-img16.png" alt="フレキシブルエリアの写真"/>
                            </div>
                        </div>
                        <div className="office__txt font-medium pt-[30px] text-[18px] lg:pt-60 lg:text-2xl">
                            レイアウトを社員が自在に変更でき、
                            多様な用途で使えるスペース
                        </div>
                    </section>
    
                    <section className="office__con w-[80%] max-w-[450px] lg:max-w-none pt-60 lg:[120px] m-cen grid" id="fam">
                        <h3 className="office__h3 font-bold text-2xl pt-[30px] lg:text-[36px] lg:pt-60">
                            05　ファミレスエリア
                        </h3>
                        <div className="office__conteiner flex flex-wrap justify-between gap-[2%] lg:gap-0 lg:content-end">
                            <div className="office__img w-full lg:mt-[20px]">
                                <img src="office-img17.png" alt="ファミレスエリアの写真" className='w-full'/>
                            </div>
                            <div className="office__img w-[30%] lg:mt-[20px]">
                                <img src="office-img18.png" alt="ファミレスエリアの写真" className='w-full'/>
                            </div>
                            <div className="office__img w-[30%] lg:mt-[20px]">
                                <img src="office-img19.png" alt="ファミレスエリアの写真" className='w-full'/>
                            </div>
                            <div className="office__img w-[30%] lg:mt-[20px]">
                                <img src="office-img20.png" alt="ファミレスエリアの写真" className='w-full'/>
                            </div>
                        </div>
                        <div className="office__txt font-medium pt-[30px] text-[18px] lg:pt-60 lg:text-2xl">
                            ファミレスのソファと机で作業や
                            ミーティング等を行えるスペース
                        </div>
                    </section>
    
                    <section className="office__con office__con_last w-[80%] max-w-[450px] lg:max-w-none pt-60 pb-60 lg:[120px] m-cen grid" id="shu">
                        <h3 className="office__h3 font-bold text-2xl pt-[30px] lg:text-[36px] lg:pt-60">
                            06　集中エリア
                        </h3>
                        <div className="office__conteiner flex flex-wrap justify-between gap-[2%] lg:gap-0 lg:content-end">
                            <div className="office__img office__img_big w-full lg:mt-[20px]">
                                <img src="office-img21.png" alt="集中エリアの写真" className='w-full'/>
                            </div>
                            <div className="office__img w-[30%] lg:mt-[20px]">
                                <img src="office-img22.png" alt="集中エリアの写真" className='w-full'/>
                            </div>
                            <div className="office__img w-[30%] lg:mt-[20px]">
                                <img src="office-img23.png" alt="集中エリアの写真" className='w-full'/>
                            </div>
                            <div className="office__img w-[30%] lg:mt-[20px]">
                                <img src="office-img22.png" alt="集中エリアの写真" className='w-full'/>
                            </div>
                        </div>
                        <div className="office__txt font-medium pt-[30px] text-[18px] lg:pt-60 lg:text-2xl">
                            個室で作業ができ、一人で集中できるスペース
                        </div>
                    </section>
                </div>

                <div className="bg-[#FEE57F]">
                    <div className="w-full bg-white rounded-t-[10px]" id="sha">
                        <section className="office__con relative pb-[120px] w-[80%] max-w-[450px] lg:max-w-none pt-60 lg:[120px] m-cen grid">
                    
                            <h3 className="office__h3 font-bold text-2xl pt-[30px] lg:text-[36px] lg:pt-60">
                                07　SHARELOUNGE
                            </h3>
        
                            <div className="office__conteiner flex flex-wrap justify-between gap-[2%] lg:gap-0 lg:content-end">
                                <div className="office__img w-full lg:mt-[20px]">
                                    <img src="office-img24.png" alt="SHARELOUNGEの写真" className='w-full'/>
                                </div>
                                <div className="office__img w-[30%] lg:mt-[20px]">
                                    <img src="office-img25.png" alt="SHARELOUNGEの写真" className='w-full'/>
                                </div>
                                <div className="office__img w-[30%] lg:mt-[20px]">
                                    <img src="office-img26.png" alt="SHARELOUNGEの写真" className='w-full'/>
                                </div>
                                <div className="office__img w-[30%] lg:mt-[20px]">
                                    <img src="office-img27.png" alt="SHARELOUNGEの写真" className='w-full'/>
                                </div>
                            </div>
        
                            <p className="office__txt font-medium pt-[30px] text-[18px] lg:pt-60 lg:text-2xl">
                                まるで秘密基地のような、本棚に囲まれた書斎型個室からの景色は好評です。
                                1名席、2名席のほか、集中して作業ができる個人ブース席、
                                選べる2種類の会議室も用意しており、ビジネスシーンはもちろん、
                                リラックスできる空間としても利用できます。
                                また、パートナーによる本棚の選書や関連書籍の設置など、
                                独自のコラボレーション企画も行なっております。
                            </p>
                            
                            <div className="w-[90%] lg:w-[200%] flex flex-row-reverse pb-60 pt-[40px] lg:pt-60 relative cursor-pointer" onClick={onClickHandleA}>
                                <div className="before:ease-out before:duration-700 before:content-[''] before:absolute before:w-[50px] before:h-[50px] before:rounded-[50%] before:bg-[#FA513F] before:z-[14] before:right-[18%] before:top-[18px] lg:before:right-[7%] lg:before:top-[35px] before:hover:right-[-2%] before:hover:top-[35px] before:lg:w-[70px] before:lg:h-[70px]">
                                    <p className="relative right-[3%] top-0 z-[14] font-bold lg:text-2xl">詳しく見る</p>
                                </div>
                            </div>
        
                        </section>
                    </div>
                </div>
                                
            </section>

        </main>

        </>
    )
}

export default Office;