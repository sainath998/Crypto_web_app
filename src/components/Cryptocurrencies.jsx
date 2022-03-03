import React, { useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi';


function Cryptocurrencies() {

    // rename data  to crypto list 
    const { data: cryptosList, isFetching } = useGetCryptosQuery();
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
    console.log(cryptos);
    return (
        <>
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link to={`/crypto/${currency.id}`}>
                            <Card
                                title={`${currency.rank}. ${currency.name}}`}
                                extra={<img width="100px" hight="100px" className="crypto-image" src={currency.iconUrl} hoverable />}>
                                <p>Price : {millify(currency.price)}</p>
                            </Card>

                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Cryptocurrencies