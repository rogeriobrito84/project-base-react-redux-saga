import { useDispatch } from "react-redux";
import { authRequest } from "../../store/modules/auth/actions";

const Header = () => {
    const dispacth = useDispatch();
  
    const dispatchAction = () => {
         dispacth(authRequest());
    }
    return (
        <button onClick={dispatchAction}>Carregar Repositórios</button>
    );
}
export default Header;