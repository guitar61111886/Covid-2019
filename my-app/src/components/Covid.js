import React from 'react';
import styled from 'styled-components';
import flag from './img//flag1.png';

//ตกแต่งส่วน ติดเชื้อสะสม Confirmed
const Confirmed1 = styled.h2`
    /* padding: 1em;
    width: 60; */
    padding-top: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
    padding-left:50px;

    border-radius: 30px;
    background: #696969;
    `;

//ตกแต่งส่วน ติดเชื้อสะสม Confirmed
const Title = styled.p`
    font-weight: 500;
    font-size: 1.5rem;
    margin-top: -5px;
    margin-bottom: 5px;
    line-height: inherit;
    text-align: center;
    font-family: Verdana;
    color: #F0FFFF;
    display: flex;
    justify-content: flex-start;
    `;

//ตกแต่งส่วน หายแล้ว Recovered
const Recovered1 = styled.h2`
    padding-top: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
    padding-left:50px;
    margin-left: 10;
    /* padding: 1em;
    width: 60; */
    /* width: 100%;
    height: 100%; */
    border-radius: 30px;
    background: #008000;
    `;

const Title2 = styled.p`
    font-weight: 500;
    font-size: 1.5rem;
    margin-top: -5px;
    margin-bottom: 5px;
    line-height: inherit;
    text-align: center;
    font-family: Verdana;
    color: #F0FFFF;
    `;

// รักษาอยู่ในโรงพยาบาล
const Hospitalized1 = styled.h2`
//    padding: 1em;
    padding-top: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
    padding-left:50px;
    /* width: 100%;
    height: 100%; */
    border-radius: 30px;
    background: #EDD52E;
    `;

const Title3 = styled.p`
    font-weight: 500;
    font-size: 1.5rem;
    margin-top: -5px;
    margin-bottom: 5px;
    line-height: inherit;
    text-align: center;
    font-family: Verdana;
    color: #F0FFFF;
    `;

//เสียชีวิต
const Deaths1 = styled.h2`
    padding-top: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
    padding-left:50px;    
    /* width: 100%;
    height: 100%; */
    border-radius: 30px;
    background: #DD2E0D;
    `;

const Title4 = styled.p`
    font-weight: 500;
    font-size: 1.5rem;
    margin-top: -5px;
    margin-bottom: 5px;
    line-height: inherit;
    text-align: center;
    font-family: Verdana;
    color: #F0FFFF;
    `;

const Container = styled.div`
    margin-top: 10px;
    /* margin-left: 300px; */
    font-size: 3rem;
    font-weight: normal;
//    text-align: left;
    text-align: center;
//    text-indent: 50px;
    color: #F5F3EE;
`;

const Coco = styled.div`
    margin-top: 15px;
    margin-left: 20px;
    font-size: 90px;
    font-weight: bold;
    color: #DB7093;
    line-height: 0.8;
    text-shadow: 3px 3px 8px #ffffff;
    /* text-align: center; */
`;

const Coco1 = styled.div`
    margin-top: 30px;
    /* margin-left: 300px; */
    font-size: 50px;
    font-weight: normal;
//    text-align: left;
    text-align: center;
//    text-indent: 50px;
    color: #F5F3EE;
`;

const New = styled.div`
    margin-top: 10px;
    /* margin-left: 300px; */
    font-size: 20px;
    font-weight: normal;
//    text-align: left;
    text-align: center;
//    text-indent: 50px;
    color: #F5F3EE;
`;

const GG = styled.div`
    display: flex;
    flex-direction: row;
    /* position: relative;
    display: grid; */
    grid-gap: 1.5rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
        'a a a'
        'b c d';
`;

const ThaiFlag = styled.img`
    width: 110px;
    height: 95px;
    margin-left: 20px;
    position: absolute;
    /* background: url(/src/components/img/flag.png); */
    /* border-radius: 3.47428px; */
`;

// const Wrapper = styled.section`
//     padding: 0.4rem 1rem;
//     position: relative;
//     border-radius: 8px;
//     -webkit-box-align: center;
//     background-color: rgba(255,255,255,0.9);
//     align-items: center;
//     display: flex;
//     opacity: 0.2;
// `;

class Covid extends React.Component {
    render() {
        let data = this.props.data;
        return (
            <div>

                <Container>
                    ยืนยันตัวเลขผู้ติดเชื้อ
                </Container>
                <Coco>
                    Covid-19
                </Coco>
                <Coco1>
                    ทั้งหมดในประเทศไทย
                    <ThaiFlag src={flag} />
                </Coco1>
                <GG>
                    <Confirmed1>
                        <Title>ผู้ติดเชื้อสะสม(ราย)</Title>
                        {data.Confirmed}
                        <New>( เพิ่มขึ้น + {data.NewConfirmed} )</New>
                    </Confirmed1>

                    <Recovered1>
                        <Title2>รักษาหาย</Title2>
                        {data.Recovered}
                        <New>( เพิ่มขึ้น + {data.NewRecovered} )</New>
                    </Recovered1>

                    <Hospitalized1>
                        <Title3>รักษาอยู่ใน รพ.</Title3>
                        {data.Hospitalized}
                        <New>(+ {data.NewHospitalized})</New>
                    </Hospitalized1>

                    <Deaths1>
                        <Title4>เสียชีวิตสะสม</Title4>
                        {data.Deaths}
                        <New>(+ {data.NewDeaths} )</New>
                    </Deaths1>

                </GG>

                <div>
                    <p2>อัพเดทข้อมูลล่าสุด : {data.UpdateDate}</p2>
                </div>

            </div>
        )
    }
}

export default Covid;