import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import {Public} from "@material-ui/icons";
import {
    Container,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@material-ui/core";

interface Repository {
    name: string,
    url: string
}

const Home = () => {
    const state: ApplicationState = useSelector((state: ApplicationState) => state);
    console.log(state);
    console.log(state);
    return (
        <Container>
            <Typography variant="h4">Repositórios {state.auth.user.name}</Typography>
            <List>
                {state.auth?.list?.map((r: Repository, index) => 
                <ListItem key={index}>
                    <ListItemIcon>
                        <Public></Public>
                    </ListItemIcon>
                    <ListItemText primary={r.name} secondary={r.url}/>
                </ListItem>
                )}
            </List>
        </Container>
    );
}

export default Home;