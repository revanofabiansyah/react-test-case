import React, { useEffect, useState } from "react";
import { Col, Row} from 'antd';
import './feature.css';
import { Card } from 'antd';

const { Meta } = Card;

function AppFeature(){

   const [mynews , setMyNews] = useState([]);

   const fetchData =async () => {
        let resonse = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=3bfd499e4b6848aea1316ad26815bfd3")
        let data = await resonse.json();
        setMyNews(data.articles)     
    }
    

    useEffect(() => {
        fetchData();
    })

    return ( 
    <>
        <div className="mainDiv">
        {
            mynews.map((ele:any) => {
                console.log(ele)
                return (
                    <>
                    <div className="block FeatureBlock bgGray">
                        <div className="container-fluid">
                        <Row gutter={[8, 8]}>
                            <Col span={4}>
                                <Card hoverable style={{ width: 280, height: 350, marginLeft:5}} 
                                cover={<img alt="example" src={ele.urlToImage == null ? "https://dims.apnews.com/dims4/default/a695e38/2147483647/strip/true/crop/5938x3340+0+309/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa6%2Fad%2Fa148ac9441c0359cff841ea3a62c%2Fb7ca13e0fd9d4dd3af00748745facb84" : ele.urlToImage} />}> 
                                    <Meta title={ele.author == null ? "Nadifh Basalamah": ele.author} 
                                    description={ele.title == null ? "FBI tells passengers on the Alaska Airlines flight that lost a panel they might be crime victims - The Associated Press" : ele.title}/> 
                                    <div id="button">
                                        <a href={ele.url} target="_blank" className="btn btn-primary">
                                            Read More
                                        </a>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        </div>
                    </div>
                    
                    </>

                );

            })
        }
        </div>
    </>
    );
}

export default AppFeature;