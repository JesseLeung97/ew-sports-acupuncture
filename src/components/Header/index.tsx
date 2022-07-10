import { useSpCheck } from "../util/SpCheck";
import { SpHeader } from "./Sp";
import { DesktopHeader } from "./Desktop";

const Header = () => {
    const isSp = useSpCheck();

    return (
        <>
        {isSp && <SpHeader />}
        {!isSp && <DesktopHeader />}
        </>
    );
}

export {
    Header
}