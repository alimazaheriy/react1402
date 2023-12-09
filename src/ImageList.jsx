import {Component} from "react";
import Image from "../public/images";
import ReactCountryFlag from "react-country-flag";
import WorldMap from "react-svg-worldmap";

export default class ImageList extends Component{

    state={
        images:[
            {uri:'images/1.jpg',rate:3},
            {uri:'images/2.png',rate:1},
            {uri:'images/3.jpg',rate:5},

        ],
        data:[{country: "cn", value: 8889658000},{country: "ir", value: 8000000},{country: "us", value: 37800000},
            {country: "ch", value: 786500000},{country: "in", value: 545252000},{country: "uk", value: 1389618778}]
    }

    render() {
        return (
            <div>
                {
                    this.state.images.map(image=><Image image={image} />)
                }
                <ReactCountryFlag countryCode="IR" svg />

                <WorldMap
                    color="red"
                    title="Top 10 Populous Countries"
                    value-suffix="people"
                    size="lg"
                    data={this.state.data}
                />
            </div>
        )
    }
}