// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../latestMatch'
import MatchCard from '../MatchCard'




class TeamMatches extends Component {

state ={
    isLoading :true,
    teamMatchesDta:{},
}

componentDidMount (){
    this.getTeamMatches()
}



getFormattedData= data =>({
        umpires:data.umpires,
        result:data.result,
        manOfTheMatch:data.maon_of_the_match,
        id:data.id,
        venue:data.venue,
        competingTeam:data,competing_team,
        competingTeamLogo:data.competing_team_logo,
        firstInnings:data.first_innings,
        secondInnings:data.second_innings,
        matchStatus: data.amtch_status,
})


getTeamMatches = async () =>{
    const {match} =this.props
    const {params}= match
    const {id} =params

const response =await fetch(`${teamMatchesApiUrl}${id}`)
const fetchedData =await response.json()

const formattedData={
    teamBannerURL:fetchedData.team_banner_url,
    latestMatch: this.getFormattedData(fetchedData.latest_match_details),
    recentMatches:fetchedData.recent_matches.map(eachMatch=>
    this.getFormattedData(eachMatch),
    ),
}

this.setState({teamMatchesData:formattedData, isLoading: false})

}

renderRecentMatchesList =()=>{
    const {teamMatchesData}=this.state
    const {recentMatches}=teamMatchesData


return (

<ul className="recent-matches-list">
{recentMatches.map(recentMatch=>(

    <MatchCard matchDetails={recentMatch} key ={recentMatch.id} />
))}
</ul>
)
}

renderTeamMatches =()=>{
    const {teamMatchesData}= this.state
    const {teamBannerURL, latestMatch}=teamMatchesData



return (

<div className="responsive-container">
<img 
src={teamBannerURL} alt ="team banner" className="team-banner"
/>
<LatestMatch latestMatchData ={latestMatch} />
{this.renderRecentMatchesList()}
</div>

)
}


renderLoader =()=>(
<div testid ="loader" className="loader-container">
<Loader type="Oval" color="#ffffff" height={50} />

</div>
)




getRouteClassName=()=>{
const {match}=this.props
const {params}=match
const {id} = params

switch (id) {
    case 'RCB':
        return 'rcb'
    case 'KKR':
        return  'kkr'
    case 'KXP':
        return 'ksp'
    case 'CSK':
        return 'csk'
    case 'RR':
        return 'rr'
    case 'MI':
        return 'mi'
    case 'SH':
    return 'src'
    case 'DC':
        return  'dc'
    default:
    return ''
    
}
}


render(){

const {isLoading} =this.state
const className=`team-matches-container ${this.getRouteClassName()}`

return (

<div className={className}>
{isLoading ? this.renderLoader() : this.renderTeamMatches()}
</div>
)
}
}

export default TeamMatches