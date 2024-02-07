import { Outlet } from "react-router-dom";

export function Tip() {
    return(
        <div style={{width: "100%"}}>
            <Outlet/>
        </div>
    );
}