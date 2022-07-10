import { useLocation } from "wouter-preact";
import routes from "../defines/routes.json";

const PractitionerPage = () => {
    const [ location ] = useLocation();
    if(location !== routes.practitioner) {
        return null;
    }

    return (
         <>Practitioner Page</>
    );
}

export {
    PractitionerPage
}