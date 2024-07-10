import styles, {layout} from '../style'
import FeedB from '../components/FeedBAckCard'
import people1 from '../assets/people01.png'
import people2 from '../assets/people02.png'
import people3 from '../assets/people03.png'
import FeedBackCard from '../components/FeedBAckCard'


const feedback = [
    {
      id: "feedback-1",
      content:
        "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      name: "Herman Jensen",
      title: "Founder & Leader",
      img: people1,
    },
    {
      id: "feedback-2",
      content:
        "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: "Steve Mark",
      title: "Founder & Leader",
      img: people2,
    },
    {
      id: "feedback-3",
      content:
        "It is usually people in the money business, finance, and international trade that are really rich.",
      name: "Kenn Gallagher",
      title: "Founder & Leader",
      img: people3,
    },
  ];
  


function Testimonials()
{
    return(
        <section id="clients" className={`${styles.flexCenter} ${styles.paddingY}
        flex-col relative`}>
            <div className="absolute z.[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>
            <div className="w-full flex justify-between items-center 
            md:flex-row sm:mb-16 mb-6 relative z-[1]">
                <h1 className={styles.heading2}>
                    What people are <br className="sm:block hidden"/> 
                    saying about us
                </h1>
                <div className="w-full md:mt-0 mt-6">
                    <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                        Everything you need to accept card payments
                        and grow your business anywhere in the planet.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap justify-center
            w-full feedback-container relative z-[1]">
                {feedback.map((card) =>(
                    <FeedBackCard key={card.id} {...card}></FeedBackCard>
                ))}

            </div>
        </section>
    );
}

export default Testimonials