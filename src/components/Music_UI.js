import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from 'react-custom-slider';
import { useState } from "react";
import {
    faArrowRight, faBackward, faBackwardStep,
    faClock,
    faCompass,
    faDotCircle,
    faFile, faFileArrowUp, faFileCirclePlus,
    faFileExcel,
    faFileInvoice,
    faFolder,
    faFolderClosed, faForwardStep,
    faHandRock,
    faHeart,
    faHome,
    faPlay,
    faPlayCircle,
    faPlusSquare, faRepeat,
    faSearch,
    faSignOut, faSquarePlus,
    faTag,
    faTimesSquare,
    faTools,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import "../Music_UI.css";
import img1 from '../assets/img_1.jpg';
import img2 from '../assets/img_5.jpg';
import img3 from '../assets/img_10.jpg';
import img4 from '../assets/img_8.jpg';
import img5 from '../assets/img_7.jpg';
import img6 from '../assets/img_2.jpg';
import img7 from '../assets/img_4.jpg';
import img8 from '../assets/img_6.jpg';
import FormRange from "react-bootstrap/FormRange";

export function MusicUI() {

    const [value, setValue] = useState(50);
    return (<Container fluid className="vh-100">
        <Row>
            <Col className="left-side vh-100 px-0 col-2">
                <Container fluid className="side-bar ps-3 pe-0">
                    <Row>
                        <Col className="d-flex justify-content-start">
                            <p className="p-0 mt-3 mb-4">
                                <FontAwesomeIcon size="xl" icon={faPlayCircle} />
                                <span
                                    className="ms-2" style={{ fontWeight: "700" }}>
                                    Rungon
                                </span>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            className="menu-item-container">
                            <span className="menu-title">MENU</span>
                            <ul style={{ listStyle: "none" }} className="p-0">
                                <li>
                                    <a href="/home">
                                        <FontAwesomeIcon size="sm" icon={faHome} />
                                        <span>Home</span>
                                        <div></div>
                                    </a>
                                </li>
                                <li>
                                    <a className="selected" href="/search">
                                        <FontAwesomeIcon size="sm" icon={faSearch} />
                                        <span>Search</span>
                                        <div></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/discover">
                                        <FontAwesomeIcon size="sm" icon={faCompass} />
                                        <span>Discover</span>
                                        <div></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/albums">
                                        <FontAwesomeIcon size="sm" icon={faTag} />
                                        <span>Albums</span>
                                        <div></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/artists">
                                        <FontAwesomeIcon size="sm" icon={faUser} />
                                        <span>Artists</span>
                                        <div></div>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            className="menu-item-container">
                            <span className="menu-title">LIBRARY</span>
                            <ul style={{ listStyle: "none" }} className="p-0">
                                <li>
                                    <a href="/recent">
                                        <FontAwesomeIcon size="sm" icon={faClock} />
                                        <span>Recent</span>
                                        <div></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/favourites">
                                        <FontAwesomeIcon size="sm" icon={faHeart} />
                                        <span>Favourites</span>
                                        <div></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/local">
                                        <FontAwesomeIcon size="sm" icon={faFolderClosed} />
                                        <span>Local</span>
                                        <div></div>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            className="menu-item-container">
                            <span className="menu-title">PLAYLIST</span>
                            <ul style={{ listStyle: "none" }} className="p-0">
                                <li>
                                    <a href="/create_new">
                                        <FontAwesomeIcon size="sm" icon={faPlusSquare} />
                                        <span>Create New</span>
                                        <div></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/pop_punk">
                                        <FontAwesomeIcon size="sm" icon={faFileInvoice} />
                                        <span>Pop Punk</span>
                                        <div></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/rocks">
                                        <FontAwesomeIcon size="sm" icon={faHandRock} />
                                        <span>Rocks</span>
                                        <div></div>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            className="menu-item-container">
                            <span className="menu-title">GENERAL</span>
                            <ul style={{ listStyle: "none" }} className="p-0">
                                <li>
                                    <a href="/settings">
                                        <FontAwesomeIcon size="sm" icon={faTools} />
                                        <span>Settings</span>
                                        <div></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/logout">
                                        <FontAwesomeIcon size="sm" icon={faSignOut} />
                                        <span>Log Out</span>
                                        <div></div>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Col>
            <Col className="center-container vh-100 w-100">
                <Container className="main">
                    <Row>
                        <Col>
                            <ul className="m-0 ">
                                <li className="selected">Music</li>
                                <li>Podcast</li>
                                <li>Live</li>
                                <li>Radio</li>
                            </ul>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <div className="main-menu align-self-end">
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <Container className="main-card">
                                <Row className="main-card-container justify-content-between">
                                    <Col className="px-0">
                                        <span className="main-card-title">Global Top 50</span>
                                    </Col>
                                    <Col className="text-end px-0">
                                        <span className="main-card-sub-title">See all</span>
                                    </Col>
                                </Row>
                                <Row className="mt-3 justify-content-between global-container">
                                    <div className="global-container-item">
                                        <GeneralCardComponent title="Told You So" desc="Paramore" img={img1} />
                                        <GeneralCardComponent title="The Adventure" desc="Angles Airwaves"
                                            img={img2} />
                                        <GeneralCardComponent title="Paradise City" desc="Guns N Roses" img={img3} />
                                        <GeneralCardComponent title="18 And Life" desc="Skid Row" img={img4} />
                                    </div>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <Container className="main-card">
                                <Row className="main-card-container justify-content-between">
                                    <Col className="px-0">
                                        <span className="main-card-title">Songs You Might Like</span>
                                    </Col>
                                    <Col className="text-end px-0">
                                        <span className="main-card-sub-title">See all</span>
                                    </Col>
                                </Row>
                                <Row className="mt-3 justify-content-between global-container">
                                    <div className="global-container-item">
                                        <GeneralCardComponent title="Last Hope" desc="Paramore" img={img5} />
                                        <GeneralCardComponent title="Basket Case" desc="Green Day" img={img6} />
                                        <GeneralCardComponent title="Patience" desc="Guns N Roses" img={img7} />
                                        <GeneralCardComponent title="Jet Lag" desc="Simple Plan" img={img8} />
                                    </div>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <Container className="main-card">
                                <Row className="main-card-container justify-content-between">
                                    <Col className="px-0">
                                        <span className="main-card-title">Recently Played</span>
                                    </Col>
                                    <Col className="text-end px-0">
                                        <span className="main-card-sub-title">See all</span>
                                    </Col>
                                </Row>
                                <Row className="mt-3 justify-content-between global-container">
                                    <div className=" d-flex flex-column w-100 px-0">
                                        <RecentlyPlayedItemComponent count="01" title="I Miss You" desc="Blink 182"
                                            duration="3:45" img={img5} />
                                        <RecentlyPlayedItemComponent count="02" title="When"
                                            desc="Green Day"
                                            duration="2:32" img={img7} />
                                        <RecentlyPlayedItemComponent count="03" title="Ignorance" desc="Paramore"
                                            duration="3:15" img={img2} />
                                    </div>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Col>
            <Col className="right-side col-3 right-side">
                <Container className="fluid ">
                    <Row
                        className="notifications align-content-center justify-content-center align-items-center">
                        <Col className="px-0">
                            <span className="main-card-title">Notifications</span>
                        </Col>
                        <Col className="d-flex justify-content-end px-0">
                            <div className="main-menu align-self-end">
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col className="notification-content-container">
                            <Row className="">
                                <Col className="mx-0 px-0  col-2">
                                    <div className="playlist-added-icon ">
                                        <FontAwesomeIcon className="font-icon" icon={faFileCirclePlus} />
                                    </div>
                                </Col>
                                <Col className="col-8">
                                    <div
                                        className="notification-content d-flex justify-content-center flex-column h-100">
                                        <p className="mb-1 ">
                                            Playlist Added
                                        </p>
                                        <span>106 Songs</span>
                                    </div>
                                </Col>
                                <Col className=" received px-0 my-1">
                                    <span>2 Mins</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col className="notification-content-container">
                            <Row className="">
                                <Col className="mx-0 px-0  col-2">
                                    <div className="playlist-added-icon ">
                                        <FontAwesomeIcon className="font-icon" icon={faFileArrowUp} />
                                    </div>
                                </Col>
                                <Col className="col-5">
                                    <div
                                        className="notification-content d-flex justify-content-center flex-column  h-100">
                                        <p className="mb-1 ">
                                            Playlist Shared
                                        </p>
                                        <span>106 Songs</span>
                                    </div>
                                </Col>
                                <Col className=" received px-0 my-1">
                                    <span>2 Mins</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row
                        className="mt-4 notifications align-content-center justify-content-center align-items-center">
                        <Col className="px-0">
                            <span className="main-card-title">Top Artists</span>
                        </Col>
                        <Col className="d-flex justify-content-end px-0">
                            <div className="main-menu align-self-end">
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <ArtistsCard img={img1} title="Blink 182" />
                        <ArtistsCard img={img2} title="Green Day" />
                        <ArtistsCard img={img3} title="Paramore" />
                        <ArtistsCard img={img4} title="Scorpions" />
                        <ArtistsCard img={img5} title="Simple Plan" />
                        <ArtistsCard img={img6} title="Skid Row" />
                    </Row>
                    <Row className="mt-4">
                        <Container className="playing-card-container">
                            <Row>
                                <p className="my-3 title">Now Playing</p>
                            </Row>
                            <Row className="mt-2 mb-3 img-container align-items-center ">
                                <div className="d-flex justify-content-center">
                                    <img src={img2} />
                                </div>
                            </Row>
                            <Row>
                                <p className="mt-2 mb-1 song-title">The Adventure</p>
                            </Row>
                            <Row>
                                <p className=" mb-3 song-lyrics">Angels Airwaves</p>
                            </Row>
                            <Row className="mt-2 align-items-center">
                                <Col className="d-flex justify-content-end align-items-center">
                                    <p className="start-duration mb-0">2:45</p>
                                </Col>
                                <Col className=" px-0">
                                    {/*<div>
                                            <input type="range" min="1" max="100" value="50" className="song-slider"/>
                                        </div>*/}
                                    <Slider
                                        value={value}
                                        onChange={(value) => setValue(value)}
                                        valueRenderer={(value) => `${value}%`}
                                        showValue={false}
                                        fillColor="white"
                                        trackColor="#5bb0b0"
                                        handlerShape="rounded"
                                        markers={0}
                                        handlerBorderColor="#fff"
                                        trackThickness={3}
                                        trackLength={130}
                                        valueLabelPadding={0}
                                    />
                                </Col>
                                <Col className="">
                                    <p className="end-duration mb-0">3:29</p>
                                </Col>
                            </Row>
                            <Row className="play-actions-container mt-4 mb-5  justify-content-evenly">
                                <Col className="">
                                    <div className="icon-container">
                                        <FontAwesomeIcon className="font-repeat" icon={faRepeat} />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="icon-container">
                                        <FontAwesomeIcon className="font-previous" icon={faBackwardStep} />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="icon-container play-icon">
                                        <FontAwesomeIcon className="font-icon" icon={faPlay} />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="icon-container">
                                        <FontAwesomeIcon className="font-icon" icon={faForwardStep} />
                                    </div>
                                </Col>
                                <Col className="">
                                    <div className="icon-container ">
                                        <FontAwesomeIcon className="font-icon" icon={faRepeat} />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                </Container>
            </Col>
        </Row>
    </Container>
    )
}

function GeneralCardComponent(
    {
        title, desc, img
    }
) {
    return (<div className="general-card ">
        <Row>
            <Col className="px-2">
                <div className="general-header">
                    <img className="general-img" src={img} alt="logo" />
                    <div className="play-icon">
                        <FontAwesomeIcon className="font-icon" icon={faPlay} />
                    </div>
                </div>
            </Col>
        </Row>
        <Row className="general-content px-0 mx-0">
            <Col className="px-0 mt-2">
                <p className="general-title mb-0">
                    {title}
                </p>
                <span className="general-desc">
                    {desc}
                </span>
            </Col>
        </Row>

    </div>)
}

function RecentlyPlayedItemComponent(
    {
        count, title, desc, img, duration
    }
) {
    return (
        <Container className="recent-container my-2 px-0 container-fluid">
            <Row className="">
                <Col className="">
                    <Row className="justify-content-center align-items-center align-content-center">
                        <Col className="col-1">
                            <span className="recent-count">{count}</span>
                        </Col>
                        <Col className="col-2">
                            <img className="recent-img" src={img} alt="logo" />
                        </Col>
                        <Col>
                            <div className="recent-content ">
                                <p className="mb-0">
                                    {title}
                                </p>
                                <span>{desc}</span>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col className="recent-right ">
                    <Row className="justify-content-end align-items-center align-content-center">
                        <Col className="col-2">
                            <span>{duration}</span>
                        </Col>
                        <Col className="col-2">
                            <div className="play-icon ">
                                <FontAwesomeIcon className="font-icon" icon={faPlay} />
                            </div>
                        </Col>
                        <Col className="col-2">
                            <div className="play-add ">
                                <FontAwesomeIcon className="font-icon" icon={faPlusSquare} />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>)
}

function ArtistsCard(
    {
        title, img
    }
) {
    return (
        <Col className="artists-container px-0">
            <img src={img} />
            <p className="">{title}</p>
        </Col>
    );
}