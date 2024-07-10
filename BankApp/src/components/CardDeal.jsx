import styles, { layout } from '../style'
import card from '../assets/card.png'
import Button from '../components/Button'


function CardDeal() {
    return (
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 class={styles.heading2}>
                    Find a better card deal <br className="sm:block hidden" />
                    in few easy steps.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Arcu tortor, purus in mattis at sed
                    integer faucibus. Aliquet eget mauris
                    tortor. Aliquet ultrices ac, ametau.
                </p>
                <Button styles="mt-10"></Button>
            </div>
            <div className={layout.sectionImg}>
                <img src={card} alt="card" className="w-[100%] h-[100%]"/>
            </div>
        </section>
    );

}

export default CardDeal