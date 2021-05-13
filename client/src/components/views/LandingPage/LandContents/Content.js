import React from 'react';
import ShoppingCard from './ShoppingCard';

// spacing 은 card 간의 간격을 준다.
// 더 많은 쇼핑 카드를 만들어낸다고 하더라도
// 자동으로 내려간다. => 왜? 간격을 충분히 다 사용해으니까

const Content = () => {
    return (
        <ShoppingCard 
        title="눈오리 제조기"
        subtitle="5000원"
        imgSrc="http://img2.tmon.kr/cdn3/deals/2020/12/04/2850693662/2850693662_front_d326065361.jpg"
        description="귀여운 입체 캐릭터 눈덩이 제조기! 겨울철 눈놀이 필수템으로 즐겁게~ 눈사람, 눈싸움 등 독특하고 다양하게 활용해 보세요."
        star="5점만점 4.5점"
        />
    );
};

export default Content;