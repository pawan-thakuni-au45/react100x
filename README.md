

1--whar are single page application-->single page applications are used in web app 's it has single HTML page ,this html page changed as user interact with the website{example--linkediN}
2--npm create vite@latest
2--npm install 
3--npm run dev
==============================================================================================

4--import {browseRouter,routes,route} from react-router-dom
5--use{Link to="/" for make spa ,to check go in network tab there will be no html rendering}==const navigate=useNavigate()==>navigate("/") we can do this.
6--route path *              =>to get error
7--Layouts=={outlet} ==> 
const layout=()=>{
    header

    <outlet>{many routes or component will be here}
    footer
}
=========================================================================================

useRef==>
const inputRef=useRef()
<input ref={inputRef}></input>