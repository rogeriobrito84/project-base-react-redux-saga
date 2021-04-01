import { useDispatch } from "react-redux";
import { authRequest } from "../../store/modules/auth/actions";
import {Button, Container} from "@material-ui/core";

const Header = () => {
    const dispacth = useDispatch();
  
    const dispatchAction = () => {
         dispacth(authRequest());
    }
    return (
        <Container>
            <Button color="primary" variant="contained" onClick={dispatchAction}> Carregar Repositórios</Button>    
        </Container>
    );
}
export default Header;