import { useLocation } from "wouter-preact";
import routes from "../defines/routes.json";

const FAQPage = () => {
    const [ location ] = useLocation();
    if(location !== routes.faq) {
        return null;
    }

    return (
        <>FAQ Page</>
    );
}

export {
    FAQPage
}