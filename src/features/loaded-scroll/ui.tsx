import classNames from "classnames";
import React, { FC, HTMLAttributes, memo } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    onEnd: () => void
};


export const LoadedScroll: FC<Props> = ({ className, children, onEnd, ...props }) => {
    const classes = classNames('overflow-auto', className)

    // Скролл блока
    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        if (e.currentTarget.scrollTop + e.currentTarget.clientHeight >= e.currentTarget.scrollHeight - 150) {
            onEnd();
        }
    };

    return (
        <div className={classes} onScroll={handleScroll} {...props}>
            {children}
        </div>
    );
};