import React from 'react';
import classNames from 'classnames';
import { useParams} from 'react-router-dom';
import { SectionTilesProps } from '../utils/SectionProps';
import ListView from '../components/elements/ListView';
import SectionHeader from '../components/sections/partials/SectionHeader';
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const TeamList = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
 

  const params = useParams().teamId;




  const teamInfo = [
    {teamN: 'Huskies Cricket', playerList: 
    [['Dhruv Panghal','Batsman'],
    ['Ankush Kumar (WK)','Batsman'],
    ['Abdul Naeem (C)','Batsman'],
    ['Sannan Mansoor','Batsman'],
    ['Talha Naeem','Batsman'],
    ['Taha Imam','Batsman'],
    ['Hamza Hamid','Batsman'],
    ['Ghyour','Batsman'],
    ['Saad Rehman','Batsman'],
    ['Saim Ahmad','Batsman'],
    ['Arsalan Wasi','Batsman'],
    ['Lucas Sakinofsky','Batsman'],
    ['Owais Hamid','Batsman'],
    ['Taha Hamid','Batsman'],
    ['Osama Hamid','Batsman'],
    ['Ahmed Imtiaz','Batsman'],
    ['Gundeep Singh','Batsman'],
    ['Sayeed Hassan','Batsman'],
    ['Abdul Hafeez Naeem','Batsman'],
    ['Hrishi Modi','Batsman']]},
    {teamN: 'Sunrise CC', playerList: 
    [['asdf Panghal','Batsman'],
    ['Abdul Naeem C','All Rounder']]},
    {teamN: 'Sunrise Brown', playerList: [['jkl Panghal','Batsman'],['Abdul Naeem C','All Rounder']]},
    {teamN: 'ARCC', playerList: [['Dhruv Panghal','Batsman'],['Abdul Naeem C','All Rounder']]},
    {teamN: 'UW', playerList: [['Dhruv Panghal','Batsman'],['Abdul Naeem C','All Rounder']]},
    {teamN: 'Cambridge Rising Stars', playerList: [['Dhruv Panghal','Batsman'],['Abdul Naeem C','All Rounder']]},
    {teamN: 'Conestoga CC', playerList: [['Dhruv Panghal','Batsman'],['Abdul Naeem C','All Rounder']]},
    
    {teamN: 'Victoria CC', playerList: [['Dhruv Panghal','Batsman'],['Abdul Naeem C','All Rounder']]},
    {teamN: 'Gladiator CC', playerList: [['Dhruv Panghal','Batsman'],['Abdul Naeem C','All Rounder']]},
    {teamN: 'Kitchener Raptors', playerList:
    [['Mankaran','Allrounder'],
    ['Bikram','Allrounder'],
    ['Ayaz','Batsman'],
    ['Manpreet','Bowler'],
    ['Avi','Batsman'],
    ['Akash','Bowler'],
    ['Tani','Allrounder'],
    ['Ishdeep (WK)','Batsman'],
    ['Karan','Batsman'],
    ['Harish','Bowler'],
    ['Pawan','Allrounder'],
    ['Gurpreet','Allrounder'],
    ['Zubin','Bowler'],
    ['Maaz','Batsman'],
    ['Mohit','Batsman']]},

    {teamN: 'Cambridge United', playerList:
    [['Suhel Pir (C)','Batsman'],
    ['Sadik Manjra','Batsman'],
    ['Anwar China','Batsman'],
    ['Shakil Patel (VC)','Batsman'],
    ['Maulik Patel','Batsman'],
    ['Sajid Pir','Batsman'],
    ['Abdul Samad Kazi','Batsman'],
    ['Husen Dukanwala','Batsman'],
    ['Ashraf Topia','Batsman'],
    ['Altaf Nav','Batsman'],
    ['Muhammad Gori','Batsman'],
    ['Sohel Baka','Batsman'],
    ['Yusuf Momla','Batsman'],
    ['Suleman Manjra','Batsman'],
    ['Faiyaz Jangda','Batsman'],
    ['Ahmed Patel','Batsman'],
    ['Ismail Kazi','Batsman']]},
    {teamN: 'Cambridge CC', playerList: [['Dhruv Panghal','Batsman'],['Abdul Naeem C','All Rounder']]},
    {teamN: 'Proteas CC', playerList: [['Dhruv Panghal','Batsman'],['Abdul Naeem C','All Rounder']]},
    {teamN: 'GujjarJatt CC', playerList: [['kohli','Batsman'],['dhoni C','All Rounder']]}
    
  ]

  var sectionHeaderTitle = ''
  var teamListData = []

  for (var i = 0; i < 14; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    if(params == teamInfo[i].teamN.replace(/\s/g, '')){
      teamListData = teamInfo[i].playerList
      sectionHeaderTitle = teamInfo[i].teamN
    }
}





  const outerClasses = classNames(
    'teams section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'teams-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );


  const sectionHeader = {
    title: sectionHeaderTitle,
    paragraph: 'We the wolves of cricket.'
  };


  var rows = [];
for (var i = 0; i < teamListData.length; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<ListView name={teamListData[i][0]} role={teamListData[i][1]} />);
}
  return (
    <section
      {...props}
      className={outerClasses}
    >


<SectionHeader data={sectionHeader} className="center-content" />

      <div className="container">
        <div className={innerClasses}>
          <div >
        {rows}
          </div>
        </div>
      </div>
    </section>
  );
}

TeamList.propTypes = propTypes;
TeamList.defaultProps = defaultProps;

export default TeamList;