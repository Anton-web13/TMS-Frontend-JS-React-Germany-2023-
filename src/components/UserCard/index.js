import styles from './styles.module.scss';

const greetings = 'Hello';

const USerCard = ({name, age, image}) => {

    return (
        <div className={`${styles.wrapper} ${styles.background}`}>
            <img src={image} alt={"Woman ALL"} width={150} height={150}/>
            <h1 className={styles.name}>User name: {name}</h1>
            <h2 className={styles.age}>Age: {age}</h2>

            <p>
                {greetings}
            </p>
        </div>
    );
};

export default USerCard;