import * as React from 'react';
import { useParams } from "react-router-dom";
import { getTipInfo } from "../data/tips";
import { FontIcon, Icon } from "@fluentui/react/lib/Icon";
import { List } from '@fluentui/react';


export function TipInfo() {
    const params = useParams();
    const tipInfo = getTipInfo(params.id!)

    return(
        <div style={{width: "60%"}}>
            <h2 style={{display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
                <Icon iconName="Lightbulb" style={{paddingRight: "10px"}}/>
                {tipInfo?.name}
            </h2>

            <p>{tipInfo?.description}</p>

            {tipInfo?.listitems ?
                <ol>
                    {tipInfo.listitems.map(i => <li>{i.name}</li>)}
                </ol> : undefined
            }

            <iframe 
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/${tipInfo?.id}`}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            />
        </div>
    );
}