import React, { useState, Fragment } from "react";
import { emojis } from "./emojis"
import EmojiComponent from "./emoji"

const ChooseEmoji = ({ emoji, setEmoji }) => {
    const [type, setType] = useState(1);

    return (
        <div className="modal fade" id="chooseEmoji">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title text-muted">Choose Emoji</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>

                <div className="modal-body">
                    <ul className="nav justify-content-center mb-4">
                        <li className="nav-item">
                            <a className={`nav-link ${type == 1 && "disabled"}`} href="#" onClick={() => setType(1)}>Emotions</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${type == 2 && "disabled"}`} href="#" onClick={() => setType(2)}>Objects</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${type == 3 && "disabled"}`} href="#" onClick={() => setType(3)}>Activities</a>
                        </li>
                    </ul>
                    <div className="container-fluid">
                        <div className="row">
                            {type == 1 && (
                                <Fragment>
                                    {emojis.emotions.map((cur, i) => (
                                        <EmojiComponent key={i} name={cur.name} link={cur.link} setEmoji={setEmoji} choosed={emoji == cur.name}/>
                                    ))}
                                </Fragment>
                            )}
                            {type == 2 && (
                                <Fragment>
                                    {emojis.objects.map((cur, i) => (
                                        <EmojiComponent key={i} name={cur.name} link={cur.link} setEmoji={setEmoji} choosed={emoji == cur.name}/>
                                    ))}
                                </Fragment>
                            )}
                            {type == 3 && (
                                <Fragment>
                                    {emojis.activities.map((cur, i) => (
                                        <EmojiComponent key={i} name={cur.name} link={cur.link} setEmoji={setEmoji} choosed={emoji == cur.name}/>
                                    ))}
                                </Fragment>
                            )}
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
}

export default ChooseEmoji;