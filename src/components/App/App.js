import logo from '../../logo.svg';
import styles from './app.module.scss';
import whiteWoman from '../../static/images/woman white.jpg';
import blackWoman from '../../static/images/woman black.jpg';


import UserCard from "../UserCard";
import USerCard from "../UserCard";

function App() {
  return (
    <div className={styles.wrapper}>
        {/*<CounterContainer />*/}
        <UserCard name={'Maria'} age={25} image={whiteWoman}/>
        <USerCard name={'Maria'} age={25} image={whiteWoman}>
            <USerCard name={'Maria'} age={25} image={whiteWoman}/>
        </USerCard>
    </div>
  );
}

export default App;
