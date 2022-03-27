import React from "react";
import Card2 from "./Card2";

const Card = (props) => {
    return (
        <div>      
            <Card2 title ='Young Lady' image="//placeimg.com/290/180/any" price = '5000 GHC' availability = 'Get Now' disabled imageAlt="First Image" />
            <Card2 title ='Nature' image="//placeimg.com/250/250/nature" price = '1500 GHC' availability = 'Get Now' />
            <Card2 title ='Anime' image="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/1.jpg" price = '10 GHC' availability = 'Get Now' />
            <Card2 title ='Sports Car' image="https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC011A021001.jpg&width=440&height=262" price = '3550 GHC' availability = 'Get Now' />
            <Card2 title ='Mobile Phones' image="https://www.yaantra.com/ItemImages/Catalog/Products/ThumbNail/RCOne0054_4.jpg" price = '500 GHC' availability = 'Get Now' />
            <Card2 title ='Office Setup' image="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg" price = '1000 GHC' availability = 'Not Available' />
        </div>
    )
}
export default Card;