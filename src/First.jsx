import './index.css'

const First = () =>{
    return(
        <>
            <main className=' pt-[60px]'>
                <article class="top">
                    <section class="fv">
                        <div class="fv__txt">
                            <h2 class="fv__h2 fv__h2_top slideInLeft">
                                理想の働き方を<br />
                                自分で選べる<br />
                                この場所で<br />
                            </h2>
                            <h2 class="fv__h2 fv__h2_bottom slideInLeft">
                                世界が<span class="fv__h2_lage">“当たり前”</span>に使う<br />
                                ITサービスを、<br />
                                共につくろう。
                            </h2>
                        </div>
                        
                            
                        <div class="swiper slideInBottom">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide"><p><img src="img1.jpg" alt="オフィスの様子" /></p></div>
                                    <div class="swiper-slide"><p><img src="office-img2.jpg" alt="オフィスの様子" /></p></div>
                                    <div class="swiper-slide"><p><img src="office-img3.jpg" alt="オフィスの様子" /></p></div>
                                    <div class="swiper-slide"><p><img src="office-img4.jpg" alt="オフィスの様子" /></p></div>
                                </div>
                            </div>
                        </div>
                    </section>
            
                    <section class="about">
                        <h2 class="about__h2">About<br />
                            <span class="about__h2_small">オフィスに込められた思い</span></h2>
                        <p class="about__txt">
                            KDDIウェブコミュニケーションは、「オフィスにいなくても仕事はできるけれど、オフィスに来たい」をコンセプトに、2016年9月から東京本社を現在の東京都港区南青山へと移転しました。その後、2020年2月末、新型コロナウィルス感染症の流行により、在宅勤務を中心とした働き方へと移行しました。また、東京本社へ出社しなくても働けるようになったことから、地方在住者の採用が増え、IターンやUターンをする社員も出てきました。
                            <br /><br />
                            しかしながら、コロナ禍前と比べると、これまで出社の際に行われていた雑談や偶発的なコミュニケーションが減少したため、社員はチームごとに合宿や東京本社への出張などを通して、コミュニケーションを図ってきました。
                            <br /><br />
                            さらに、社員間のコミュニケーションやアイデア創出の場として、集まってコミュニケーションをとれるオフィスは継続して必要と判断し、新しい働き方に合わせたオフィスにリニューアルすることにしました。
                            また、本リニューアルをベースとして、今後もKDDIウェブコミュニケーションズでは、働く環境や手段などをアップデートしていく予定です。
                        </p>
                    </section>
            
                    <div class="workstyle__bg">
                        <section class="con con__workstyle">
                            <div class="con__grid">
                                <h2 class="con__h2">Workstyle<br />
                                    <span class="con__h2_small">働き方</span>
                                </h2>
                                <p class="con__img">
                                    <img src="workstayle1.png" alt="働き方" />
                                </p>
                                
                                <div class="con__block">
                                    <p class="con__txt">
                                        自分がもっとも成果をだしやすい<br />
                                        環境が見つかる<br />
                                        自分で選ぶ働き方をご紹介します。
                                    </p>
                                    <div class="con__btn">
                                        <a href="workstyle/index.html" class="arrow circle"><p class="con__btn_more move_btn">詳しく見る</p></a>
                                    </div>
                                </div>
                                
                            </div>
                        </section>
                    </div>
        
                    <div class="myswitch__bg">
                        <section class="con con__myswitch">
                            
                            <div class="con__gridri">
                                <h2 class="con__h2">My switch<br />
                                    <span class="con__h2_small">社員のON・OFF</span>
                                </h2>
                                <p class="con__txt">
                                    いいOFF（休み）がないと<br />
                                    いいON（仕事）はできない。<br />
                                    KDDIウェブコミュニケーションズ<br />
                                    ならではのON・OFFを<br />
                                    ご覧ください。<br />
                                </p>
                                
                                <p class="con__img con__img_right">
                                    <img src="./myswitch.png" alt="社員のON・OFF" />
                                </p>
                                <div class="con__btn pd60">
                                    <a href="myswitch/index.html" class="arrow circle"><p class="con__btn_more move_btn">詳しく見る</p></a>
                                </div>
                            </div>
                        </section>
                    </div>
                    
                    <div class="Office__bg">
                        <section class="con con__Office">
                            <div class="con__grid">
                                <h2 class="con__h2">Office<br />
                                    <span class="con__h2_small">オフィス紹介</span>
                                </h2>
                                <p class="con__img">
                                    <img src="./office.png" alt="オフィス紹介" />
                                </p>
                        
                                <div class="con__block">
                                    <p class="con__txt">
                                        社員の憩いの場で<br />
                                        コミュニケーションが生まれる場所。<br />
                                        そんなオフィスをご紹介します。
                                    </p>
                                    <div class="con__btn">
                                        <a href="office/index.html" class="arrow circle"><p class="con__btn_more move_btn">詳しく見る</p></a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    
                    <div class="info__bg">
                        <div class="info">
                            <div class="info__conteiner">
                                <p class="info__txt">
                                    KDDIウェブコミュニケーションズに<br />
                                    興味を持ってくれた方は</p>
                                <p class="info__img">
                                    <img src="./info.jpg" alt="information" />
                                </p>
                                <div class="info__btn move_btn">
                                    <a href="https://recruit.kddi-webcommunications.co.jp/recruitment/" class="arrow circle" target="blank"><p>一緒に働いてみませんか？</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>

        </>
    )
}

export default First;