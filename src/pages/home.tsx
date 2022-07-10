import { useLocation } from "wouter-preact";
import routes from "../defines/routes.json";

const HomePage = () => {
    const [ location ] = useLocation();
    if(location !== routes.home) {
        return null;
    }

    return (
        <div style={{height: "200vh"}}>Home Page</div>
    );
}

export {
    HomePage
}