import "./Stack.css";
import htmlIcon from "./assets/html-icon.svg";
import cssIcon from "./assets/css-icon.svg";
import jsIcon from "./assets/js-icon.svg";
import tsIcon from "./assets/ts-icon.svg";
import python from './assets/python.png';
import php from './assets/php.png';
import bootstrap from './assets/bootstrap.jpg';
import sass from './assets/sass.png';
import tailwind from './assets/tailwind.png';
import mui from './assets/mui.png';
import reactIcon from "./assets/react-icon.svg";
import vuejs from './assets/vuejs.png';
import augular from './assets/angular.png';
import figmaIcon from "./assets/figma-icon.svg";
import nextjs from './assets/nextjs.png';
import expressIcon from "./assets/express-icon.svg";
import laravel from "./assets/laravel.jpg";
import rubyonrails from './assets/rubyonrails.png';
import django from './assets/django.png';
import mysql from './assets/mysql.png';
import postgresql from './assets/postgresql.jpg';
import mongoIcon from "./assets/mongo-icon.svg"
import firebase from './assets/firebase.png';
import prisma from './assets/prisma.jpg';
import graph from './assets/graphql.png';
import aws from './assets/aws.png';
import azure from './assets/azure.jpg';
import docker from './assets/docker.png';
import gcp from './assets/GCP.jpg';
import jenkins from './assets/jenkins.jpg';


const stackInfo = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "TypeScript", icon: tsIcon },
    { name: "PHP", icon: php },
    { name: "Python", icon: python },
    { name: "Bootstrap", icon: bootstrap },
    { name: "SASS", icon: sass },
    { name: "TailwindCSS", icon: tailwind },
    { name: "MaterialUI", icon: mui },
    { name: "React.JS", icon: reactIcon },
    { name: "Vue.JS", icon: vuejs },
    { name: "Augular.JS", icon: augular },
    { name: "Next.JS", icon: nextjs },
    { name: "Express.JS", icon: expressIcon },
    { name: "Laravel", icon: laravel },
    { name: "Ruby on Rails", icon: rubyonrails },
    { name: "django", icon: django },
    { name: "Mysql", icon: mysql },
    { name: "Postgresql", icon: postgresql },
    { name: "MongoDB", icon: mongoIcon },
    { name: "Firebase", icon: firebase },
    { name: "Prisma", icon: prisma },
    { name: "Graph", icon: graph },
    { name: "Figma", icon: figmaIcon },
    { name: "Aws", icon: aws },
    { name: "Azure", icon: azure },
    { name: "Docker", icon: docker },
    { name: "Google Could Platform", icon: gcp },
    { name: "Jenkins", icon: jenkins },
]

function Stack() {
    const allStack = stackInfo.map(({ icon, name }) => {
        return <div key={name} className="single-stack">
            <img src={icon} alt="icon" />

            <h2 className={name == "Figma" ? "italic" : ""}>{name}</h2>
        </div>
    })
    return (
        <section className="stack-section">
            <div className="inner-wrapper">

                <h1 className="main-heading">My Stack</h1>

                <div className="stack-container">
                    {allStack}
                </div>

            </div>
        </section>
    )
}

export default Stack