import { useLocation } from "wouter-preact";
import routes from "../defines/routes.json";
import { HomeTitle } from "../components/HomeTitle";

const HomePage = () => {
    const [ location ] = useLocation();
    if(location !== routes.home) {
        return null;
    }

    return (
        <div style={{height: "200vh"}}>
            <HomeTitle titleText="Ryan test title"/>
        </div>
    );
}

export {
    HomePage
}