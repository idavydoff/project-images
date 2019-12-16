import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";
import axios from "axios";

const app = ({ Store }) => {
    return (
        <h1 className="text-center text-muted">Project Images</h1>
    );
};

export default inject("Store")(observer(app));