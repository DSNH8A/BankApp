import styles, {layout} from '../style'
import google from '../assets/google.svg'
import bill from '../assets/bill.png'
import apple from '../assets/apple.svg'

function Billing()
{
    return (
       <section id="product" className={layout.sectionReverse}>
            <div className={layout.sectionImgReverse}>
                <img src={bill} alt="billing" 
                className="w-[100%] h-[100%] relaitve z-[5]"></img>
                <div className="absolute z-[3] -left-1/2
                top-0 w-[100%] h-[100%] rounded-full white__gradient"></div>
                <div className="absolute z-[0] -left-1/2
                bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
            </div>
            <div className={`${layout.sectionInfo}`}>
                <h2 className={`${styles.heading2}`}>
                    Easily control your <br className="sm:block hidden"></br> 
                    billing and invoicing
                </h2>
                <p className={`${styles.paragraph} max-w[470px] mt-5`}> 
                    Elit enim sed massa etiam. Mauris eu
                    adipscing ultrices ametodio aneean
                    neque. Fusce ipsum orci rhoncus
                    aliprottitor integer platea placerat.
                </p>
                <div className="flex flex-row flex-wrap sm:mt mt-6">
                    <img src={apple} alt="appleStore"
                    className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"></img>
                     <img src={google} alt="google"
                    className="w-[128px] h-[42px] object-contain cursor-pointer"></img>
                </div>
            </div>
       </section>
    );
}

export default Billing