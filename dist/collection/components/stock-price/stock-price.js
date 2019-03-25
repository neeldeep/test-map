import mapboxgl from 'mapbox-gl';
export class StockPrice {
    componentDidLoad() {
        let options = {
            container: this.mapEl,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-74.50, 40],
            zoom: 9
        };
        mapboxgl.accessToken = "pk.eyJ1IjoibmVlbGRlZXAiLCJhIjoiY2p0b2diM2w5MnVwZzQ5bXhiNXhuN2pqOSJ9.OQb6FFsO7IkYlyApoYBkqQ";
        this.map = new mapboxgl.Map(options);
    }
    StockSubmit(event) {
        event.preventDefault();
        fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&interval=5min&apikey=SPFY42WDG351HJF7')
            .then(res => {
            return res.json();
        }).then(parsedRes => {
            console.log(this.stockInput);
            this.fetechPrice = parsedRes['Global Quote']['05. price'];
        }).catch(err => {
            console.log(err);
        });
    }
    render() {
        return [
            h("div", { class: "container" })
        ];
    }
    static get is() { return "uc-stock-price"; }
    static get properties() { return {
        "fetechPrice": {
            "state": true
        },
        "mapEl": {
            "elementRef": true
        },
        "stockInput": {
            "state": true
        }
    }; }
    static get style() { return "/**style-placeholder:uc-stock-price:**/"; }
}
