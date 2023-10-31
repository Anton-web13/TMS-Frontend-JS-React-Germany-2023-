import logo from '../../logo.svg';
import styles from './app.module.scss';
import whiteWoman from '../../static/images/woman white.jpg';
import blackWoman from '../../static/images/woman black.jpg';


import UserCard from "../UserCard";

const users = [
    {
        name: 'Alex',
        age: 25
    },
    {
        name: 'Max',
        age: 14
    },
    {
        name: 'Maria',
        age: 24
    },
]
function App() {
  return (
    <div className={styles.wrapper}>
        <UserCard name={'Janet'} age={25} image={whiteWoman}/>
        <UserCard name={'Janet'} age={25} image={whiteWoman}/>
        <UserCard name={'Janet'} age={25} image={whiteWoman}/>
        <UserCard name={'Janet'} age={25} image={whiteWoman}/>
        <UserCard name={'Olga'} age={25} image={blackWoman}/>
        <UserCard name={'Olga'} age={25} image={blackWoman}/>
        <UserCard name={'Olga'} age={25} image={blackWoman}/>
        <UserCard name={'Olga'} age={25} image={blackWoman}/>


        {/*{*/}
        {/*    users.map(({name, age}) => (*/}
        {/*        <UserCard key={name} name={name} age={age}/>*/}
        {/*    ))*/}
        {/*}*/}

        {/*<UserCard name={'Max'} age={14}/>*/}
        {/*<UserCard name={'Maria'} age={24}/>*/}
    </div>
  );
}

export default App;
