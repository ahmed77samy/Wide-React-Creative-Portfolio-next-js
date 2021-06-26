import { worklist } from "./work";

export const layerhome = [
    {
        photo: "demo-1.png",
        title: "demo 01",
        dir: "/main/home_1",
        tag: "main",
    },
    {
        photo: "demo-2.png",
        title: "demo 02 / video",
        dir: "/main/home_2",
        tag: "main",
    },
    {
        photo: "demo-3.png",
        title: "personal",
        dir: "/main/home_personal",
        tag: "main",
    },
];

export const layerslider = [
    {
        photo: "slider-1.png",
        title: "slider / full screen",
        dir: "/slider/fullscreen",
        tag: "parallex",
    },
    {
        photo: "slider-2.png",
        title: "slider / full screen",
        dir: "/slider/video",
        tag: "video",
    },
    {
        photo: "slider-3.png",
        title: "slider / full screen / vertical",
        dir: "/slider/vertical",
        tag: "parallex",
    },
    {
        photo: "slider-4.png",
        title: "slider / duplicated gray",
        dir: "/slider/duplicated_gray",
        tag: "parallex",
    },
    {
        photo: "slider-5.png",
        title: "slider / half right",
        dir: "/slider/half_right",
        tag: "parallex",
    },
    {
        photo: "slider-6.png",
        title: "slider / half left",
        dir: "/slider/half_left",
        tag: "parallex",
    },
];

export const layerportfolio = [
    {
        photo: "portfolio-1.png",
        title: "portfolio / vertical",
        dir: "/portfolio/vertical",
        tag: "work",
    },
    {
        photo: "portfolio-2.png",
        title: "portfolio / horizontal",
        dir: "/portfolio/horizontal",
        tag: "work",
    },
    {
        photo: "portfolio-3.png",
        title: "portfolio / four columns",
        dir: "/portfolio/fourcolumns",
        tag: "work",
    },
    {
        photo: "portfolio-4.png",
        title: "portfolio / two columns",
        dir: "/portfolio/twocolumns",
        tag: "work",
    },
    {
        photo: "portfolio-5.png",
        title: "portfolio / full swipper",
        dir: "/portfolio/fullswipper",
        tag: "swipper",
    },
    {
        photo: "portfolio-6.png",
        title: "portfolio / single",
        dir: `/portfolio/${worklist[0].id}`,
        tag: "details",
    },
];
