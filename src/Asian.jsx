import React from 'react'
import { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import gsap from 'gsap'

function Asian() {
  
    useEffect(() => {

        const allText = document.querySelectorAll('.sub .d-grid .col')
        const allImages = document.querySelectorAll("img")

        gsap.to(allImages,{
            "--dropdown":"100%",
            ease:"power2.inOut",
            duration:2,
            stagger:0.2,
        })

        // allImages.forEach((elem,i) => {
        // })

        allText.forEach((elem,i) => {
            const rText = elem.children[1].children[1].children[0].children[0]
            const lText = elem.children[1].children[1].children[1].children[0]

            console.log(rText,lText)

            const shadowrText = elem.children[1].children[1].children[0].children[1]
            const shadowlText = elem.children[1].children[1].children[1].children[1]

            // console.log(shadowrText)
            // console.log(shadowlText)

            const gsaprText = gsap.utils.toArray(rText)
            const gsaplText = gsap.utils.toArray(lText)
            const gsapshadowrText = gsap.utils.toArray(shadowrText)
            const gsapshadowlText = gsap.utils.toArray(shadowlText)
            
            function GsapTextFunctions(array) {
                array.forEach((elem,i) => {
                    elem.innerHTML = elem.textContent.replace(/\S/g, 
                    `
                    <span class="l-hide">
                        <span class='letters'>$&</span>   
                    </span> 
                    `);
                })
            }

            GsapTextFunctions(gsaprText)
            GsapTextFunctions(gsaplText)
            GsapTextFunctions(gsapshadowrText)
            GsapTextFunctions(gsapshadowlText)

            function firstTextFunctions(array) {
                const firstGsap = gsap.utils.toArray(array)
                firstGsap.forEach((elem,i) => {
                    // console.log(elem)
                    gsap.fromTo(elem.children[0],{scale:2,rotate:"-90deg"},{
                        scale:1,
                        delay:1,
                        rotate:"0deg",
                        x:0,
                        // delay:2,
                        duration:(firstGsap.length/(firstGsap.length - i * (0.1 * firstGsap.length))),
                        ease:"power2.inOut"
                    })
                })
            }

            const rFirst = rText.children
            const tFirst = lText.children

            const shadowrFirst = shadowrText.children
            const shadowtFirst = shadowlText.children
    
            firstTextFunctions(rFirst)
            firstTextFunctions(tFirst)

            firstTextFunctions(shadowrFirst)
            firstTextFunctions(shadowtFirst)


        })

    },[])

    return (
        <div className='container-fluid items'>
            <div className="black-top"></div>
            <div className="topper p-md-5  row row-cols-md-2">

                <div className="main col-8 col-md-3 offset-2 offset-md-0 p-5 p-md-0">
                    <div className="m col">
                        <img src="./img/men1.png" alt="" />
                    </div>
                </div>
                
                <div className="sub col-md-7 offset-md-2  p-4 p-md-0">
                    <div className="d-grid gap-3 gap-md-5">
                        <div className="f col">
                            <img src="./img/men1.png" alt="" />
                            <div className="b-1">
                                <div className="text-top">
                                    <h3> NECK </h3>
                                </div>
                                <div className="text-bottom">
                                    <div className="r-text">
                                        <h1>
                                            FLOWERS
                                        </h1>
                                        <h1 className='shadow'>
                                            FLOWERS
                                        </h1>
                                    </div>
                                    <div className="l-text">
                                        <h1>
                                            フラワーズ
                                        </h1>
                                        <h1 className='shadow'>
                                            フラワーズ
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="s col">
                            <img src="./img/men1.png" alt="" />
                            <div className="b-2">
                                <div className="text-top">
                                    <h3> CHESS </h3>
                                </div>
                                <div className="text-bottom">
                                    <div className="r-text">
                                        <h1>
                                            DRAGON
                                        </h1>
                                        <h1 className='shadow'>
                                            DRAGON
                                        </h1>
                                    </div>
                                    <div className="l-text">
                                        <h1>
                                            ドラゴン
                                        </h1>
                                        <h1 className='shadow'>
                                            ドラゴン
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="t col">
                            <img src="./img/men1.png" alt="" />
                            <div className="b-3">
                                <div className="text-top">
                                    <h3> SHOULDER </h3>
                                </div>
                                <div className="text-bottom">
                                    <div className="r-text">
                                        <h1>
                                            SPINES
                                        </h1>
                                        <h1 className='shadow'>
                                            SPINES
                                        </h1>
                                    </div>
                                    <div className="l-text">
                                        <h1>
                                            背骨
                                        </h1>
                                        <h1 className='shadow'>
                                            背骨
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>

            <div className="bottomer row row-cols-md-2">
                <div className="buttonSide">
                
                <div className="left">
                    <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M19.733 0.338946C19.6485 0.231505 19.5482 0.146262 19.4378 0.0881004C19.3274 0.0299385 19.209 0 19.0894 0C18.9699 0 18.8515 0.0299385 18.7411 0.0881004C18.6306 0.146262 18.5303 0.231505 18.4459 0.338946L7.53858 14.1835C7.45394 14.2906 7.38678 14.418 7.34095 14.5581C7.29513 14.6983 7.27155 14.8486 7.27155 15.0003C7.27155 15.1521 7.29513 15.3023 7.34095 15.4425C7.38678 15.5826 7.45394 15.71 7.53858 15.8171L18.4459 29.6617C18.6166 29.8783 18.8481 30 19.0894 30C19.3308 30 19.5623 29.8783 19.733 29.6617C19.9036 29.445 19.9995 29.1512 19.9995 28.8448C19.9995 28.5385 19.9036 28.2446 19.733 28.028L9.46736 15.0003L19.733 1.9726C19.8176 1.86543 19.8848 1.73812 19.9306 1.59795C19.9764 1.45779 20 1.30753 20 1.15577C20 1.00402 19.9764 0.853758 19.9306 0.713594C19.8848 0.573429 19.8176 0.446116 19.733 0.338946V0.338946Z" fill="#FF0000"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.4615 0.338946C12.377 0.231505 12.2767 0.146262 12.1663 0.0881004C12.0559 0.0299385 11.9375 0 11.8179 0C11.6984 0 11.58 0.0299385 11.4696 0.0881004C11.3592 0.146262 11.2588 0.231505 11.1744 0.338946L0.267097 14.1835C0.18245 14.2906 0.115294 14.418 0.0694704 14.5581C0.0236483 14.6983 6.10352e-05 14.8485 6.10352e-05 15.0003C6.10352e-05 15.1521 0.0236483 15.3023 0.0694704 15.4425C0.115294 15.5826 0.18245 15.71 0.267097 15.8171L11.1744 29.6617C11.3451 29.8783 11.5766 30 11.8179 30C12.0593 30 12.2908 29.8783 12.4615 29.6617C12.6322 29.445 12.728 29.1512 12.728 28.8448C12.728 28.5385 12.6322 28.2446 12.4615 28.028L2.19587 15.0003L12.4615 1.9726C12.5461 1.86543 12.6133 1.73812 12.6591 1.59795C12.7049 1.45779 12.7285 1.30753 12.7285 1.15577C12.7285 1.00402 12.7049 0.853758 12.6591 0.713594C12.6133 0.573429 12.5461 0.446116 12.4615 0.338946Z" fill="#FF0000"/>
                    </svg>
                </div>

                <div className="right">
                    <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.267036 0.338946C0.351469 0.231505 0.451772 0.146262 0.5622 0.0881004C0.672628 0.0299385 0.791011 0 0.910568 0C1.03013 0 1.14851 0.0299385 1.25894 0.0881004C1.36936 0.146262 1.46967 0.231505 1.5541 0.338946L12.4614 14.1835C12.5461 14.2906 12.6132 14.418 12.659 14.5581C12.7049 14.6983 12.7285 14.8485 12.7285 15.0003C12.7285 15.1521 12.7049 15.3023 12.659 15.4425C12.6132 15.5826 12.5461 15.71 12.4614 15.8171L1.5541 29.6617C1.38342 29.8783 1.15194 30 0.910568 30C0.669197 30 0.437711 29.8783 0.267036 29.6617C0.0963609 29.445 0.00047676 29.1512 0.00047676 28.8448C0.00047676 28.5385 0.0963609 28.2446 0.267036 28.028L10.5326 15.0003L0.267036 1.9726C0.182389 1.86543 0.115232 1.73812 0.0694093 1.59795C0.0235868 1.45779 0 1.30753 0 1.15577C0 1.00402 0.0235868 0.853758 0.0694093 0.713594C0.115232 0.573429 0.182389 0.446116 0.267036 0.338946Z" fill="#FF0000"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.53852 0.338946C7.62295 0.231505 7.72326 0.146262 7.83368 0.0881004C7.94411 0.0299385 8.06249 0 8.18205 0C8.30161 0 8.41999 0.0299385 8.53042 0.0881004C8.64085 0.146262 8.74115 0.231505 8.82558 0.338946L19.7329 14.1835C19.8175 14.2906 19.8847 14.418 19.9305 14.5581C19.9764 14.6983 19.9999 14.8485 19.9999 15.0003C19.9999 15.1521 19.9764 15.3023 19.9305 15.4425C19.8847 15.5826 19.8175 15.71 19.7329 15.8171L8.82558 29.6617C8.65491 29.8783 8.42342 30 8.18205 30C7.94068 30 7.7092 29.8783 7.53852 29.6617C7.36784 29.445 7.27196 29.1512 7.27196 28.8448C7.27196 28.5385 7.36784 28.2446 7.53852 28.028L17.8041 15.0003L7.53852 1.9726C7.45387 1.86543 7.38672 1.73812 7.34089 1.59795C7.29507 1.45779 7.27148 1.30753 7.27148 1.15577C7.27148 1.00402 7.29507 0.853758 7.34089 0.713594C7.38672 0.573429 7.45387 0.446116 7.53852 0.338946Z" fill="#FF0000"/>
                    </svg>
                </div>

                </div>
                <div className="logoSide">
                    <div className="logoMain">
                        <div className="logoTitle">
                            <h1> Asian Tattoos </h1>
                        </div>
                        <div className="logoSemiTitle">
                            <h1> アジアの入れ墨 </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Asian