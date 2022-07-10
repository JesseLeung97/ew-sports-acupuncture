import { FunctionalComponent } from "preact";
import classes from "./styles.module.css";

interface HomeTitleProps {
    titleText: string
}

const HomeTitle: FunctionalComponent<HomeTitleProps> = ({ titleText }) => {
    return (
        <h2 class={classes.test_title}>{titleText}</h2>
    );
}

export {
    HomeTitle
}