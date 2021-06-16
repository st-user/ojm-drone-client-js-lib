export interface CommonEventDispatcherStatic {
    dispatch(_eventName: string, detail?: any, context?: string): void
    on(_eventName: string, handler: (event: Event) => void, context?: string): void
}
declare const CommonEventDispatcher: CommonEventDispatcherStatic

export interface CustomEventNamesFactoryStatic {
    createNames(): CustomEventNameKeyValues
}

export interface CustomEventNameKeyValues {
    set(key: string, value: string): void;
    get(key: string): string
}

declare const CustomEventNamesFactory: CustomEventNamesFactoryStatic

export interface DOMStatic {
    query<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
    query<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;
    query<E extends Element = Element>(selectors: string): E | null;

    all<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
    all<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
    all<E extends Element = Element>(selectors: string): NodeListOf<E>;

    click(element: HTMLElement, handler: (event: Event) => any): void
    change(element: HTMLElement, handler: (event: Event) => any): void
    keyup(element: HTMLElement, handler: (event: Event) => any): void
    keydown(element: HTMLElement, handler: (event: Event) => any): void
    dragover(element: HTMLElement, handler: (event: Event) => any): void
    drop(element: HTMLElement, handler: (event: Event) => any): void
    mousedown(element: HTMLElement, handler: (event: Event) => any): void
    mousemove(element: HTMLElement, handler: (event: Event) => any): void
    mouseup(element: HTMLElement, handler: (event: Event) => any): void
    contextmenu(element: HTMLElement, handler: (event: Event) => any): void
    windowKeyupIfNotPrevented(handler: (event: Event) => any): void
    windowKeydownIfNotPrevented(handler: (event: Event) => any): void
    intValue(element: HTMLElement): number
    none(element: HTMLElement): void
    block(element: HTMLElement): void
    display(element: HTMLElement, isBlock: boolean): void
    inlineBlock(element: HTMLElement): void
    optionValue(element: HTMLElement): string
    getElementPosition(element: HTMLElement): { left: number, top: number } | undefined
}

declare const DOM: DOMStatic
