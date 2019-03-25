import '../../stencil.core';
import "@ionic/core";
export declare class StockPrice {
    fetechPrice: number;
    stockInput: number;
    mapEl: HTMLElement;
    map: any;
    componentDidLoad(): void;
    StockSubmit(event: Event): void;
    render(): JSX.Element[];
}
