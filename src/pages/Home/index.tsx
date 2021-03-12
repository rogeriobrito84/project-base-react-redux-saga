import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";


const Home = () => {
    const state: ApplicationState = useSelector((state: ApplicationState) => state);
    console.log(state);

    return (
        <>
            <h1>Repositórios de: {state.auth.user.name}</h1>
            <ul>
                {state.auth.list.map( r => <li>{r.name}</li>)}
            </ul>
        </>
    );
}

export default Home;