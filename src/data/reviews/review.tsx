import { Outlet } from "react-router-dom";

export function Review() {
    return(
        <div style={{width: "100%"}}>
            <Outlet/>
        </div>
    );
}