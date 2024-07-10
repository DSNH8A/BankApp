import styles from '../style'
import Button from "../components/Button"


function CTA()
{
    return(
        <section className ={`${styles.flexCenter} ${styles.marginY}
        ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 
        rounded-[20px] box-shadow`}>
            <div className="flex-1 flex flex-col">
                <h2 className={`${styles.paragraph} max-w-[470px] mt-5`}>Let's try our services now!</h2>
                <p>Everything you need to accept card payments
                    and grow your business anywhrere on the planet.
                </p>
            </div>
            <div classNam3={`${styles.flexCenter} sm:ml ml-0
            sm:mt.0 mt-10`}>
                <Button/>
            </div>
        </section>
    );
}

export default CTA