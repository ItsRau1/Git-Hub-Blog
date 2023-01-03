import { 
    useContext, 
    useEffect, 
} from "react";

import { 
    ArrowSquareOut, 
    Buildings, 
    MapPinLine, 
    TwitterLogo, 
    Users 
} from "phosphor-react";

import { 
    HeaderProfile, 
    HeaderProfileToSearch, 
    MainInfoToSearch, 
    ProfileContainer, 
    ProfileContainerToSearch, 
    ProfileContent, 
    ProfileContentToSearch, 
    ProfileImage, 
    ProfileImageToSearch, 
    StatsToSearch, 
    ToRedirect 
} from "./style";

import { 
    TransactionsContext 
} from "../../contexts/Context";

export function Profile () {

    const { Consume, profiles } = useContext(TransactionsContext)

    useEffect(()=> {
        Consume()
    }, [])
    

    return (
        <div>
            {profiles.map((profile:any)=>{
                return ( 
                    <div>
                        {(profile.followers) ? 
                            <ProfileContainerToSearch key={profile.id}>
                                <ToRedirect>
                                    <ProfileImageToSearch>
                                        <img src={profile.avatar_url} alt="" />
                                    </ProfileImageToSearch>
                                    <a href={profile.html_url} target="blank">
                                            GITHUB
                                            <ArrowSquareOut size={16} />
                                    </a>
                                </ToRedirect>
                                <ProfileContentToSearch>
                                    <HeaderProfileToSearch>
                                        <h2>{profile.name}</h2>
                                        <p>{profile.login}</p>
                                    </HeaderProfileToSearch>
                                    <MainInfoToSearch>
                                        <p>{profile.bio}</p>

                                        {(profile.company) ? 
                                        <span>
                                        <Buildings size={16} color="#fff"/>
                                        <p>{profile.company}</p>
                                        </span> : ''}

                                        {(profile.location) ? 
                                         <span>
                                         <MapPinLine size={16} color="#fff"/>
                                         <p>{profile.location}</p>
                                         </span>: ''}

                                        {(profile.twitter_username) ?
                                        <span>
                                        <TwitterLogo size={16} color="#1DA1F2"/>
                                        <p>{profile.twitter_username}</p>
                                        </span> : ''}
                                    </MainInfoToSearch>
                                    <StatsToSearch>

                                        <span>
                                        <Users size={16} />
                                        <p>{profile.followers} ● Seguidores</p>
                                        </span>
                                        
                                        <span>
                                        <Users size={16} />
                                        <p>{profile.following} ● Seguindo</p>
                                        </span>

                                    </StatsToSearch>
                                </ProfileContentToSearch>
                            </ProfileContainerToSearch>                            
                               
                        : 
                            <ProfileContainer key={profile.id}>
                                <ProfileImage>
                                    <img src={profile.avatar_url} alt="" />
                                </ProfileImage>
                                <ProfileContent>
                                    <HeaderProfile>
                                        <h2>{profile.login}</h2>
                                        <a href={profile.html_url} target="blank">
                                            GITHUB
                                            <ArrowSquareOut size={16} />
                                        </a>
                                    </HeaderProfile>
                                </ProfileContent>
                            </ProfileContainer>
                            }
                </div>
             
                )
            }
                )
             }
        </div>
    )
}