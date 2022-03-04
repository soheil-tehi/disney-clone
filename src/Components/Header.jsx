import React, { useEffect } from 'react'
import { auth, provider } from '../firebase'
//style component
import { Nav, Logo, NavMenu, Login, UserImg, SignOut, DropDown } from './Styles Compoennts/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState } from '../feature/user/userSlice'
import { Link } from 'react-router-dom'


export default function Header() {

    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);


    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user)
                history.push("/home")
            }
        })
    }, [userName])

    const handleAuth = () => {
        if (!userName) {
            auth.signInWithPopup(provider)
                .then(result => setUser(result.user))
                .catch(error => console.log(error))
        } else if (userName) {
            auth.signOut()
                .then(() => {
                    dispatch(setSignOutState())
                    history.push("/")
                })
                .catch(error => console.log(error))
        }
    }

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
        }))
    }

    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney" />
            </Logo>

            {
                !userName ? <Login onClick={handleAuth}>Login</Login>
                    :
                    <>
                        <NavMenu>
                            <Link to="/home">
                                <img src="/images/home-icon.svg" alt="Home" />
                                <span>HOME</span>
                            </Link>
                            <a href="#">
                                <img src="/images/search-icon.svg" alt="SEARCH" />
                                <span>SEARCH</span>
                            </a>
                            <a href="#">
                                <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                                <span>WATCHLIST</span>
                            </a>
                            <a href="#">
                                <img src="/images/original-icon.svg" alt="ORIGINALS" />
                                <span>ORIGINALS</span>
                            </a>
                            <a href="#">
                                <img src="/images/movie-icon.svg" alt="MOVIES" />
                                <span>MOVIES</span>
                            </a>
                            <a href="#">
                                <img src="/images/series-icon.svg" alt="SERIES" />
                                <span>SERIES</span>
                            </a>
                        </NavMenu>
                        <SignOut>
                            <UserImg src={`${userPhoto}`} alt={userName} />
                            <DropDown>
                                <span onClick={handleAuth}>Sign Out</span>
                            </DropDown>
                        </SignOut>
                    </>
            }
        </Nav>
    )
}
