import React from 'react'
//slick-carousel CSS
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import styled from 'styled-components'


export default function ImgSlider() {
    let setting = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToSlow: 1,
        slideToScroll: 1,
        autoplay: true,
    }

    return (
        <Carousel {...setting}>
            <Wrap>
                <a >
                    <img src="/images/slider-badag.jpg" alt="slider-badag" />
                </a>
            </Wrap>
            <Wrap>
                <a >
                    <img src="/images/slider-badging.jpg" alt="slider-badging" />
                </a>
            </Wrap>
            <Wrap>
                <a >
                    <img src="/images/slider-scale.jpg" alt="slider-scale" />
                </a>
            </Wrap>
            <Wrap>
                <a >
                    <img src="/images/slider-scales.jpg" alt="slider-scales" />
                </a>
            </Wrap>
        </Carousel>
    )
}


const Carousel = styled(Slider)`
    margin-top: 20px;

    &>button{
        opacity: 0;

        &:hover{
            opacity: 1;
            transition: opacity 0.2s ease;
        }
    }

    ul li button{
       &:before{
           font-size: 11px;
           color: #fff;
       }
    }

    li.slick-active button:before{
        color: white;
    }

    .slick-list{
        overflow: initial;
    }

    /* .slick-prev{
        left: -75px;
    }

    .slick-next{
        right: -75px;
    } */

`;

const Wrap = styled.div`
    position: relative;
    cursor: pointer;
    border-radius: 4px;

    a{
        border-radius: 4px;
        display: block;
        border: 4px solid transparent;
        transition: all ease 0.4s;

        :hover{
            border-color: #ccc;
        }
        img{
            width: 100%;
            height: 100%;
            border-radius:4px;
        }
    }

`;