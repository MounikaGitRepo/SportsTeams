import {HiMenuAlt1} from 'react-icons/hi'
import {AiOutlineHome} from 'react-icons/ai'
import {MdContentCopy} from 'react-icons/md'
import './index.css'

const SportsTeamPage = () => (
  <div className="team-page-container">
    <div className="team-bg">
      <nav className="nav-bar-container">
        <div className="menu-team-name">
          <button type="button" className="hide-btn">
            {' '}
            <HiMenuAlt1 className="menu-icon" />{' '}
          </button>
          <p className="team-name">Hyderabad</p>
        </div>
        <button type="button" className="hide-btn">
          {' '}
          <AiOutlineHome className="home-icon" />
        </button>
      </nav>
      <img
        className="team-logo"
        alt="team logo"
        src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png"
      />
    </div>
    <div className="team-features">
      <img
        className="small-team-logo"
        alt="team logo"
        src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png"
      />
      <h1 className="team-heading">Hyderabad(HSVC)</h1>
      <button className="import-token-btn" type="button">
        Import Token
      </button>
    </div>
    <p className="token-add-heading">Token Address</p>
    <div className="token-container">
      <p className="token">0xB90E....A051B2D25</p>
      <button type="button" className="copy-container">
        <MdContentCopy className="copy-icon" />
      </button>
    </div>
    <div className="premium-and-score-container">
      <ul className="team-premium-container">
        <li className="type">
          Number of Tokens <span className="span-element">0.000</span>
        </li>
        <li className="type">
          Current price of Share{' '}
          <span className="span-element green">$0.005234</span>
        </li>
        <li className="type">
          24 hours change(%){' '}
          <span className="span-element red"> -1.000000001256768-13</span>
        </li>

        <div className="buy-sell-container">
          <button type="button" className="custom-btn">
            Buy
          </button>
          <button type="button" className="custom-btn">
            Sell
          </button>
        </div>
      </ul>
      <ul className="score-card">
        <li className="score-item">
          <p>Total Matches:</p>
          <p>14</p>
        </li>
        <li className="score-item">
          <p>Total Won:</p>
          <p>6</p>
        </li>
        <li className="score-item">
          <p>Total Lost:</p>
          <p>8</p>
        </li>
        <li className="score-item">
          <p>TotalNet run rate:</p>
          <p>-0.347</p>
        </li>
        <li className="score-item">
          <p>Total Points:</p>
          <p>12</p>
        </li>
      </ul>
    </div>
    <h1 className="match-history-heading">Match History</h1>
    <ul className="match-history-lists">
      <div className="match-details-card">
        <div className="row-alignment">
          <div className="col-alignment">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png"
            />
            <p>Hyderabad</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLba94Qp7wKK5VHaHHvFTJu0udyfEgIsV5Dw&usqp=CAU"
            />
            <p>Delhi</p>
          </div>
        </div>
        <p className="won-by">Delhi won by 21 runs</p>
      </div>
      <div className="match-details-card">
        <div className="row-alignment">
          <div className="col-alignment">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png"
            />
            <p>Hyderabad</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLba94Qp7wKK5VHaHHvFTJu0udyfEgIsV5Dw&usqp=CAU"
            />
            <p>Delhi</p>
          </div>
        </div>
        <p className="won-by">Delhi won by 21 runs</p>
      </div>
      <div className="match-details-card">
        <div className="row-alignment">
          <div className="col-alignment">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png"
            />
            <p>Hyderabad</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLba94Qp7wKK5VHaHHvFTJu0udyfEgIsV5Dw&usqp=CAU"
            />
            <p>Delhi</p>
          </div>
        </div>
        <p className="won-by">Delhi won by 21 runs</p>
      </div>
      <div className="match-details-card">
        <div className="row-alignment">
          <div className="col-alignment">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png"
            />
            <p>Hyderabad</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLba94Qp7wKK5VHaHHvFTJu0udyfEgIsV5Dw&usqp=CAU"
            />
            <p>Delhi</p>
          </div>
        </div>
        <p className="won-by">Delhi won by 21 runs</p>
      </div>
      <div className="match-details-card">
        <div className="row-alignment">
          <div className="col-alignment">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png"
            />
            <p>Hyderabad</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLba94Qp7wKK5VHaHHvFTJu0udyfEgIsV5Dw&usqp=CAU"
            />
            <p>Delhi</p>
          </div>
        </div>
        <p className="won-by">Delhi won by 21 runs</p>
      </div>
      <div className="match-details-card">
        <div className="row-alignment">
          <div className="col-alignment">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png"
            />
            <p>Hyderabad</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLba94Qp7wKK5VHaHHvFTJu0udyfEgIsV5Dw&usqp=CAU"
            />
            <p>Delhi</p>
          </div>
        </div>
        <p className="won-by">Delhi won by 21 runs</p>
      </div>
      <div className="match-details-card">
        <div className="row-alignment">
          <div className="col-alignment">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png"
            />
            <p>Hyderabad</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLba94Qp7wKK5VHaHHvFTJu0udyfEgIsV5Dw&usqp=CAU"
            />
            <p>Delhi</p>
          </div>
        </div>
        <p className="won-by">Delhi won by 21 runs</p>
      </div>
      <div className="match-details-card">
        <div className="row-alignment">
          <div className="col-alignment">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png"
            />
            <p>Hyderabad</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLba94Qp7wKK5VHaHHvFTJu0udyfEgIsV5Dw&usqp=CAU"
            />
            <p>Delhi</p>
          </div>
        </div>
        <p className="won-by">Delhi won by 21 runs</p>
      </div>
      <div className="match-details-card">
        <div className="row-alignment">
          <div className="col-alignment">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png"
            />
            <p>Hyderabad</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLba94Qp7wKK5VHaHHvFTJu0udyfEgIsV5Dw&usqp=CAU"
            />
            <p>Delhi</p>
          </div>
        </div>
        <p className="won-by">Delhi won by 21 runs</p>
      </div>
      <div className="match-details-card">
        <div className="row-alignment">
          <div className="col-alignment">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png"
            />
            <p>Hyderabad</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLba94Qp7wKK5VHaHHvFTJu0udyfEgIsV5Dw&usqp=CAU"
            />
            <p>Delhi</p>
          </div>
        </div>
        <p className="won-by">Delhi won by 21 runs</p>
      </div>
      <div className="match-details-card">
        <div className="row-alignment">
          <div className="col-alignment">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png"
            />
            <p>Hyderabad</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLba94Qp7wKK5VHaHHvFTJu0udyfEgIsV5Dw&usqp=CAU"
            />
            <p>Delhi</p>
          </div>
        </div>
        <p className="won-by">Delhi won by 21 runs</p>
      </div>
      <div className="match-details-card">
        <div className="row-alignment">
          <div className="col-alignment">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png"
            />
            <p>Hyderabad</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLba94Qp7wKK5VHaHHvFTJu0udyfEgIsV5Dw&usqp=CAU"
            />
            <p>Delhi</p>
          </div>
        </div>
        <p className="won-by">Delhi won by 21 runs</p>
      </div>
      <div className="match-details-card">
        <div className="row-alignment">
          <div className="col-alignment">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png"
            />
            <p>Hyderabad</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLba94Qp7wKK5VHaHHvFTJu0udyfEgIsV5Dw&usqp=CAU"
            />
            <p>Delhi</p>
          </div>
        </div>
        <p className="won-by">Delhi won by 21 runs</p>
      </div>
      <div className="match-details-card">
        <div className="row-alignment">
          <div className="col-alignment">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png"
            />
            <p>Hyderabad</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLba94Qp7wKK5VHaHHvFTJu0udyfEgIsV5Dw&usqp=CAU"
            />
            <p>Delhi</p>
          </div>
        </div>
        <p className="won-by">Delhi won by 21 runs</p>
      </div>
      <div className="match-details-card">
        <div className="row-alignment">
          <div className="col-alignment">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRH.png"
            />
            <p>Hyderabad</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <p>149/7</p>
            <p className="grey">(20.0)</p>
          </div>
          <div className="col-alignment-container">
            <img
              className="small-team-logo"
              alt="team logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLba94Qp7wKK5VHaHHvFTJu0udyfEgIsV5Dw&usqp=CAU"
            />
            <p>Delhi</p>
          </div>
        </div>
        <p className="won-by">Delhi won by 21 runs</p>
      </div>
    </ul>
  </div>
)

export default SportsTeamPage
