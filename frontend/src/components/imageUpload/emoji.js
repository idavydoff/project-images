import React from "react";

const uConvert = (unicode) => `https://twemoji.maxcdn.com/svg/${unicode.codePointAt(0).toString(16)}.svg`;


const Emoji = ({ cur, setEmoji, choosed }) => {
    return (
        <div className="col-lg-3 mb-3">
            <div className={`container-fluid emoji-to-choose ${choosed && "choosed"} p-3 text-center`} onClick={() => setEmoji(cur)}>
                <img src={uConvert(cur)} />
            </div>
        </div>
    );
}

export default Emoji;