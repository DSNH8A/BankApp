import styles, {layout} from "../style";
import Star from "../assets/Star.svg"
import Send from "../assets/Send.svg"
import Shield from "../assets/Shield.svg"
import Button from "../components/Button"


 const feature =
[
    {
    id: "feature-1",
    icon: Star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: Shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: Send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

const FeatureCard = ({icon, title, content, index}) => (

    <div className={`flex flex-row p-6 rounded[20px] ${index !== feature.length -1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} className="w-[100%] h-[100%] object-contain"></img>
    </div>
    <div className="flex flex-1 flex-col ml-3">
        <h4 className="font-poppins text-semibold text-white
        text-[18px] leading-[23px] mb-1">
            {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite 
        text-[16px] leading-[24px] mb-1">
            {content}
        </p>
    </div>
</div>

);

   

function Business()
{
    return(
        <section id="features" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden"></br> we will handle the money</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`} >With the right credit card, you can
                    improve your financinal life by building 
                    credit, earning rewards and saving money. 
                    But with hundreds of credit cards on the market.
                </p>
                <Button styles="mt-10"></Button>
            </div>

            <div className={`${layout.sectionImg} flex-col`}>
                {feature.map((feature, index) =>(
                    <FeatureCard key={feature.id} {...feature} index={feature.index}></FeatureCard>
                ))}
            </div>

        </section>
    );
}

export default Business