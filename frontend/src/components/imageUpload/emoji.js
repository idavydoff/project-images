import React from "react";

const Emoji = ({ i, name, link, setEmoji, choosed }) => {
    return (
        <div className="col-lg-3 mb-3">
            <div className={`container-fluid emoji-to-choose ${choosed && "choosed"} p-3 text-center`} onClick={() => setEmoji(name)}>
                <img src={link} />
            </div>
        </div>
    );
}

export default Emoji;