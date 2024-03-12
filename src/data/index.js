//card images
import cyclist from "../assets/images/cyclist.svg"
import yoga from "../assets/images/yoga.svg"
import skater from "../assets/images/skater.svg"

//menu icons
import home from "../assets/icons/home.svg"
import bhome from "../assets/icons/bhome.svg"
import timeline from "../assets/icons/timeline.svg"
import community from "../assets/icons/community.svg"
import discover from "../assets/icons/discover.svg"
import friends from "../assets/icons/friends.svg"
import bookmark from "../assets/icons/bookmark.svg"
import event from "../assets/icons/event.svg"
import discuss from "../assets/icons/discuss.svg"

//category icons
import sports from "../assets/icons/sports.svg"
import gaming from "../assets/icons/gaming.svg"
import music from "../assets/icons/music.svg"
import science from "../assets/icons/science.svg"


export const CardData = [
    {
        img: cyclist,
        heading: "Real Wild Cyclist",
        text: "We are the wildest cyclist"
    },
    {
        img: yoga,
        heading: "Yoga Forces",
        text: "Welcome to the biggest..."
    },
    {
        img: skater,
        heading: "Skater Boys",
        text: "The best states of skaters"
    }
]

export const MenuData = [
    {
        text: "Home",
        icon: home,
        bicon: bhome,
        href: "/"
    },
    {
        text: "Timeline",
        icon: timeline,
        bicon: "",
        href: "/timeline"
    },
    {
        text: "Community",
        icon: community,
        bicon: "",
        href: "/community"
    },
    {
        text: "Discover",
        icon: discover,
        bicon: "",
        href: "/discover"
    },
    {
        text: "Friends",
        icon: friends,
        bicon: "",
        href: "/friends"
    },
    {
        text: "Bookmark",
        icon: bookmark,
        bicon: "",
        href: "/bookmark"
    },
    {
        text: "Event",
        icon: event,
        bicon: "",
        href: "/event"
    },
    {
        text: "Discussion",
        icon: discuss,
        bicon: "",
        href: "/discussion"
    }
]

export const CategoryData = [
    {
        text: "Sports",
        icon: sports
    },
    {
        text: "Gaming",
        icon: gaming
    },
    {
        text: "Music",
        icon: music
    },
    {
        text: "Tech & Science",
        icon: science
    }
]

export const FriendsData = [
    {
        rank: 1,
        profile: "#D9EDFF",
        name: "Mamang Ironmen",
        category: "Skaters",
        points: "2.140"
    },
    {
        rank: 2,
        profile: "#FFDAD9",
        name: "Ariana Grande",
        category: "Cyclist",
        points: "1.814"
    },
    {
        rank: 3,
        profile: "#D9DAFF",
        name: "Trent Alexander Arnold",
        category: "Skaters",
        points: "1.620"
    },
    {
        rank: 4,
        profile: "#FFDAD9",
        name: "Shakira Wakawaka",
        category: "Yogas",
        points: "1.280"
    }
]

export const ChatData = [
    {
        profile: "#D9EDFF",
        name: "Ironmen",
        text: "When will the event be held",
        time: "10:22 am",
        unread: 1
    },
    {
        profile: "#FFDAD9",
        name: "Ariana Grande",
        text: "Alright then, See you there",
        time: "10:22 am",
        unread: 0
    },
    {
        profile: "#D9DAFF",
        name: "Ariana Grande",
        text: "Come on join my party",
        time: "10:22 am",
        unread: 0
    },
    {
        profile: "#FFDAD9",
        name: "Ariana Grande",
        text: "After that you can see me",
        time: "10:22 am",
        unread: 0
    }
]