import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import Image from "../image";

const uConvert = (unicode) => `https://twemoji.maxcdn.com/svg/${unicode.codePointAt(0).toString(16)}.svg`;

const byEmoji = ({Store, match}) => {
    const list = Store.byEmojiList;
    
    useEffect(() => {
        Store.getImagesByEmoji(match.params.emoji, 1);
    }, [match.params.emoji])

    return (
        <div className="container-fluid p-2">
            <center><img className="emoji-logo" src={uConvert(match.params.emoji)} /></center>
            <div className="row p-3">
                {list && list.map((img, i) => (
                    <Image img={img} key={i}/>
                ))}
            </div>
        </div>
    );
}

export default inject("Store")(observer(byEmoji));