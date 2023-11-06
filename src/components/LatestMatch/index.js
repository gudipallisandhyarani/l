// Write your code here

const LatestMatch= props =>{
    const {latestMatchData} = props

const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
} = latestMatchData

return (
<div className="latest-match-container">
<h1 className="latest-match-heading">Latest Matches</h1>
<div className="latest-match-card">
<div className="latest-match-logo-container">
<div className="latest-match-details-1">
<p className="name">{competingTeam}</p>
<p className="date">{date}</p>
<p className="match-details">{venue}</p>
<p className="match-details">{result}</p>
</div>

<img 
src={competingTeamLogo}
className="latest-match-team-logo"
alt={`latest match ${competingTeam}`}

/>
</div>

<hr className="separator" />
<div className="latest-match-details-2">
<p className="latest-match-details-label">First Innings</p>

<p className="latest-match-details-value">{firstInnings}</p>
<p className="latest-match-details-label">Second Innings</p>
<p className="latest-match-details-value">{secondInnings}</p>
<p className="latest-match-details-label">Man Of TheMatch</p>
<p className="latest-match-details-value">{manOfTheMatch}</p>
<p className="latest-match-details-label">Umpires</p>
<p className="latest-match-details-value">{umpires}</p>

</div>

</div>
</div>
)
}

export default LatestMatch