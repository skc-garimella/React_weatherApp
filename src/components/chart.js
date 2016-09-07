
import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {


    return(
      <div>
        <Sparklines data={props.values} width={180} height={120}>
          <SparklinesLine color={props.color} />
          <SparklinesReferenceLine type={props.type} />
        </Sparklines>
        <div>{average(props.values)} {props.units}</div>
      </div>
    );


}
