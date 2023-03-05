import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import AnchorLink from "react-anchor-link-smooth-scroll";
import './index.css'
import Header from './Header'
import Footer from './Footer'

const Workstylesin = () =>{
      
    return(
        <>
            <Header/>
                <main className='pt-60 lg:pt-[90px]'>
                    <section className="w-full bg-[#FFF1BB] relative transition ease-out">
                        <div className="w-[90%] max-w-[600px] lg:max-w-[800px] flex m-cen pt-60 justify-between">
                            <div className="workstyle__top_left">
                                <h2 className="text-base font-nomal pt-[16px] lg:text-2xl">
                                    新卒採用希望者の方
                                </h2>
                
                                <h2 className="pt-[30px] text-[32px] leading-[30px] lg:text-[54px] font-bold lg:leading-[64px]">
                                    Workstyle<br/>
                                    <span className="text-2xl lg:text-4xl">働き方</span>
                                </h2>
                            </div>
                
                            <p className="w-[50%] max-w-[210px]">
                                <img src="workstayle1.png" alt="新卒採用希望者の方" classNameName='w-full'/>
                            </p>
                        </div>
                        
                        <div className="w-[90%] max-w-[800px] pt-60 m-cen flex flex-wrap justify-between gap-[10px] lg:gap-[15%]">
                            <div className="w-[120px] h-[120px] max-w-[120px] rounded-[10px] relative bg-[#FD9503]">
                                <AnchorLink href="#work">
                                    <p className="w-full text-center pt-[30px] text-lg text-white m-cen">KWCの<br/>
                                        働き方
                                    </p>
                                    <p className="navbtn__img w-[10%] m-cen">
                                        <img src="under.png" alt="働き方を見る" className="w-full"/>
                                    </p>
                                </AnchorLink>
                            </div>
                            <div className="w-[120px] h-[120px] max-w-[120px] rounded-[10px] relative bg-[#5DC742]">
                                <AnchorLink href="#rest" className="navbtn__anime">
                                    <p className="navbtn__txt w-full text-center pt-[30px] text-lg text-white m-cen">
                                        福利厚生<br/>
                                        休暇
                                    </p>
                                    <p className="w-[10%] m-cen">
                                        <img src="under.png" alt="福利厚生休暇を見る" className="w-full"/>
                                    </p>
                                </AnchorLink>
                            </div>
                            <div className="w-[120px] h-[120px] max-w-[120px] rounded-[10px] relative bg-[#329CF8]">
                                <AnchorLink href="#career">
                                    <p className="w-full text-center pt-[30px] text-lg text-white m-cen">
                                        研修<br/>
                                        キャリア支援
                                    </p>
                                    <p className="w-[10%] m-cen">
                                        <img src="under.png" alt="研修キャリア支援を見る" className="w-full"/>
                                    </p>
                                </AnchorLink>
                            </div>
                        </div>

                        <section className="w-full pt-60 lg:pt-[120px]" id="work">
                            
                            <h3 className="w-[90%] m-cen text-[32px] font-bold lg:w-full lg:text-center">
                                KWCの働き方
                            </h3>
                            
                            <div className="workstyle__flex lg:w-[75%] lg:gap-[25px] lg:flex lg:flex-wrap lg:justify-start  lg:m-cen">
                                
                                <section className="workstyle__con gs_reveal w-[80%] pt-60 m-cen lg:w-[31%] lg:pt-[120px] lg:m-0">
                                    <h4 className=" font-bold pt-[40px] text-[20px] workstyle__h4 lg:w-[80%] lg:m-cen">
                                        フレックスタイム
                                    </h4>
                                    <p className="workstyle__con-img w-[40%] max-w-[120px] max-h-[120px] m-cen">
                                        <img src="icon1.png" alt="フレックスタイム" className="w-full"/>
                                    </p>
                                    <p className="workstyle__con-txt w-full pt-[40px] font-medium leading-[32px] lg:w-[80%] lg:m-cen">
                                        全ての部署でフレックスタイム制が導入されています。
                                        部署によっては<span className="workstyle__txt_red text-[#FF0000] font-bold">コアタイムを設けないフルフレックス</span>となっており、
                                        労働時間を自身で調整できるため、長時間労働の是正に繋がっています。
                                    </p>
                                </section>
            
                                <section className="workstyle__con gs_reveal w-[80%] pt-60 m-cen lg:w-[31%] lg:pt-[120px] lg:m-0">
                                    <h4 className=" font-bold pt-[40px] text-[20px] workstyle__h4 lg:w-[80%] lg:m-cen">
                                        テレワーク
                                    </h4>
                                    <p className="workstyle__con-img w-[40%] max-w-[120px] max-h-[120px] m-cen">
                                        <img src="icon2.png" alt="テレワーク" className="w-full"/>
                                    </p>
                                    <p className="workstyle__con-txt w-full pt-[40px] font-medium leading-[32px] lg:w-[80%] lg:m-cen">
                                        2020年2月以降、派遣社員を含む社員全員がテレワーク中心の働き方となっています。
                                        出社を禁止するものではありませんが、社員1人1人の希望の結果、
                                        今後も在宅勤務中心の働き方が変わることはなさそうです。
                                        これを機に、Uターンで地元に戻り働く社員や、地方在住の方の採用も増えています。
                                    </p>
                                </section>
            
                                <section className="workstyle__con gs_reveal w-[80%] pt-60 m-cen lg:w-[31%] lg:pt-[120px] lg:m-0">
                                    <h4 className=" font-bold pt-[40px] text-[20px] workstyle__h4 lg:w-[80%] lg:m-cen">
                                        魅力的なオフィス
                                    </h4>
                                    <p className="workstyle__con-img w-[40%] max-w-[120px] max-h-[120px] m-cen">
                                        <img src="icon6.png" alt="テレワーク" className="w-full"/>
                                    </p>
                                    <p className="workstyle__con-txt w-full pt-[40px] font-medium leading-[32px] lg:w-[80%] lg:m-cen">
                                        本社は外苑前駅の改札から徒歩1分とアクセスも良く、
                                        デザインにもこだわった自慢のオフィスです。
                                        自席以外にも様々なフリースペースがあり、
                                        <span className="workstyle__txt_red text-[#FF0000] font-bold">好きな場所で仕事をする</span>ことができます。
                                        在宅でも仕事ができる一方で、たまに出社したくなるオフィスです。
                                    </p>

                                    <Link to="/office">
                                        <div className="w-full lg:w-full flex flex-row-reverse pt-[40px] relative cursor-pointer">
                                            <div className="before:ease-out before:duration-700 before:content-[''] before:absolute before:w-[50px] before:h-[50px] before:rounded-[50%] before:bg-[#FA513F] before:z-[14] before:right-[18%] before:top-[18px] lg:before:right-[20%] lg:before:top-[10%] before:hover:right-[-2%] before:hover:top-[10%] before:lg:w-[70px] before:lg:h-[70px]">
                                                <p className="relative right-[3%] top-0 z-[14] font-bold lg:text-2xl">詳しく見る</p>
                                            </div>
                                        </div>
                                    </Link>
                                    
                                </section>
            
                                <section className="workstyle__con gs_reveal w-[80%] pt-60 m-cen lg:w-[31%] lg:pt-[120px] lg:m-0">
                                    <h4 className=" font-bold pt-[40px] text-[20px] workstyle__h4 lg:w-[80%] lg:m-cen">
                                        時短勤務
                                    </h4>
                                    <p className="workstyle__con-img w-[40%] max-w-[120px] m-cen">
                                        <img src="icon7.png" alt="テレワーク" className="w-full"/>
                                    </p>
                                    <p className="workstyle__con-txt w-full pt-[40px] font-medium leading-[32px] lg:w-[80%] lg:m-cen">
                                        子育てをしながら働く社員を中心に、6時間勤務などで働く社員がいます。
                                        時短だからと業務内容は区別されません。
                                        より短時間で成果を出そうと工夫を凝らしています。
                                    </p>
                                </section>
            
                                <section className="workstyle__con gs_reveal w-[80%] pt-60 m-cen lg:w-[31%] lg:pt-[120px] lg:m-0">
                                    <h4 className=" font-bold pt-[40px] text-[20px] workstyle__h4 lg:w-[80%] lg:m-cen">
                                        有給休暇一斉付与
                                    </h4>
                                    <p className="workstyle__con-img w-[40%] max-w-[120px] m-cen">
                                        <img src="icon8.png" alt="テレワーク" className="w-full"/>
                                    </p>
                                    <p className="workstyle__con-txt w-full pt-[40px] font-medium leading-[32px] lg:w-[80%] lg:m-cen">
                                        2019年4月1日から勤続年数に関わらず、<span className="workstyle__txt_red text-[#FF0000] font-bold">入社日から一度に20日の有給休暇が付与されます。</span>
                                        有効期限は施行前と同じく2年間です。
                                        これは、以前から勤務している社員だけでなく新入社員にも同じく入社日から20日の有給休暇が付与されます。 
                                    </p>
                                </section>

                            </div>

                        </section>

                        <section className="w-full pt-60 lg:pt-[120px]" id="rest">
                            <div className="pt-60 pb-60 lg:pt-[120px] lg:pb-[120px] w-full bg-[#EFEFEF]">
                                <h3 className="w-[90%] m-cen text-[32px] font-bold lg:w-full lg:text-center">福利厚生・休暇</h3>
                                <div className="workstyle__flex lg:w-[75%] lg:gap-[25px] lg:flex lg:flex-wrap lg:justify-start lg:items-start lg:m-cen">
                                    <section className="workstyle__con gs_reveal w-[80%] pt-60 m-cen lg:w-[31%] lg:pt-[120px] lg:m-0">
                                        <h4 className=" font-bold pt-[40px] text-[20px] workstyle__h4 lg:w-[80%] lg:m-cen">
                                            休日・休暇
                                        </h4>
                                        <p className="workstyle__con-img w-[40%] max-w-[120px] m-cen">
                                            <img src="icon10.png" alt="テレワーク" className="w-full"/>
                                        </p>
                                        <p className="workstyle__con-txt w-full pt-[40px] font-medium leading-[32px] lg:w-[80%] lg:m-cen">
                                            会社で定める<span className="workstyle__txt_red text-[#FF0000] font-bold">休日は土日祝日</span>、年末年始（12月29日～1月4日）です。
                                            それ以外に、有給休暇（年20日間）、産前産後休暇、永年勤続特別休暇、
                                            子の看護休暇、介護休暇、その他特別休暇等があります。
                                        </p>
                                    </section>
            
                                    <section className="workstyle__con gs_reveal w-[80%] pt-60 m-cen lg:w-[31%] lg:pt-[120px] lg:m-0">
                                        <h4 className=" font-bold pt-[40px] text-[20px] workstyle__h4 lg:w-[80%] lg:m-cen">
                                            各種保険完備
                                        </h4>
                                        <p className="workstyle__con-img w-[40%] max-w-[120px] m-cen">
                                            <img src="icon11.png" alt="テレワーク" className="w-full"/>
                                        </p>
                                        <p className="workstyle__con-txt w-full pt-[40px] font-medium leading-[32px] lg:w-[80%] lg:m-cen">
                                            <span className="workstyle__txt_red text-[#FF0000] font-bold">
                                                健康保険、厚生年金、雇用保険、労災保険を完備しています。
                                            </span>
                                            健康保険は、関東ITソフトウェア健康保険組合に加入しており、
                                            通常の医療費以外にも、出産時や高額な医療費がかかった時など、
                                            手厚い給付を受けることができます。
                                        </p>
                                    </section>
            
                                    <section className="workstyle__con gs_reveal w-[80%] pt-60 m-cen lg:w-[31%] lg:pt-[120px] lg:m-0">
                                        <h4 className=" font-bold pt-[40px] text-[20px] workstyle__h4 lg:w-[80%] lg:m-cen">
                                            KDDIグループ共済会
                                        </h4>
                                        <p className="workstyle__con-img w-[40%] max-w-[120px] m-cen">
                                            <img src="icon12.png" alt="KDDIグループ共済会" className="w-full"/>
                                        </p>
                                        <p className="workstyle__con-txt w-full pt-[40px] font-medium leading-[32px] lg:w-[80%] lg:m-cen">
                                            結婚、出産、子供の入学時などのライフイベントや、
                                            けがや病気、り災等の場面で、給付を受けることができます。
                                        </p>
                                    </section>
            
                                    <section className="workstyle__con gs_reveal w-[80%] pt-60 m-cen lg:w-[31%] lg:pt-[120px] lg:m-0">
                                        <h4 className=" font-bold pt-[40px] text-[20px] workstyle__h4 lg:w-[80%] lg:m-cen">
                                            慶弔見舞
                                        </h4>
                                        <p className="workstyle__con-img w-[40%] max-w-[120px] m-cen">
                                            <img src="icon14.png" alt="慶弔見舞" className="w-full"/>
                                        </p>
                                        <p className="workstyle__con-txt w-full pt-[40px] font-medium leading-[32px] lg:w-[80%] lg:m-cen">
                                            ご家族に慶事や不幸があった際は、見舞金の支払いや、休暇が与えられます。
                                        </p>
                                    </section>
                                </div>
                            </div>
                        </section>

                        <section className="workstyle__box workstyle__box_last w-full pt-60 lg:pt-[120px] pb-[120px] lg:pb:[240px]" id="career">

                            <h3 className="w-[90%] m-cen text-[32px] font-bold lg:w-full lg:text-center">研修・キャリア支援</h3>

                            <div className="workstyle__flex lg:w-[75%] lg:gap-[25px] lg:flex lg:flex-wrap lg:justify-start lg:items-start lg:m-cen">
                                <section className="workstyle__con gs_reveal w-[80%] pt-60 m-cen lg:w-[31%] lg:pt-[120px] lg:m-0">
                                    <h4 className=" font-bold pt-[40px] text-[20px] workstyle__h4 lg:w-[80%] lg:m-cen">
                                        新規事業コンテスト
                                    </h4>
                                    <p className="workstyle__con-img w-[40%] max-w-[120px] m-cen">
                                        <img src="icon15.png" alt="テレワーク" className="w-full"/>
                                    </p>
                                    <p className="workstyle__con-txt w-full pt-[40px] font-medium leading-[32px] lg:w-[80%] lg:m-cen">
                                        <span className="workstyle__txt_red text-[#FF0000] font-bold">
                                            全社員誰でも応募可能な新規事業の企画立案の機会になっています。
                                        </span>
                                        おおよそ年1回開催され、役員を前にプレゼンテーションを行います。
                                        事業化決定の際には、企画者は事業推進担当として立ち上げに専念することができます。
                                    </p>
                                </section>

                                <section className="workstyle__con gs_reveal w-[80%] pt-60 m-cen lg:w-[31%] lg:pt-[120px] lg:m-0">
                                    <h4 className=" font-bold pt-[40px] text-[20px] workstyle__h4 lg:w-[80%] lg:m-cen">
                                        副業可能
                                    </h4>
                                    <p className="workstyle__con-img w-[40%] max-w-[120px] m-cen">
                                        <img src="icon16.png" alt="テレワーク" className="w-full"/>
                                    </p>
                                    <p className="workstyle__con-txt w-full pt-[40px] font-medium leading-[32px] lg:w-[80%] lg:m-cen">
                                        社外でビジネスの経験値を高めることが目的で、届け出が受理された場合副業が可能です。
                                    </p>
                                </section>

                                <section className="workstyle__con gs_reveal w-[80%] pt-60 m-cen lg:w-[31%] lg:pt-[120px] lg:m-0">
                                    <h4 className=" font-bold pt-[40px] text-[20px] workstyle__h4 lg:w-[80%] lg:m-cen">
                                        社内勉強会補助制度
                                    </h4>
                                    <p className="workstyle__con-img w-[40%] max-w-[120px] m-cen">
                                        <img src="icon17.png" alt="テレワーク" className="w-full"/>
                                    </p>
                                    <p className="workstyle__con-txt w-full pt-[40px] font-medium leading-[32px] lg:w-[80%] lg:m-cen">
                                        自発的に社員が立ち上げた勉強会の費用（軽食等）を会社が一部負担しています。
                                        新しい技術の共有・発表の場を設けることで自己学習を促すことを目的としています。
                                    </p>
                                </section>

                                <section className="workstyle__con gs_reveal w-[80%] pt-60 m-cen lg:w-[31%] lg:pt-[120px] lg:m-0">
                                    <h4 className=" font-bold pt-[40px] text-[20px] workstyle__h4 lg:w-[80%] lg:m-cen">
                                        社外セミナー/勉強会参加支援
                                    </h4>
                                    <p className="workstyle__con-img w-[40%] max-w-[120px] m-cen">
                                        <img src="icon18.png" alt="テレワーク" className="w-full"/>
                                    </p>
                                    <p className="workstyle__con-txt w-full pt-[40px] font-medium leading-[32px] lg:w-[80%] lg:m-cen">
                                        社外セミナーや勉強会への参加を促し、社員のスキルアップを支援します。受講料や交通費などを会社が負担します。
                                    </p>
                                </section>

                                <section className="workstyle__con gs_reveal w-[80%] pt-60 m-cen lg:w-[31%] lg:pt-[120px] lg:m-0">
                                    <h4 className=" font-bold pt-[40px] text-[20px] workstyle__h4 lg:w-[80%] lg:m-cen">
                                        社内求人制度
                                    </h4>
                                    <p className="workstyle__con-img w-[40%] max-w-[120px] m-cen">
                                        <img src="icon19.png" alt="テレワーク" className="w-full"/>
                                    </p>
                                    <p className="workstyle__con-txt w-full pt-[40px] font-medium leading-[32px] lg:w-[80%] lg:m-cen">
                                        募集中のポジションに社内から応募できる制度です。
                                        自身が主体的に描いたキャリア形成実現の手段のひとつにもなっています。
                                    </p>
                                </section>

                                <section className="workstyle__con gs_reveal w-[80%] pt-60 m-cen lg:w-[31%] lg:pt-[120px] lg:m-0">
                                    <h4 className=" font-bold pt-[40px] text-[20px] workstyle__h4 lg:w-[80%] lg:m-cen">
                                        海外カンファレンス派遣
                                    </h4>
                                    <p className="workstyle__con-img w-[40%] max-w-[120px] m-cen">
                                        <img src="icon20.png" alt="テレワーク" className="w-full"/>
                                    </p>
                                    <p className="workstyle__con-txt w-full pt-[40px] font-medium leading-[32px] lg:w-[80%] lg:m-cen">
                                        技術力向上のため、海外で開催される最先端の技術学会、カンファレンスへ社員を派遣します。
                                        業界をリードするための最先端技術・業界動向を吸収して社内へフィードバックすることを目的としています。
                                    </p>
                                </section>

                                <section className="workstyle__con gs_reveal w-[80%] pt-60 m-cen lg:w-[31%] lg:pt-[120px] lg:m-0">
                                    <h4 className=" font-bold pt-[40px] text-[20px] workstyle__h4 lg:w-[80%] lg:m-cen">
                                        資格取得支援
                                    </h4>
                                    <p className="workstyle__con-img w-[40%] max-w-[120px] m-cen">
                                        <img src="icon22.png" alt="テレワーク" className="w-full"/>
                                    </p>
                                    <p className="workstyle__con-txt w-full pt-[40px] font-medium leading-[32px] lg:w-[80%] lg:m-cen">
                                        業務に直結するスキルの向上、社員の自発的な学習の支援を目的に、
                                        １つの資格に対して最大２回まで試験費用の全額を会社が負担します。
                                    </p>
                                </section>

                                <section className="workstyle__con gs_reveal w-[80%] pt-60 m-cen lg:w-[31%] lg:pt-[120px] lg:m-0">
                                    <h4 className=" font-bold pt-[40px] text-[20px] workstyle__h4 lg:w-[80%] lg:m-cen">
                                        書籍購入支援
                                    </h4>
                                    <p className="workstyle__con-img w-[40%] max-w-[120px] m-cen">
                                        <img src="icon21.png" alt="テレワーク" className="w-full"/>
                                    </p>
                                    <p className="workstyle__con-txt w-full pt-[40px] font-medium leading-[32px] lg:w-[80%] lg:m-cen">
                                        業務に関する専門書籍等の購入費用を補助しています。
                                    </p>
                                </section>

                                <section className="workstyle__con gs_reveal w-[80%] pt-60 m-cen lg:w-[31%] lg:pt-[120px] lg:m-0">
                                    <h4 className=" font-bold pt-[40px] text-[20px] workstyle__h4 lg:w-[80%] lg:m-cen">
                                        英語学習支援
                                    </h4>
                                    <p className="workstyle__con-img w-[40%] max-w-[120px] m-cen">
                                        <img src="icon23.png" alt="テレワーク" className="w-full"/>
                                    </p>
                                    <p className="workstyle__con-txt w-full pt-[40px] font-medium leading-[32px] lg:w-[80%] lg:m-cen">
                                        英語を使用する機会もあるため、社員の自発的な語学スキルアップを支援しています。
                                        TOEICの受験費用を会社が負担するほか、外部英会話学校の法人割引制度が適用されます。
                                    </p>
                                </section>
                            </div>
                    
                        </section>


                    </section>

                </main>
            <Footer/>
        </>
    )
}

export default Workstylesin;