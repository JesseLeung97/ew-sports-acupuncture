import { FooterIcon } from "../FooterIcon";
import classes from "./styles.module.css";
import texts from "../../defines/siteTexts.json";

const Footer = () => {
    return (
        <footer class={classes.footer_container}>
            <nav class={classes.social_media_icons}>
                <a href={texts.externalLinks.links.facebook}>
                    <FooterIcon icon="Facebook" />
                </a>
                <a href={texts.externalLinks.links.instagram}>
                    <FooterIcon icon="Yelp" />
                </a>
                <a href={texts.externalLinks.links.linkedIn}>
                    <FooterIcon icon="LinkedIn" />
                </a>
                <a href={texts.externalLinks.links.yelp}>
                    <FooterIcon icon="Instagram" />
                </a>
            </nav>
            <h3 class={classes.business_title}>{texts.footer.businessName}</h3>
            <div class={classes.info_container}>
                <div class={classes.address_container}>
                    <span>{texts.footer.address_1}</span>
                    <span>{texts.footer.address_2}</span>
                </div>
                <div class={classes.contact_container}>
                    <span>{texts.footer.phoneNumber}</span>
                    <span>{texts.footer.email}</span>
                </div>
            </div>
            <span class={classes.copyright}>{texts.footer.copyright}</span>
        </footer>
    );
}

export {
    Footer
}