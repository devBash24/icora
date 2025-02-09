import * as React from "react";

export interface IconTree {
    tag: string;
    attr: {
        [key: string]: string;
    };
    child: IconTree[];
}

export function GenIcon(data: IconTree) {
    return (props: IconBaseProps): React.JSX.Element => {
        return IconBase({
            attr: { ...data.attr },
            ...props,
            children: data.child.map((child, i) => 
                React.createElement(child.tag, { 
                    key: i,
                    ...child.attr
                })
            )
        });
    };
}

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
}

export type IconType = (props: IconBaseProps) => React.JSX.Element;

export function IconBase(props: IconBaseProps & { attr?: Record<string, string> }): React.JSX.Element {
    const { children, size, color, title, attr, ...svgProps } = props;
    const computedSize = size || '1em';
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            {...attr}
            {...svgProps}
            height={computedSize}
            width={computedSize}
            xmlns="http://www.w3.org/2000/svg"
        >
            {title && <title>{title}</title>}
            {children}
        </svg>
    );
}