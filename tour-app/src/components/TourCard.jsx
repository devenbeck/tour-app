import React, {useState} from "react";

//tour card renders individual card details

const tourCard = ({id, name, info, price, image}) => {
    //local state to toggle with read more/show less
    const [readMore, setReadMore] = useState(false);
    return (
        <article className="tour-card">
        <h3>{tourname}</h3>
        <h4>{price}</h4>
        <h5>{image}</h5>

        <p>
            {/*show full description if readmore is true, other a slice*/}
            {readMore ? description : `${description.substring(0,80)}...`}
            <button onClick={() => setReadMore(!readMore)}>
                {/* Toggle button text */}
                {readMore ? "Show Less" : "Read More"}
            </button>
        </p>
        {/* Button to remove the tour*/}
        <button className="btn-remove" onClick={() => {
            onRemove(id)
        }}>Not Interested </button>
        </article>
    )

}