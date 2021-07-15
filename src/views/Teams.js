import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../utils/SectionProps';
//import SectionHeader from '../components/sections/partials/SectionHeader';
import Testimonial from '../components/elements/Testimonial'
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Teams = ({
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


  const teamInfo = [
    {name: 'Huskies Cricket', imag: 'dhruv'},
    {name: 'Sunrise CC', imag: 'dhruv'},
    {name: 'Sunrise Brown', imag: 'dhruv'},
    {name: 'ARCC', imag: 'dhruv'},
    {name: 'UW', imag: 'dhruv'},
    {name: 'Cambridge Rising Stars', imag: 'dhruv'},
    {name: 'Conestoga CC', imag: 'dhruv'},
    {name: 'Victoria CC', imag: 'dhruv'},
    {name: 'Gladiator CC', imag: 'dhruv'},
    {name: 'Kitchener Raptors', imag: 'dhruv'},
    {name: 'Cambridge United', imag: 'dhruv'},
    {name: 'Cambridge CC', imag: 'dhruv'},
    {name: 'Proteas CC', imag: 'dhruv'},
    {name: 'GujjarJatt CC', imag: 'dhruv'}
  ];

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
    title: 'Customer teamss',
    paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  };


  var rows = [];
for (var i = 0; i < 14; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<Testimonial name={teamInfo[i].name} imag={teamInfo[i].imag}  />);
}
  
  return (
    <section
      {...props} 
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={tilesClasses}>





           

       {rows}




          </div>
        </div>
      </div>
    </section>
  );
}

Teams.propTypes = propTypes;
Teams.defaultProps = defaultProps;

export default Teams;