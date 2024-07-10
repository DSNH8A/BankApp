import styles from '../style'

function Button()
{
    return(
        <button type="button" className={`py-4 px-6
        bg-blue-gradient font-poppins font-medium text-[18px]
         text-primary outline-none rounded-[10px] w-[150px] mt-4 ${styles}`}>
            Get Started
        </button>
    );
}

export default Button