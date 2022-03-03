import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi';

function Cryptocurrencies({ simplified }) {
    // rename data  to crypto list 
    const count = simplified ? 10 : 50;
    console.log("val is  : " + simplified);

    const [searchTerm, setSearchTerm] = useState('');
    // const count = 20;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)

    useEffect(() => {
        setCryptos(cryptosList?.data?.coins);
        const filterData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setCryptos(filterData);
    }, [cryptosList, searchTerm]);


    return (
        <>
            {!simplified && <div style={{ "paddingLeft": "25%" }} className='search-crypto'>
                <Input style={{ "width": "50%", "paddingLeft": "15%" }} placeholder='search crypto' onChange={(e) => setSearchTerm(e.target.value)} />
            </div>}
            {/* <div style={{ "paddingLeft": "25%" }} className='search-crypto'>
                <Input style={{ "width": "50%", "paddingLeft": "15%" }} placeholder='search crypto' onChange={(e) => setSearchTerm(e.target.value)} />
            </div> */}

            <h2>curr1</h2>
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((currency) => (
                    <Col key={currency.marketCap} xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link to={`/crypto/${currency.id}`}>
                            <Card
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<img width="100px" hight="100px" className="crypto-image" src={currency.iconUrl} hoverable />}>
                                <p>Price : {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {currency.change}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Cryptocurrencies