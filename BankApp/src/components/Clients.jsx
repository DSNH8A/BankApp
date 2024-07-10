import styles, {layout} from '../style'
import airbnb from '../assets/airbnb.png'
import binance from '../assets/binance.png'
import coinbase from '../assets/coinbase.png'
import dropbox from '../assets/dropbox.png'

const clients = [
    {
      id: "client-1",
      logo: airbnb,
    },
    {
      id: "client-2",
      logo: binance,
    },
    {
      id: "client-3",
      logo: coinbase,
    },
    {
      id: "client-4",
      logo: dropbox,
    },
  ];

const Sanyi = ({logo}) =>(

    <div className={`flex-1 ${styles.flexCenter} w-[100px] h-[70px] sm:min-w-[192px] min-w-[120px] Sanyi`}>
        <img src={logo} alt="logo"  className="sm:w-[192px] w-[100px]"/>
    </div>
);

function Clients()
{
    return(
        <section class={`${styles.flexCenter} my-4`}>
            <div className={`${styles.flexCenter} flex-wrap w-full`}>
                {clients.map((client) => (
                    <Sanyi key={client.id} {...client}/>
                   
                ))}
            </div>
        </section>
    );
}

export default Clients