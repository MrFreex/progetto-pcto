import { Children, useState, cloneElement } from "react";

interface myProps {
    children: any;
}

const Router = (props : myProps) => {
    const [index, setActive] = useState((process.env.NODE_ENV === "development") ? 0 : 0);



    const childrenWithExtraProp = Children.map(props.children, child => {
        return cloneElement(child, {
            set : setActive
        });
    });

    return <div>
        { childrenWithExtraProp[index] }
    </div>
}

export { Router }