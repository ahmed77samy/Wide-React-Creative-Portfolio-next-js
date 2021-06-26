import { worklist } from "./work";
import { bloglist } from "./blog";

const navbar = [
    {
        title: "home",
        target: "/",
    },
    {
        title: "main",
        target: "/main",
        dropdown: [
            {
                title: "demo 01",
                target: "/main/home_1",
            },
            {
                title: "demo 02 / video",
                target: "/main/home_2",
            },
            {
                title: "personal",
                target: "/main/home_personal",
            },
        ],
    },
    {
        title: "slider",
        target: "/slider",
        dropdown: [
            {
                title: "full screen",
                target: "/slider/fullscreen",
            },
            {
                title: "video",
                target: "/slider/video",
            },
            {
                title: "vertical",
                target: "/slider/vertical",
            },
            {
                title: "duplicated gray",
                target: "/slider/duplicated_gray",
            },
            {
                title: "half right",
                target: "/slider/half_right",
            },
            {
                title: "half left",
                target: "/slider/half_left",
            },
        ],
    },
    {
        title: "portfolio",
        target: "/portfolio",
        dropdown: [
            {
                title: "vertical",
                target: "/portfolio/vertical",
            },
            {
                title: "horizontal",
                target: "/portfolio/horizontal",
            },
            {
                title: "Full Swipper",
                target: "/portfolio/fullswipper",
            },
            {
                title: "two columns",
                target: "/portfolio/twocolumns",
            },
            {
                title: "four columns",
                target: "/portfolio/fourcolumns",
            },
            {
                title: "single",
                target: `/portfolio/${worklist[0].id}`,
            },
        ],
    },
    {
        title: "blog",
        target: "/blog",
        dropdown: [
            {
                title: "three columns",
                target: "/blog/threecolumns",
            },
            {
                title: "monster",
                target: "/blog/monster",
            },
            {
                title: "single",
                target: `/blog/${bloglist[0].id}`,
            },
        ],
    },
    {
        title: "about",
        target: "/about",
    },
    {
        title: "contact",
        target: "/contact",
    },
];

export default navbar;
