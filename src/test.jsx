import React, {useState} from 'react'
import './index.css'
import data from './data.json'

const Switchcopy =  () =>{

    const [PushBtn1, setPushBtn1] = useState(false);
    const handlePushBtn1 = () => {
        setPushBtn1(!PushBtn1);
    };
1
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
            {data.switch.map((data,i)=>{
                return(
                    <div className="relative lg:w-[50%]">
                    
                    {/* on */}
                    <section className= {PushBtn1 
                        ?"myswitch__con ON1 w-[90%] pt-60 lg:pt-[120px] relative m-cen transition opacity-0 z-[-1]"
                        :"myswitch__con ON1 w-[90%] pt-60 lg:pt-[120px] relative m-cen transition opacity-100 z-[100]"
                    }>
                        {/* imgデータ */}
                        <h2 className="myswitch__img w-full">
                            <img src={data.switch[i].img[0]} alt={data.switch[i].alt} className='w-full rounded-t-[10px]'/>
                        </h2>                        {/* btn */}
                        <button onClick={handlePushBtn1} type='button' className="myswitch__onbtn myswitch__btn1 cursor-pointer absolute top-[70px] right-[10px] min-w-[70px] min-h-[70px] w-[15%] h-[15%] bg-[#FD9503] rounded-[10px] flex items-center justify-center 
                        lg:top-[19%] lg:right-[5%] lg:w-[90px] lg:h-[90px] transition hover:animate-shadow-inset-center">
                            <p className="ON text-[10px] text-[#fff] lg:text-center lg:text-[18px]">
                                <span className="ON__big text-[24px] lg:text-[30px]">ON</span><br/>
                                のわたし</p>
                        </button>
                        {/* txtdata */}
                        <p className="myswitch__txt w-full pt-[30px] lg:text-lg lg:font-medium leading-[36px] lg:pt-60">
                            {data.switch[i].img[0]}
                        </p>
                    </section>
                    
                    {/* off */}
                    <div className="switch1__defo absolute top-0">
                        <section className={PushBtn1
                        ?"myswitch__con OFF1 w-[90%] pt-60 lg:pt-[120px] relative m-cen transition opacity-1 z-[100]"
                        :"myswitch__con OFF1 w-[90%] pt-60 lg:pt-[120px] relative m-cen transition opacity-0 z-[-1]"
                        }>
                            <h2 className="myswitch__img w-full">
                                <img src={data.switch[i].img[1]} alt={data.switch[i].alt} className='w-full rounded-t-[10px]'/>
                            </h2>
                            <button onClick={handlePushBtn1} type='button' className="cursor-pointer absolute top-[70px] right-[10px] min-w-[70px] min-h-[70px] w-[15%] h-[15%] bg-[#FFF] rounded-[10px] flex items-center justify-center 
                            lg:top-[19%] lg:right-[5%] lg:w-[90px] lg:h-[90px] transition border border-[#FD9503]">
                                <p className="OFF text-[10px] text-[#FD9503] lg:text-center lg:text-[18px]">
                                    <span className="OFF__big text-[24px] lg:text-[30px]">OFF</span><br/>
                                    のわたし</p>
                            </button>
            
                            <p className="myswitch__txt w-full pt-[30px] lg:text-lg lg:font-medium leading-[36px] lg:pt-60">
                                {data.switch[i].txt[1]}
                            </p>
            
                        </section>
            
                    </div>
                </div>
                );
            })};
            </>
        )
}

export default Switchcopy;
