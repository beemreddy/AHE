import * as React from 'react';
import { useParams } from "react-router-dom";
import { Icon } from "@fluentui/react/lib/Icon";
import { getReviewDetails } from '../reviews';

export function ReviewDetails() {
    const params = useParams();
    const reviewDetails = getReviewDetails(params.id!)

    return(
        <div style={{width: "60%"}}>
            <h2 style={{display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
                <Icon iconName="ReviewSolid" style={{paddingRight: "10px"}}/>
                {reviewDetails?.name}
            </h2>

            <p>{reviewDetails?.description}</p>

            <iframe 
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/${reviewDetails?.id}`}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            />
        </div>
    );
}