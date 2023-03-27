import './index.css'
import { Link } from "react-router-dom"

const Footer = ()=>{
    function onClickHandleA () {
        window.location.replace("https://recruit.kddi-webcommunications.co.jp/recruitment/")
    }

    return(
        <>
            <footer className="w-full bg-[#EFEFEF] relative z-[100]">
                <div className="w-[80%] pt-[30px] pb-60 m-cen flex flex-wrap justify-between sm:justify-strat lg:pt-60 lg:pb-[120px]">
                    
                    <Link to="/" className="w-[12%] mt-0 text-2xl font-bold text-[28px]">
                        <div>
                            <p>Top</p>
                            <p className="text-sm lg:text-base lg:w-[80%] font-medium">トップ</p>
                        </div>
                    </Link>
                    
                    <Link to="/switch" className="w-[50%] mt-0 text-2xl font-bold lg:w-[20%] text-[28px]">
                        <div>
                            <p>My switch</p>
                            <p className="text-sm lg:text-base lg:w-[80%] font-medium">社員のON・OFF</p>
                        </div>
                    </Link>
                    
                    <Link to="/workstyle-sin" className="w-[50%] mt-[30px] sm:mt-0 text-2xl font-bold lg:w-[20%] text-[28px]">
                        <div>
                            <p>Workstyle</p>
                            <p className="text-sm lg:text-base lg:w-[80%] font-medium">働き方</p>
                        </div>
                    </Link>
                    
                    <Link to="/office" className="w-[50%] mt-[30px] sm:mt-0 text-2xl font-bold lg:w-[20%] text-[28px]">
                        <div>
                            <p>Office</p>
                            <p className="text-sm lg:text-base lg:w-[80%] font-medium">オフィス</p>
                        </div>
                    </Link>
                    
                    <div className="w-[50%] mt-[30px] sm:mt-0 text-2xl font-bold lg:w-[20%] text-[28px]" onClick={onClickHandleA}>
                        <p className="info_icon_footer">Information</p>
                        <p className="text-sm lg:text-base lg:w-[80%] font-medium">募集情報</p>
                    </div>
                </div>
                
                <div className="lg:w-[80%] lg:ml-[10%] lg:flex lg:pb-60 lg:justify-between lg:items-end">
                    <div className="w-[80%] m-cen lg:m-0 text-base font-medium lg:w-[50%] lg:text-[22px]">
                        <p>
                            お問い合わせ先<br />
                            株式会社 KDDI ウェブコミュニケーションズ<br /><br />
                            採用担当<br/><br/>
                            メール：recruit@kddi-web.com
                        </p>
                    </div>
                    
                    <div className="lg:w-[35%] lg:flex lg:justify-end lg:flex-wrap">

                        <Link to="/">
                            <p className="pt-60 lg:pt-0 pb-[30px] w-[30%] m-cen lg:m-auto lg:w-[50%] lg:pb-60">
                                <img src="logo_kddi.png" alt="KDDIウェブコミュニケーションズ" className='w-full'/>
                            </p>
                        </Link>
                        
                        <p className="w-[80%] m-cen lg:m-0 text-center pb-[30px] text-base lg:text-xl"><small>&copy; 2022 KDDI Web Communications inc.</small></p>
                    
                    </div>
                    
                </div>
        
            </footer>
        </>
    )
}

export default Footer;