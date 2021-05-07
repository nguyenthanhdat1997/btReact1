import React, { Component } from 'react'
import BTCarousel from './BTCarousel'
import ProductsList from './ProductsList'

export default class BTContent extends Component {
    render() {
        return (
            <div className="container">
                <BTCarousel />
                <ProductsList />
            </div>

        )
    }
}
