import React, { Component } from 'react'
import Product from './Product'

export default class ProductsList extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Product />
                    </div>
                    <div className="col-3">
                        <Product />
                    </div>
                    <div className="col-3">
                        <Product />
                    </div>
                    <div className="col-3">
                        <Product />
                    </div>
                </div>
                
                
            </div>


        )
    }
}
